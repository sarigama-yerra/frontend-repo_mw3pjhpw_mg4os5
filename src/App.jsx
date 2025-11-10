import React, { useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

const profileFallback = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop'

function App() {
  const [photoUrl, setPhotoUrl] = useState(profileFallback)
  const inputRef = useRef(null)

  const navItems = useMemo(() => ([
    { id: 'home', label: 'home' },
    { id: 'tentang', label: 'tentang' },
    { id: 'proyek', label: 'proyek' },
    { id: 'sertifikat', label: 'sertifikat' },
    { id: 'my-skill', label: 'my-skill' },
    { id: 'kontak', label: 'kontak' },
  ]), [])

  const projects = [
    {
      title: 'komunitas-wfc',
      subtitle: 'komunitas efc',
      desc: 'deskripsi singkat saya ingin menciptakan dunia terbaru seperti aplikasi chat via web.',
      tags: ['EJS', 'CSS', 'node-js', 'API'],
      link: '#'
    },
    {
      title: 'reseller pterodactl',
      subtitle: 'resller pterodactl',
      desc: 'saya menggunakan nodejs MongoDB dan api unttuk menciptakan sebuah ilustraso seperti panel pterodactl.',
      tags: ['React', 'Node.js', 'DB'],
      link: '#'
    },
    {
      title: 'landing toko digital',
      subtitle: 'ui ecommerce',
      desc: 'desain antarmuka toko modern dengan animasi halus dan aksesibilitas optimal.',
      tags: ['UI/UX', 'Figma', 'Responsive'],
      link: '#'
    },
    {
      title: 'panel bot discord',
      subtitle: 'dashboard kontrol',
      desc: 'kelola bot dan perintah melalui antarmuka web yang elegan.',
      tags: ['React', 'API', 'Tailwind'],
      link: '#'
    },
    {
      title: 'portal portofolio 3d',
      subtitle: 'eksperimen spline',
      desc: 'memadukan 3d objek spline dengan desain portofolio futuristik.',
      tags: ['Spline', '3D', 'Framer'],
      link: '#'
    },
  ]

  const skills = ['HTML5','CSS3','JavaScript','EJS','C++','C#','React.js','Vue.js','Node.js','Python','Figma','Git','GitHub','Responsive Design','UI/UX Principles']

  function handlePhotoUpdate(e) {
    e.preventDefault()
    const val = inputRef.current?.value?.trim()
    if (!val) return
    setPhotoUrl(val)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            <span className="sr-only">brand</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400">awan berlian</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className="text-slate-300 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Social buttons with Font Awesome */}
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#kontak" className="hidden sm:inline-flex btn-primary btn-sm">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              hubungi
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">awan berlian</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight">
              halo, saya adalah pengembang web develope|
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl">
              seorang pengembang website dengan berbagai metode saya lakukan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proyek" className="btn-primary">
                <i className="fa-solid fa-eye mr-2"></i>
                lihat karya saya
              </a>
              <a href="#tentang" className="btn-outline">
                <i className="fa-solid fa-user mr-2"></i>
                tentang saya
              </a>
              <a href="#" className="btn-ghost">
                <i className="fa-solid fa-download mr-2"></i>
                unduh cv
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full">
            <div className="fancy-border p-1 rounded-2xl">
              <div className="rounded-2xl bg-slate-900/70 p-6 flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative shrink-0">
                  <div className="fancy-ring p-[3px] rounded-full">
                    <img src={photoUrl} alt="foto profil" className="w-40 h-40 object-cover rounded-full" />
                  </div>
                  <button title="ganti foto" className="absolute -bottom-2 -right-2 btn-icon btn-sm">
                    <i className="fa-solid fa-camera"></i>
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">about me</h3>
                  <p className="mt-2 text-slate-300">
                    saya adalah seorang mahasiswa yang memiliki passion mendalam di bidang pengembangan web dan cyber antarmuka pengguna. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan kemampuan saya dalam mengembangkan aplikasi web yang inovatif dan user-friendly. Saya memiliki minat yang kuat dalam menciptakan pengalaman pengguna yang optimal dan memecahkan masalah-masalah kompleks dalam pengembangan web.
                  </p>
                  <p className="mt-3 text-slate-400">berkomitmen dalam mengasah kemampuan yang saya pelajari di setiap kemampuan saya.</p>
                  <form onSubmit={handlePhotoUpdate} className="mt-4 flex gap-2">
                    <input ref={inputRef} type="url" placeholder="tempel url foto profil" className="input" />
                    <button className="btn-outline whitespace-nowrap">
                      <i className="fa-solid fa-image mr-2"></i>
                      pakai url
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="section">
        <div className="container">
          <h2 className="section-title">awan berlian</h2>
          <p className="mt-2 text-slate-300 max-w-3xl">about me</p>
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="section">
        <div className="container">
          <h2 className="section-title">proyek terbaru saya</h2>
          <div className="mt-6 overflow-x-auto pb-4">
            <div className="flex gap-6 snap-x snap-mandatory min-w-full">
              {projects.map((p, idx) => (
                <article key={idx} className="min-w-[320px] max-w-sm snap-start">
                  <div className="fancy-border p-1 rounded-2xl h-full">
                    <div className="rounded-2xl bg-slate-900/70 p-5 h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <span className="text-xs text-slate-400">{p.subtitle}</span>
                      </div>
                      <p className="mt-2 text-slate-300 flex-1">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                      <a href={p.link} className="mt-4 btn-ghost w-max">
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                        detail
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikat */}
      <section id="sertifikat" className="section">
        <div className="container">
          <h2 className="section-title">sertifikat saya</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="fancy-border p-1 rounded-2xl">
                <div className="rounded-2xl bg-slate-900/70 p-6">
                  <h3 className="font-semibold">Sertifikat {i}</h3>
                  <p className="mt-2 text-slate-300">Sertifikat Kelulusan</p>
                  <p className="mt-2 text-slate-400">sertifikat ini menunjukkan penyelesaian kursus cryptography</p>
                  <button className="mt-4 btn-outline btn-sm">
                    <i className="fa-solid fa-download mr-2"></i>
                    unduh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="my-skill" className="section">
        <div className="container">
          <h2 className="section-title">keahlian saya</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="tag text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="section">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-title">hubungi saya</h2>
            <p className="mt-2 text-slate-300 max-w-xl">Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!</p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="mailto:someone@example.com">
                <i className="fa-solid fa-envelope mr-2"></i>
                email
              </a>
              <a className="btn-outline" href="https://wa.me/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp mr-2"></i>
                whatsapp
              </a>
            </div>
          </div>
          <form className="fancy-border p-1 rounded-2xl">
            <div className="rounded-2xl bg-slate-900/70 p-6 space-y-4">
              <div>
                <label className="label">Nama Anda</label>
                <input className="input" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="label">Email Anda</label>
                <input className="input" type="email" placeholder="Email Anda" />
              </div>
              <div>
                <label className="label">Pesan Anda</label>
                <textarea className="input min-h-[120px]" placeholder="Pesan Anda" />
              </div>
              <button className="btn-primary w-full">
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 border-t border-white/10">
        <p>© 2025 my portofolio wanzofc</p>
      </footer>
    </div>
  )
}

export default App
