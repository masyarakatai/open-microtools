# Ekstraksi pengeluaran dari teks chat

## Cocok untuk

Mengubah pesan pengeluaran yang sudah dianonimkan menjadi baris spreadsheet.

## Input

Teks chat tanpa nomor telepon, alamat, maupun isi yang tidak relevan.

## Template

```text
Ekstrak transaksi pengeluaran dari teks berikut.
Keluarkan hanya tabel Markdown dengan kolom: tanggal, kategori, nominal_IDR, catatan, keyakinan.
Jika tanggal atau nominal tidak jelas, isi `perlu_konfirmasi`; jangan menebak.
Kategori hanya boleh: makan, transport, belanja, tagihan, kesehatan, lain-lain.

TEKS:
{tempel_teks_yang_sudah_dianonimkan}
```

## Checklist hasil

- Nominal tidak berubah digitnya dari teks sumber.
- Baris yang ambigu diberi `perlu_konfirmasi`.
- Tidak ada data pribadi yang muncul di tabel.

## Privasi dan batasan

Jangan memasukkan chat pribadi ke layanan cloud tanpa persetujuan. Hasil perlu dicek sebelum digunakan untuk pencatatan keuangan.
