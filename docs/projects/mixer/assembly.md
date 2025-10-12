# Assembly Guide

!!! note

    This guide is for the v1.2 PCB

## Placing Components

### Backside

* Resistors: R5, R23, R30 (or ferite bead)
* Diode D1

### Frontsize

* DIP socket: U1
* Ceramic capacitors: C1-C2, C4-C7
* 100k resistors: R1-R4, R6, R17, R18, R20, R21
* 47k resistors: R19, R24, R26
* Remaining attenuverter resistors: R22, R25, R27
* Output resistors: R7-R9, R28
* Power input resistors and electrolytic capacitors:

    - R29. Alternative: ferite beads
    - C3, C8, C9
    - D6, D7

* Signal diodes: D4, D5
* Output level indicator circuit:

    - R10-R16
    - Q1, Q2
    - *do not populate LEDs yet*

* Audio jacks: J1-J7
* 50k (B503) potentiometer: RV5
* 100k (B104) potentiometers:

    - no detent: RV1-RV4
    - with detent: RV6

* DPDT switch: SW1
* IDC header

Before adding LEDs (D2 and D3), add the spacing washers for the audio
jacks and fit the faceplate

## Faceplate and Knobs

* Add 0.6mm M6 nylon washers over the audio jacks.
* Fit the faceplate and solder the LEDs

    -   Insert the LEDs (D2 and D3) in the holes in the PCB (*observe polarity & colour*).
    -   Ensure that the faceplate fits close. It can be secured with
        nuts for the audio jacks or an elastic while mounting the LEDs
    -   Adjust the LEDs so that they project through their holes in
        the faceplate then solder in place.

* Attach the faceplate with the nuts for the audio jacks and the
  switch. An additional washer can be used for the switch on the front
  of the faceplate.

* Attach the knobs.

## BOM

Download [bom.csv](assets/bom.csv). All resistors are 5% and unpolarized capacitors are ceramic unless otherwise noted. 

!!! note

    The offset potentiometer (RV6) should include a mid-point detent.

{%include-markdown "projects/mixer/assets/bom.md"%}