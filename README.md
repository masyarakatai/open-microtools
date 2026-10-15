# Open Microtools

Library terbuka berbahasa Indonesia untuk memakai dan membangun microtool AI yang praktis. Setiap materi harus menjelaskan cara pakai, biaya, dan catatan privasi secara jujur.

Tujuannya sederhana: membantu orang menemukan tool kecil yang benar-benar bisa langsung dicoba—bukan sekadar daftar prompt atau kumpulan tautan.

## Empat cara memakai Open Microtools

| Bagian | Untuk apa | Bentuk kontribusi |
| --- | --- | --- |
| [`tools/`](./tools) | Menemukan software yang tepat | Satu listing YAML yang dapat diverifikasi |
| [`projects/`](./projects) | Membangun solusi dari masalah kerja nyata | Panduan langkah demi langkah |
| [`recipes/`](./recipes) | Menjalankan workflow, prompt, atau skill siap pakai | Template dengan input, output, dan batasan |
| [`verified/`](./verified) | Menemukan tool milik pembuat yang dapat dikonfirmasi | Listing dengan bukti kepemilikan |

Mulailah dari `projects/` bila Anda punya masalah kerja, dari `recipes/` bila ingin hasil cepat, atau dari `tools/` bila sedang membandingkan software.

## Tambahkan tool Anda

Kontributor boleh menambahkan tool buatan sendiri, atau tool open source yang mereka gunakan dan bisa jelaskan dengan baik.

1. Fork repositori ini.
2. Pilih satu bagian yang paling cocok, lalu salin template di folder tersebut.
3. Isi semua kolom secara jujur, terutama biaya, privasi, serta hal yang belum Anda verifikasi.
4. Jalankan `node scripts/validate-listings.mjs` untuk listing tool.
5. Buka pull request dengan satu listing yang jelas dan dapat diverifikasi.

Baca detailnya di [CONTRIBUTING.md](./CONTRIBUTING.md). Semua kontributor mengikuti [Code of Conduct](./CODE_OF_CONDUCT.md).

## Prinsip kurasi

- Tautan source atau demo harus aktif.
- Klaim biaya dan privasi harus spesifik; jangan menebak.
- Tidak menerima referral spam, listing duplikat, atau tool tanpa kegunaan jelas.
- Listing boleh berbahasa Indonesia atau Inggris.
- Proyek dan recipe harus bisa dicoba tanpa akses rahasia atau klaim hasil yang berlebihan.

## Lisensi

Dokumentasi dan metadata di repositori ini tersedia di bawah lisensi [MIT](./LICENSE).
