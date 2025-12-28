# Sample and Hold

A sample and hold circuit does what it says: samples the input voltage at the start of an interval and holds that voltage at the output for the duration of the interval. This one is based on the LF398 IC as featured in Rene Schmitz's [YASH](https://schmitzbits.de/sah.html).

* Module size: 6HP (30mm)
* Power: ? (+12V); ? (-12V)

!!! repository "Project Source"

    The project files, including schematic and layout, are available on [github](https://github.com/xdylanm/sample-and-hold).

## Features

The circuit is based around the [LF398](https://www.ti.com/product/LF398-N) core detailed in Rene Schmitz's version with a sample window of approximately 10us and 40106 inverters used in place of the NAND gates. In addition, the module features

* External trigger input or internal clock to gate samples (1x and 10x rate switch).
* Direct and filtered outputs (12dB/dec Sallen-Key low-pass with variable cutoff).
* Extra attenuverter normaled to the filtered output.

This module works nicely when paired with a random noise source to generate a smooth slowly varying random signal at the filtered output.

## Documentation

* [Design](theory.md)
* [Assembly](assembly.md)
* [Schematic](assets/schematic.pdf)

## References

1.  Yves Usson, "Random module: Noise generator and Sample & Hold",
    [Yusynth](http://yusynth.net/Modular/EN/NOISE/index.html)
2.  Moritz Klein, "Designing a sample & hold circuit from scratch",
    [Youtube](https://www.youtube.com/watch?v=kIJqzkRe4do)
3.  Rene Schmitz, "YASH (Yet another Sample and Hold)",
    [schmitzbits.de](https://schmitzbits.de/sah.html)
4.  Eddy Bergman, "Revised sample and hold",
    [eddybergman.com](https://www.eddybergman.com/2023/03/revisedsampleandhold.html)
