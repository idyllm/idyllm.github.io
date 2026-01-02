# Projects

This is a collection of engineering notebooks for the various modules I've built. Together, they should make a decent synthesizer.

## Utilities

### [Output Module](output/index.md)

An audio output module for Eurorack, combining two mono input channels into a stereo output with a panning mixer. The stereo output is suitable to drive headphones or small speakers.

### [Mixer+](mixer/index.md)

The Mixer+ module includes a basic three channel mixer as well as an attenuverter with the option to add distortion to the output signal.

### USB-C PSU

A power supply with USB-C PD input and SMPS delivering +12V, +5V, and -12V rails. (not documented yet). 

### ProtoPower

A utility module for prototyping, with a pulse generator (one-shot or loop, variable duty cycle), AR envelope, front panel power connections (including IDC header) and a current monitor. (not documented yet).

## Signal Processing

### [Dual VCA](dual-vca/index.md)

A simple dual VCA with linear control built around the LM13700 OTA.

### [Gate Delay](gate-delay/index.md)

A gate delay with buffering, capable of delaying 1-4 pulses while maintaining pulse length.

### ['358 SNH](sample-and-hold/index.md)

A sample and hold module built around the LF398 with smoothed (low-pass filtered) output.

## Filters

### [State Variable Filter](svf-1/index.md)

A classic state variable filter with second-order low-, high- and band-pass outputs (+ a notch filter output).

### Low Pass Gate

Another classic built around a Sallen-Key architecture with vactrols to provide variable impedance. (not documented yet).

## Sources

### VCO-1

Based on the design from Moritz Klein, this VCO is a saw-core with V/oct tuning and saw, pulse (with PWM) and triangle outputs. (not documented yet).

### [ADSR EG](adsr-eg/index.md)

A 555-core ADSR envelope generator with some extras, including looping for LFO behaviour and a trigger input.

### [Random Noise](noise/index.md)

A noise generating module with white, pink and blue noise outputs as well as grains inspired by the MFOS Noise Cornucopia.

### Sequencer-1

A 16-step sequencer in the Eurorack format inspired by the Korg SQ-1, designed as an experimental platform with Arduino-compatible firmware. (not documented yet).