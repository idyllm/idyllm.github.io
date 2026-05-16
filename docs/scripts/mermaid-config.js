import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
import { patch } from "https://cdn.jsdelivr.net/npm/@idyllm/mermaid-patch@0.1.2/dist/mermaid-patch.core.mjs";

const patchConfig = {
  legend: true,
  legendPosition: 'top-right',
};

// Saved reference to the original mermaid.render() — used in the lightbox to
// re-render at natural (unscaled) size without going through our interception.
let _render;

// ── Lightbox ─────────────────────────────────────────────────────────────
// Takes the original diagram source text and re-renders at natural pixel size.

async function openLightbox(diagramText) {
  const lb = document.createElement('div');
  lb.className = 'patch-lightbox';

  const inner = document.createElement('div');
  inner.className = 'patch-lightbox-inner';

  // Re-render using the original (un-intercepted) render function so the SVG
  // has its natural width/height, not the responsive width="100%" version.
  const { svg } = await _render('patch-lightbox-' + Date.now(), diagramText);
  inner.innerHTML = svg;
  lb.appendChild(inner);

  // Close on backdrop click (but not on the inner container)
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.remove();
  });

  // Close on Escape key
  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      lb.remove();
      document.removeEventListener('keydown', onKeyDown);
    }
  };
  document.addEventListener('keydown', onKeyDown);

  document.body.appendChild(lb);
}

// ── Pre-processing ────────────────────────────────────────────────────────
// Wraps patch diagram pre.mermaid elements with .patch-diagram-wrap and
// injects an expand button BEFORE Material replaces the pre with a div.mermaid
// shadow host. When Material does the replacement, the wrapper and button are
// already in place and persist — no element reference from render() needed.

function preprocessPatchDiagrams() {
  document.querySelectorAll('pre.mermaid:not([data-patch-pre])').forEach((pre) => {
    const code = pre.querySelector('code') || pre;
    const text = (code.textContent || '').trim();
    if (!text.startsWith('patch')) return;

    // Mark so we don't double-process on repeated calls (SPA navigation).
    pre.setAttribute('data-patch-pre', '');

    const wrap = document.createElement('div');
    wrap.className = 'patch-diagram-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    const btn = document.createElement('button');
    btn.className = 'patch-diagram-expand';
    btn.setAttribute('aria-label', 'Expand diagram');
    btn.textContent = '⤢';
    // text is captured in the closure here, before Material replaces the pre.
    btn.addEventListener('click', () => openLightbox(text));
    wrap.appendChild(btn);
  });
}

// ── Mermaid setup ─────────────────────────────────────────────────────────

// Material calls mermaid.initialize() with its own stripped-down config
// (no patch key), overwriting anything set earlier. Wrap it so our
// settings always win regardless of what Material passes.
const _initialize = mermaid.initialize.bind(mermaid);
mermaid.initialize = (config) => {
  _initialize({ securityLevel: 'loose', ...config, patch: patchConfig });
};

// Intercept mermaid.render() — called by Material before it inserts the SVG
// into the closed shadow root on div.mermaid. For patch diagrams:
//   1. Rewrite the SVG to use width="100%"; viewBox preserves the aspect ratio.
//   2. Apply max-width (= natural rendered width) on the shadow host so small
//      diagrams don't stretch to fill the full content column.
//
// Material does not reliably pass the shadow host as argument 3, so we locate
// the host via .patch-diagram-wrap. Material renders diagrams in document order
// and setTimeout callbacks fire FIFO, so the Nth callback finds the Nth host.
_render = mermaid.render.bind(mermaid);
mermaid.render = async (id, text, element) => {
  const result = await _render(id, text, element);
  if (typeof text === 'string' && text.trimStart().startsWith('patch')) {
    const widthMatch = result.svg.match(/\bwidth="(\d+)"/);
    const naturalWidth = widthMatch ? parseInt(widthMatch[1]) : null;

    const modifiedSvg = result.svg.replace(
      /^<svg ([^>]*)>/,
      (_, attrs) => `<svg ${attrs
        .replace(/\bwidth="[^"]*"/, 'width="100%"')
        .replace(/\s*\bheight="[^"]*"/, '')
      }>`
    );

    // Find the shadow host: the first .patch-diagram-wrap div.mermaid without
    // a max-width yet. The FIFO guarantee of setTimeout(,0) means each callback
    // picks up the next host in document order.
    const capturedNW = naturalWidth;
    setTimeout(() => {
      const host = document.querySelector(
        '.patch-diagram-wrap div.mermaid:not([data-nw-set])'
      );
      if (host) {
        host.setAttribute('data-nw-set', '');
        if (capturedNW) host.style.maxWidth = capturedNW + 'px';
      }
    }, 0);

    return { ...result, svg: modifiedSvg };
  }
  return result;
};

// Intercept mermaid.run() to pre-process diagrams before each render cycle.
// Material calls this for SPA (instant) navigation re-renders.
const _run = mermaid.run.bind(mermaid);
mermaid.run = async (...args) => {
  preprocessPatchDiagrams();
  await _run(...args);
};

// Pre-process diagrams already in the DOM before exposing mermaid.
// Material starts rendering as soon as window.mermaid is set.
preprocessPatchDiagrams();
await mermaid.registerExternalDiagrams([patch]);

window.mermaid = mermaid;