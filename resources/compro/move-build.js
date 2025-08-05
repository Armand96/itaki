const fs = require("fs-extra");
const path = require("path");

const source = path.join(__dirname, "dist"); // Hasil export Next.js
const destination = path.join(__dirname, "../../public/compro"); // Folder tujuan di Laravel

(async () => {
  try {
    console.log("🚀 Menghapus folder lama di public/compro...");
    await fs.remove(destination);

    console.log("📂 Memindahkan hasil build ke public/compro...");
    await fs.copy(source, destination);

    console.log("✅ Next.js berhasil dipindahkan ke Laravel!");
  } catch (err) {
    console.error("❌ Gagal memindahkan Next.js:", err);
  }
})();
