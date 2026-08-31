# Suhendra Photography

Premium photography landing page berbasis Next.js App Router dan TypeScript. Implementasi saat ini berfokus pada public-facing website yang cepat, responsif, mudah dikelola, dan siap dihubungkan ke CMS tanpa mengubah struktur UI.

## Menjalankan project

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Konfigurasi

- Konten utama tersimpan di `content/site.ts`.
- Foto website tersimpan di `public/images`.
- Tambahkan foto baru ke `siteContent.portfolio` dengan `id` unik, `collection`, dan `orientation`; gallery akan mengatur item ke-5 dan seterusnya secara otomatis.
- Isi `NEXT_PUBLIC_SITE_URL` sebelum deploy agar canonical URL, sitemap, dan Open Graph benar.
- Isi `NEXT_PUBLIC_WHATSAPP_NUMBER` dengan kode negara tanpa `+`, misalnya `6281234567890`.
- Ganti `instagramUrl` di `content/site.ts` setelah akun resmi tersedia.

## Perintah validasi

```bash
npm run lint
npm run typecheck
npm run build
```

## Status CMS

Public UI sengaja menggunakan satu content layer agar backend CMS dapat dipasang tanpa membongkar komponen. Auth, database, dan upload storage belum diaktifkan karena pilihan yang aman bergantung pada target hosting:

- Vercel/Netlify: PostgreSQL/Supabase + object storage (Supabase Storage atau Cloudinary).
- VPS persisten: PostgreSQL/SQLite + object storage/local volume yang dibackup.

Jangan menggunakan local filesystem untuk upload pada deployment serverless karena file tidak persisten. Tahap CMS berikutnya sebaiknya mencakup autentikasi admin, role tunggal, rate limiting, validasi upload, audit metadata, dan preview sebelum publish.
