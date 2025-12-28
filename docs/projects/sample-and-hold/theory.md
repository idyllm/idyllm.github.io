# Design

Most analog S&H circuits use a JFET to gate the input signal to a holding capacitor. That voltage is then buffered to the output. Examples include

* Older S&H from Rene Schmitz: [schmitzbits.de](https://schmitzbits.de/sah.html)
* YuSynth noise module: [yusynth.net](https://yusynth.net/Modular/EN/NOISE/index.html)
* Moritz Klein's version on [Youtube](https://www.youtube.com/watch?v=kIJqzkRe4do) and via [Erica Synths](https://www.ericasynths.lv/media/SH_MANUAL_v1.pdf)

The second version from Rene Schmitz uses the LF398, and I thought, "why not try something different?"

## Feature Ideas

These are just some ideas I jotted down (from an older design note).

-   Internal clock and external trigger (rising edge)
    -   Add swing on the internal clock? two bit counter + JFET in parallel
        with extra series R? Not implemented.
-   Glide/smooth output
    -   Exponential (RC low pass). Yes, implemented a 12dB/dec Sallen-Key low pass filter (LPF).
    -   Linear? An integrator with variable gain? Not implemented.
-   Offset / output level control: use mixer/attenuver (added one here).
-   VC clock: probably better to use an external clock on the trigger. 

## Sallen-Key Low Pass Filter

The cannonical form of the second order LPF is

$$
H(s) = \frac{K}{\left(s / \omega_0\right)^2 + \frac{1}{Q}\left(s/\omega_0\right) + 1}
$$

The Sallen-Key LPF has transfer function

$$
\begin{align*}
H(s) &= \frac{KG_1G_2}{s^2C_1C_2 + s[C_2(G_1 + G_2) + C_1G_2(1-K)] + G_1G_2} \\
&= \frac{K}{s^2R_1R_2C_1C_2 + s[C_2(R_1 + R_2) + R_1C_1(1-K)] + 1} \\
\end{align*}
$$

such that

$$
\begin{align*}
\omega_0^2 &= \frac{1}{R_1R_2C_1C_2} \\
Q &= \frac{\sqrt{R_1R_2C_1C_2}}{C_2(R_1 + R_2) + R_1C_1(1-K)}
\end{align*}
$$

Assuming unity gain of $K=1$ and letting $R_1 = R_2 = R$,

$$
\begin{align*}
\omega_0^2 &= \frac{1}{R^2C_1C_2} \\
Q &= \frac{\sqrt{C_1C_2}}{2C_2}
\end{align*}
$$

For a maximally flat (Butterworth) filter, $Q = \frac{1}{\sqrt{2}}$ when $C = C_1 = 2C_2$. This results in $\omega_0^2 = \frac{1}{2R^2C^2}$ or $f_0 = \frac{1}{2\pi\sqrt{2}RC}$.

By choosing $R_1 = R_2 = R$, the cutoff frequency can be controlled with a dual-gang potentiometer. Choose a "log" (A) taper to obtain a more natural tuning. In this design, I've set $C_1 = 22\mu\mathrm{F}$ and $C_2 = 10\mu\mathrm{F}$, resulting in a very slight resonnance ($Q > 1/\sqrt{2}$). The minimum value for $R$ is $1\mathrm{k}\Omega$, which results in cutoff frequencies ranging from approximately 50mHz to 5Hz.

## References

1. R. Shaumann and M. van Valkenburg, "Design of Analog Filters," Oxford University Press (2001)

