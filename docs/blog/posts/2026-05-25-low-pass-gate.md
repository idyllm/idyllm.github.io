---
date:
  created: 2026-05-25
links:
  - Low Pass Gate: projects/lpg/index.md
  - Eddy Bergman: https://www.eddybergman.com/
tags:
  - module
  - signal-processing
authors:
  - idyllm
slug: low-pass-gate
---

# Low Pass Gate

I built this module quite a while ago and finally got around to posting it. I think it came along shortly after I'd put together some of the basics (VCO, mixer, output). I was inspired by Eddy Bergman's [post](https://www.eddybergman.com/2020/10/synthesizer-build-part-35-resonant.html), and given the sound I decided to add a little extra with a "pluck" input. It is a great module to start with since it has a couple of key functions, a nice character in the sound, and it's pretty easy to assemble. 

<!-- more -->

With the low pass gate in the Buchla 292 style, you get both a VCF and a VCA. Any kind of gate will give you good modulation options (both pitch and amplitude), and with the Vactrols (optocouplers), you get a bit of decay for free. It's a naturally plucky sound for short gate pulses, so adding a dedicated pluck circuit (a rising edge trigger and a 555 one-shot) makes it even easier to work with. Later on, you could drive it with an envelope, but on the list of things to start with, I'd put this right near the top.

For more, there's also an excellent tutorial by Aaron Lanterman from his ECE4450 course, [L27: Buchla Lowpass Gates](https://www.youtube.com/watch?v=NGz3dDnoVVk).