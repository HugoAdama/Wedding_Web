// Sintetizador acústico suave con Web Audio API (100% libre de dependencias y 100% offline)
export class MelodiaBoda {
  private ctx: AudioContext | null = null;
  private timer: number | null = null;
  private activo = false;
  private step = 0;

  // Acordes suaves inspirados en balada acústica campestre (D, G, Bm, A)
  private notas = [
    // Acorde Re Mayor
    146.83, 220.00, 293.66, 369.99, 440.00,
    // Acorde Sol Mayor
    196.00, 246.94, 293.66, 392.00, 493.88,
    // Acorde Si menor
    123.47, 185.00, 246.94, 293.66, 369.99,
    // Acorde La Mayor
    110.00, 164.81, 220.00, 277.18, 329.63,
  ];

  iniciar(): void {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.activo = true;
    this.tocarPaso();
  }

  private tocarPaso(): void {
    if (!this.activo || !this.ctx) return;

    const freq = this.notas[this.step % this.notas.length];
    this.sonarNota(freq);

    this.step++;
    // Ritmo de arpegio suave cada 340ms
    this.timer = window.setTimeout(() => this.tocarPaso(), 340);
  }

  private sonarNota(freq: number): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Sonido cálido tipo guitarra acústica / celesta
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const t = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.08, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 1.25);
  }

  detener(): void {
    this.activo = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  estaReproduciendo(): boolean {
    return this.activo;
  }
}
