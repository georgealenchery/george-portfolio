import { useState, useEffect, useRef } from 'react'
import './Hero.css'
import aceAiImg from '../assets/ace-ai-pic.jpg'
import coffeeImg from '../assets/coffee_and_croissant.jpg'
import rockImg from '../assets/rock-climbing.PNG'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
const NAME_FLAT = 'GEORGEALENCHERY' // 15 chars

function randChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
}

function useScrambleName() {
  const total = NAME_FLAT.length
  const [display, setDisplay] = useState(() => Array.from({ length: total }, randChar))
  const resolvedRef = useRef(0)

  useEffect(() => {
    const resolveEvery = 1200 / total // ~80ms per char

    const scrambleId = setInterval(() => {
      setDisplay(prev =>
        prev.map((_, i) => (i < resolvedRef.current ? NAME_FLAT[i] : randChar()))
      )
    }, 30)

    const resolveId = setInterval(() => {
      resolvedRef.current += 1
      if (resolvedRef.current >= total) {
        clearInterval(scrambleId)
        clearInterval(resolveId)
        setDisplay(NAME_FLAT.split(''))
      }
    }, resolveEvery)

    return () => {
      clearInterval(scrambleId)
      clearInterval(resolveId)
    }
  }, [])

  return [display.slice(0, 6).join(''), display.slice(6).join('')]
}

function useParticles(sectionRef) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const resize = () => {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }
    resize()

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }))

    const mouse = { x: null, y: null }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    let animId

    const draw = () => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        if (mouse.x !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100 && dist > 0) {
            const force = ((100 - dist) / 100) * 0.4
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) { p.x = 0; p.vx *= -1 }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1 }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(240,237,230,0.6)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,255,106,${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return canvasRef
}

export default function Hero() {
  const sectionRef = useRef(null)
  const [line1, line2] = useScrambleName()
  const canvasRef = useParticles(sectionRef)

  return (
    <section className="hero" ref={sectionRef}>
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        <h1 className="hero-name">
          {line1}<br />{line2}
        </h1>
        <p className="hero-role">ML Engineer / AI Systems Developer / IEEE Published Author</p>
        <p className="hero-bio">
          I build machine learning systems and streamlined AI solutions for real-world applications.
        </p>
      </div>

      <div className="hero-images">
        <div className="hero-img hero-img--ace">
          <img src={aceAiImg} alt="Ace.AI project" />
        </div>
        <div className="hero-img hero-img--coffee">
          <img src={coffeeImg} alt="Coffee and croissant" />
        </div>
        <div className="hero-img hero-img--rock">
          <img src={rockImg} alt="Rock climbing" />
        </div>
      </div>

      <a href="#projects" className="hero-scroll">Click here to see some of my projects! Or, scroll down yourself.</a>
    </section>
  )
}
