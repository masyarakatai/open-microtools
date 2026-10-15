# Rekap pengeluaran chat ke spreadsheet

## Masalah

Pengeluaran harian sering ditulis sebagai chat pendek dan sulit direkap di akhir bulan.

## Hasil akhir

Satu spreadsheet berisi tanggal, kategori, nominal, catatan, dan sumber pesan yang dapat difilter per bulan.

## Yang dibutuhkan

- Spreadsheet kosong.
- Salinan teks chat yang sudah disetujui pemiliknya.
- Model AI pilihan Anda untuk membantu ekstraksi, atau input manual.

Biaya bergantung pada model yang digunakan. Hindari memasukkan percakapan sensitif ke layanan cloud tanpa izin.

## Langkah

1. Buat kolom: `tanggal`, `kategori`, `nominal`, `catatan`, dan `sumber`.
2. Hapus nama, nomor telepon, dan informasi sensitif yang tidak diperlukan.
3. Jalankan teks melalui recipe [ekstraksi pengeluaran](../recipes/ekstraksi-pengeluaran.md).
4. Tinjau semua nilai nominal sebelum memasukkannya ke spreadsheet.
5. Buat filter bulanan dan total per kategori.

## Privasi dan batasan

Model dapat salah membaca nominal atau tanggal. Jangan gunakan output sebagai bukti akuntansi tanpa verifikasi manual.

## Bukti uji

Gunakan minimal sepuluh pesan contoh anonim dan catat jumlah baris yang perlu dikoreksi.
