# Open Microtools

Direktori terbuka untuk microtool AI yang praktis: ada demo atau source, cara pakai singkat, biaya, dan catatan privasi.

Tujuannya sederhana: membantu orang menemukan tool kecil yang benar-benar bisa langsung dicoba—bukan sekadar daftar prompt atau kumpulan tautan.

## Temukan tool

Setiap tool berada di [`tools/`](./tools), satu file YAML per listing. Listing awal mencakup automasi, agen lokal, transkripsi, dan observability AI.

## Tambahkan tool Anda

Kontributor boleh menambahkan tool buatan sendiri, atau tool open source yang mereka gunakan dan bisa jelaskan dengan baik.

1. Fork repositori ini.
2. Salin [`tools/_template.yml`](./tools/_template.yml) menjadi `tools/nama-tool.yml`.
3. Isi semua kolom secara jujur, terutama biaya dan privasi.
4. Jalankan `node scripts/validate-listings.mjs`.
5. Buka pull request dengan satu listing yang jelas dan dapat diverifikasi.

Baca detailnya di [CONTRIBUTING.md](./CONTRIBUTING.md). Semua kontributor mengikuti [Code of Conduct](./CODE_OF_CONDUCT.md).

## Prinsip kurasi

- Tautan source atau demo harus aktif.
- Klaim biaya dan privasi harus spesifik; jangan menebak.
- Tidak menerima referral spam, listing duplikat, atau tool tanpa kegunaan jelas.
- Listing boleh berbahasa Indonesia atau Inggris.

## Lisensi

Dokumentasi dan metadata di repositori ini tersedia di bawah lisensi [MIT](./LICENSE).
