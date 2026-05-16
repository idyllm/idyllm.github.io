---
date:
  created: 2026-05-15
links:
  - mermaid-patch: https://www.npmjs.com/package/@idyllm/mermaid-patch
tags:
  - patch 
authors:
  - idyllm
slug: mermaid-patch-intro
---

# Patch Diagrams for Mermaid

Now for something different: progress on new modules has been slow in the new year, but I've been working on a tool to help diagram some of the patches that I've been experimenting with. Based on the [Mermaid](https://github.com/mermaid-js/mermaid) syntax, the [mermaid-patch](https://www.npmjs.com/package/@idyllm/mermaid-patch) extension let's you embed patch diagrams in a page and it should be compatible with Material/MkDocs (which I use for this site).

<!-- more -->

Here's an example: if I put this code in a fenced block with the tag `mermaid` and the keyword `patch` at the beginning, e.g.

```
patch
module Oscillator {
    +voct V/oct
    +audio tri
    +audio saw
}
module Filter {
    +audio In
    +cv freq
    +audio LP
}
module VCA {
    +audio In
    +cv CV
    +audio Out
}
module Envelope {
    +gate trig
    +cv out
}

Oscillator osc1
Filter lpf1
VCA vca1
Envelope env1["ADSR"]

-->|MIDI gate| env1:trig
osc1:tri --> lpf1:In
env1:out --> lpf1:freq
lpf1:LP --> vca1:In
env1:out --> vca1:CV
vca1:Out -->|Out|
```

then it nicely renders a patch diagram!

``` mermaid
patch
module Oscillator {
    +voct V/oct
    +audio tri
    +audio saw
}
module Filter {
    +audio In
    +cv freq
    +audio LP
}
module VCA {
    +audio In
    +cv CV
    +audio Out
}
module Envelope {
    +gate trig
    +cv out
}

Oscillator osc1
Filter lpf1
VCA vca1
Envelope env1["ADSR"]

-->|MIDI gate| env1:trig
osc1:tri --> lpf1:In
env1:out --> lpf1:freq
lpf1:LP --> vca1:In
env1:out --> vca1:CV
vca1:Out -->|Out|
```

There is a lot of chicanery to get this fit into Material, but Claude is a clever fellow. There are some more details on useage in the docs that live with the library [mermaid-patch](https://github.com/xdylanm/mermaid-patch). It also lives as an npm package, so presumably it could be used alongside Mermaid in another project. Let me know if you do.
