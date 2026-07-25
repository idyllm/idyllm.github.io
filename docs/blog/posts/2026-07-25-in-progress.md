---
date:
  created: 2026-07-25
links:
  - Wait, Gate: projects/gate-delay/index.md
  - Output: projects/output/index.md
authors:
  - idyllm
slug: in-progress-july-2026
---

# Mid-year Review

With enough modules now for a basic synth, I've had more time to play with it. I'm also out of space in my first case (more importantly I need more rails), which has forced some decisions about what to keep or drop for the time being. One module that I've removed completely is the [gate delay](../../projects/gate-delay/index.md): there's some firmware bug where it misses gate pulses and gets stuck in some weird state. More notes below the fold.

<!-- more -->

I'm motivated to update the VCO. I haven't posted that one here yet, because it's due for a refresh, but in the next case I'd like to have at least three available. I recently made a side trip to [Robotspeak](https://robotspeak.com/) in San Francisco and picked up a souvenir: a Dreadbox Telepathty as "reference" module (it's like a mini synth, combining VCO+LFO+ENV+VCF+VCA). I still prefer having these functions split out between modules, and I had to swap out a VCO, but it's been interesting to think about the voice construction in a compact way.

I also need to refresh the [Output](../../projects/output/index.md) module: I used the LM386 as an amplifier for a headphone jack, but the hiss is... unpleasant. I've added this to the list of things to do. As an updated version, I'd like to incorporate CV for the panning. Yves Usson (Yusynth) has a great module here that I plan on using as a template: [Mixout-VC Panner](https://yusynth.net/Modular/EN/MIXOUT/index.html).

However, the design I've been working on recently has been an update to the PSU. WIth the original design (not yet posted here), I had only had two boards populated, and both are in use, so I decided to do a rev 2. I've done a lot of actual testing on this one and it's close to being ready. Once that's out of the way, I'll probably work on a second case (portable or "studio" ... don't know). 

Closing thoughts: 

I had a request recently in the Github issues tracker for the squencer to provide an update. This is something that I still feel I'm missing in the modular (I currently rely on the Keystep), along with a bunch of other pattern generators and CV tools (drum sequencer, quantizer, clock divider, ...). I have a prototype of a sqequencer modeled after the Korg SQ-1 that I've designed as a platform to explore sequencing with an emphasis on simple and accessible parts. It's based around a fairly common microcontoller platform (Adafruit's ItsyBitsy), but it's grown to be quite complex: the assembly effort alone is substantial. For a project like this, it would be nice to have some collaboration, which reminds me that I still need to add Giscus to this platform (which may depend on migrating this thing to [Zensical...](https://squidfunk.github.io/mkdocs-material/blog/2025/11/05/zensical/)). In the meantime, there's an email link if you're interested.


