---
date:
  created: 2025-10-03
links:
  - Output Module: projects/output/index.md
  - Moritz Klein's Youtube page: https://www.youtube.com/@MoritzKlein0
  - Music From Outer Space: https://musicfromouterspace.com/
tags:
  - module
  - utility
authors:
  - idyllm
slug: output-module
---

# Output Module

I've started to migrate the projects I've completed so far over to this site. The first one I ported is the [output module](../../projects/output/index.md). 

<!-- more -->

When I started building the modular synth, I started from scratch: I didn't have any basic pieces like a power supply (a post for another day) or a way to get a signal to a speaker. I got interested in this when I saw Moritz Klein's [VCO](https://www.youtube.com/watch?v=QBatvo8bCa4) videos, but in order to get anything other than a drone out of it, you need

* dual rail power supply ($\pm 12V$ for Eurorack),
* some kind of input like a sequencer (following the 1V/octave standard),
* the VCO itself,
* some kind of output amplifier to plug your speaker/headphones into,
* and a case to stick it all in.

This is where I started to learn about the many amazing people that have come before and shared designs that helped me figure out these building blocks. In particular, Ray Wilson's [Music From Outer Space (MFOS) Synth-DIY](https://musicfromouterspace.com/index.php?MAINTAB=SYNTHDIY) pages got me going with the stereo panning mixer, which included an output stage. 

This was also the module where learned alot about the mechanical design and got a bit more creative with the faceplate. So far, it works well enough, although there are a couple of things I'd consider for future versions, including

* better output amplifiers (I had some LM386s already, but even with extra caps, there's still a hiss)
* tweaks to the gain across the output amplifier (input stage attenuation; overall gain to avoid clipping too early)

Next time.