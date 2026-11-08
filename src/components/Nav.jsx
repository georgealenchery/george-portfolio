import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#background">about me</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
        {/* <li><a href="#stack">stack</a></li> — tech ticker disabled for now */}
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  )
}
