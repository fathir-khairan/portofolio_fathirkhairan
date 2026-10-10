const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)]
// Animasi masuk hero
document.querySelectorAll('.lead,.btns,.status,.card-wrap').forEach((e, i) => { e.classList.add('fade'); e.style.transitionDelay = (.3 + i * .15) + 's' })
requestAnimationFrame(() => setTimeout(() => document.body.classList.add('loaded'), 100))
// Reveal saat scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .15 })
$$('.rv').forEach(el => io.observe(el))
// Navbar: efek scroll + menu aktif
const nav = $('#nav'), links = $$('.menu a')
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true })
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)) }), { rootMargin: '-45% 0px -50% 0px' })
$$('main section[id]').forEach(s => spy.observe(s))
// Hamburger
const mobile = $('#mobile')
$('#burger').onclick = () => mobile.classList.toggle('open')
$$('a', mobile).forEach(a => a.onclick = () => mobile.classList.remove('open'))
// Cursor glow
const glow = $('#glow')
if (!matchMedia('(pointer:coarse)').matches) addEventListener('mousemove', e => requestAnimationFrame(() => glow.style.transform = `translate(${e.clientX - 250}px,${e.clientY - 250}px)`), { passive: true })
// Modal (project & sertifikat)
const modal = $('#modal'), body = $('#mbody')
const media = (img, label) => `<div class="mimg">${img ? `<img src="${img}" alt="${label}" loading="lazy">` : `<div class="ph">${label.toUpperCase()}</div>`}</div>`
const open = html => { body.innerHTML = html; modal.classList.add('open'); document.body.style.overflow = 'hidden' }
const close = () => { modal.classList.remove('open'); document.body.style.overflow = '' }
$$('.proj').forEach(b => b.onclick = () => { const d = b.dataset
  open(media(d.img, d.name) + `<div class="mtext"><p class="idx">${d.cat} / ${d.year}</p><h3>${d.name}</h3><p>${d.desc}</p><div class="tags">${d.tags.split(',').map(t => `<span>${t.trim()}</span>`).join('')}</div><a class="btn solid" id="vp" href="${d.url}">View Project ↗</a></div>`)
  $('#vp').onclick = e => { e.preventDefault(); location.href = d.url }
})
modal.onclick = e => e.target === modal && close()
addEventListener('keydown', e => e.key === 'Escape' && close())
