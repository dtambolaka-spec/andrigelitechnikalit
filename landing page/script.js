document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrixCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const characters = "01"; // Hanya menggunakan angka 0 dan 1
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  // Setup posisi awal tetesan biner
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    // Warna latar transparan hitam pekat agar efek trail / jejak terlihat
    ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Warna teks biner - Cyan / Biru Neon
    ctx.fillStyle = "#06b6d4";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Mereset angka ke atas secara acak setelah mencapai bawah
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  // Kecepatan hujan biner (dalam milidetik)
  setInterval(draw, 35);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
