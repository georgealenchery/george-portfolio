import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="section-label">// CONTACT</span>
      <div className="contact-block">
        <h2 className="contact-headline">Let's work together.</h2>
        <div className="contact-links">
          <a href="mailto:georgealenchery70@gmail.com" className="contact-link">
            georgealenchery70@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/georgealenchery/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/georgealenchery
          </a>
        </div>
      </div>
    </section>
  )
}
