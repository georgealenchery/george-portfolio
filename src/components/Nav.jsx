import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">GA</a>
      <ul className="nav-links">
        <li><a href="#background">Background</a></li> 
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
