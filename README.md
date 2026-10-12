# Portofolio — Fathir Khairan

Website portofolio pribadi dengan tema gelap yang minimalis, dibuat menggunakan **HTML, CSS, dan JavaScript murni** (tanpa framework). Berisi profil singkat, karya-karya yang pernah dikerjakan, daftar tools yang dikuasai, kontak, serta pemutar musik mini.

> *"Creating as I learn. Growing as I go."*

---

## Tentang Project

Saya adalah siswa **SMK TI DWIGUNA** jurusan **PPLG (Pengembangan Perangkat Lunak dan Gim)** yang berfokus pada UI/UX Design dasar dan Front-End Development. Website ini dibuat sebagai wadah untuk menampilkan hasil karya sekaligus latihan membangun antarmuka yang rapi dan interaktif.

## Fitur

- **Hero section** dengan animasi masuk (mask text & fade) serta kartu profil bergaya ID card
- **Navbar responsif** dengan efek saat scroll, penanda menu aktif (*scroll spy*), dan menu hamburger untuk mobile
- **Animasi reveal** saat elemen muncul ketika di-scroll (`IntersectionObserver`)
- **Cursor glow** yang mengikuti kursor (otomatis nonaktif di perangkat layar sentuh)
- **Modal preview project** pada bagian *Selected Work* sebelum masuk ke halaman detail
- **Halaman detail project** terpisah (Karya Desain & Project Game)
- **Music player** dengan playlist, tombol prev/next, progress bar yang bisa diklik, dan autoplay ke lagu berikutnya
- **Tampilan responsif** untuk desktop maupun mobile

## Isi Portofolio

| Project | Tahun | Tools | Link |
| --- | --- | --- | --- |
| Karya Desain | 2026 | CorelDraw, Infinite Design | `project-1.html` |
| Website **NatuBook** (perpustakaan digital) | 2025 | PHP, HTML, Tailwind, JavaScript | [natu-book.page.gd](https://natu-book.page.gd/?i=1) |
| Project Game *Permata yang Hilang* | 2025–2026 | RPG Maker | `project_game.html` · [itch.io](https://fathir-khairan.itch.io/permata-yang-hilang) |

## Tools & Technologies

HTML Dasar · CSS Dasar · Canva · Microsoft Office · Figma · CorelDRAW · Infinite Design

## Teknologi yang Digunakan

- **HTML5** untuk struktur halaman
- **CSS3** (custom properties, grid, flexbox, animasi/transisi)
- **JavaScript (Vanilla)** untuk interaksi, modal, scroll reveal, dan music player
- **Google Fonts** — [Manrope](https://fonts.google.com/specimen/Manrope) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

## Struktur Folder

```
.
├── index.html          # Halaman utama (Home, About, Projects, Skills, Contact)
├── project-1.html      # Halaman detail: Karya Desain
├── project_game.html   # Halaman detail: Project Game
├── style.css           # Seluruh styling website
├── script.js           # Interaksi: navbar, reveal, glow, modal
├── player.js           # Logika music player & playlist
├── images/             # Foto profil dan gambar project
└── music/              # File lagu (.mp3) untuk music player
```

## Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/fathir-khairan/<nama-repo>.git
   cd <nama-repo>
   ```
2. Buka `index.html` langsung di browser, **atau** jalankan dengan local server agar semua aset termuat dengan baik:
   ```bash
   # dengan Python
   python -m http.server 8000

   # atau dengan Node.js
   npx serve
   ```
3. Buka `http://localhost:8000` di browser.

## Kustomisasi

**Mengganti foto profil** — taruh foto di `images/foto_saya.jpg` (atau ubah path pada `index.html`).

**Menambah project baru** — salin satu tombol `<button class="proj ...">` di bagian `#projects` pada `index.html`, lalu isi atribut `data-*`:

```html
<button class="rv proj w7 wide"
  data-img="images/gambar.png"
  data-name="Nama Project"
  data-cat="Kategori"
  data-year="2026"
  data-tags="Tool 1, Tool 2"
  data-url="halaman-project.html"
  data-desc="Deskripsi singkat project.">
  ...
</button>
```

**Mengganti playlist musik** — edit array `playlist` di `player.js`:

```js
const playlist = [
  { title: 'Judul Lagu', artist: 'Nama Artis', src: 'music/lagu.mp3', cover: 'images/cover.jpg' }
]
```

## Kontak

- Email: [fathirkhairan584@gmail.com](mailto:fathirkhairan584@gmail.com)
- Instagram: [@fthirkh_](https://instagram.com/fthirkh_)
- GitHub: [github.com/fathir-khairan](https://github.com/fathir-khairan)

---

Designed & Developed by **Fathir Khairan** © 2026
