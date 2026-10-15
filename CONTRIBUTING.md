# Contributing to Open Microtools

Terima kasih sudah ingin menambahkan tool. Kontribusi yang paling bernilai adalah listing yang membuat orang lain bisa mencoba atau menilai tool itu dalam beberapa menit.

## Syarat listing

- Tool harus dapat diakses melalui source publik atau demo yang aktif.
- Jelaskan kegunaan dalam bahasa sederhana dan konkret.
- Jelaskan model biaya yang diketahui. Bila tidak tahu, tulis `Unknown`; jangan membuat klaim gratis atau berbayar tanpa sumber.
- Jelaskan data apa yang keluar dari perangkat pengguna atau disimpan oleh layanan tersebut.
- Jangan menambahkan referral link, kode afiliasi, atau promosi terselubung.

## Cara membuka pull request

1. Tambah satu file YAML di `tools/` berdasarkan `_template.yml`.
2. Gunakan slug nama file yang kecil dan memakai tanda hubung, misalnya `tools/transcribe-local.yml`.
3. Jalankan `node scripts/validate-listings.mjs`.
4. Isi template pull request dan jelaskan bahwa Anda sudah mencoba tautannya.

Kami lebih memilih satu listing yang lengkap daripada banyak listing yang tipis.
