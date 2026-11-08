// import ResumeBanner from './components/ResumeBanner.jsx' // replaced by the starburst in Hero
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Background from './components/Background.jsx'
import Experience from './components/Experience.jsx'
// import Stack from './components/Stack.jsx' // tech ticker, disabled for now
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      {/* <ResumeBanner /> */}
      <Nav />
      <Hero />
      {/* <Stack /> */}
      <Background />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
