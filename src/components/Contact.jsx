import './Contact.css'
import SectionHeader from './SectionHeader.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <SectionHeader title="Contact Me!" />
      <div className="contact-stage">
        <div className="win contact-window">
          <h3 className="win-title contact-title">Connect with me!</h3>
          <div className="win-body contact-body">
            <p>The fastest way to reach me is by email. I'm also on LinkedIn.</p>
            <div className="contact-buttons">
              <a href="mailto:georgealenchery70@gmail.com" className="win-button">
                georgealenchery70@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/georgealenchery/"
                target="_blank"
                rel="noopener noreferrer"
                className="win-button"
              >
                linkedin.com/in/georgealenchery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
