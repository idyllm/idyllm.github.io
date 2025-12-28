# Assembly Guide

## Populate the PCB

Place and solder

* sockets for U1-U3
* R2, R17, R18
* ceramic capacitors
* diodes D1, D3, D4
* BJT Q1
* film capacitor C3 and remaining electrolytic capacitors
* mono jacks
* potentiometers
* IDC header (back side)

Install the LED (D2) once the panel is fitted to ensure alignment.

## Test and Calibration

No calibration required. To test, the internal oscillator or an external gate can be used to trigger samples. Apply a known waveform (e.g. triangle) at the input and observe the sampled waveform at the unfiltered output. 

## BOM

[Download (.csv)](assets/bom.csv)

{%include-markdown "projects/sample-and-hold/assets/bom.md"%}
