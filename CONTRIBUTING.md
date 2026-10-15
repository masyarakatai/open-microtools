# Contributing to Open Microtools

Terima kasih sudah ingin menambahkan materi. Kontribusi yang paling bernilai adalah materi yang membuat orang lain bisa mencoba atau menilai sesuatu dalam beberapa menit.

## Pilih jenis kontribusi

- **Tool:** satu listing aplikasi atau library di `tools/`.
- **Project:** tutorial membuat solusi untuk masalah nyata di `projects/`.
- **Recipe:** workflow, prompt, skill, atau konfigurasi yang siap disalin di `recipes/`.
- **Verified:** tool milik pembuat yang memasang bukti kepemilikan di `verified/`.

## Syarat listing

- Tool harus dapat diakses melalui source publik atau demo yang aktif.
- Jelaskan kegunaan dalam bahasa sederhana dan konkret.
- Jelaskan model biaya yang diketahui. Bila tidak tahu, tulis `Unknown`; jangan membuat klaim gratis atau berbayar tanpa sumber.
- Jelaskan data apa yang keluar dari perangkat pengguna atau disimpan oleh layanan tersebut.
- Jangan menambahkan referral link, kode afiliasi, atau promosi terselubung.

## Cara membuka pull request

1. Tambahkan satu materi berdasarkan template di folder yang sesuai.
2. Gunakan nama file kecil dengan tanda hubung, misalnya `projects/rekap-wa-ke-sheets.md`.
3. Untuk listing tool, jalankan `node scripts/validate-listings.mjs`.
4. Isi template pull request dan jelaskan apa yang sudah Anda coba.

Kami lebih memilih satu listing yang lengkap daripada banyak listing yang tipis.
