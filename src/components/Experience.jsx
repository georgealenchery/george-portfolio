import './Experience.css'
import dendriticImg from '../assets/dendritic_pic.jpeg'
import exonicusImg from '../assets/exonicus.jpg'
import mathImg from '../assets/math_present.JPG'

const experience = [
  {
    company: 'FGCU Dendritic Institute',
    role: 'Graduate Research Assistant',
    period: 'Mar 2026 — Present',
    location: 'Fort Myers, FL',
    description:
      "Contribute to research, outreach, and event-based initiatives at FGCU's Dendritic Institute — a Human-Centered AI and Data Science research center. Work alongside faculty on ongoing AI and data science projects.",
    image: dendriticImg,
    imageAlt: 'George at the FGCU Dendritic Institute',
  },
  {
    company: 'Exonicus',
    role: 'Software Engineer',
    period: 'Aug 2025 — May 2026',
    location: 'Fort Myers, FL',
    description:
      "Shipped C# middleware in Unity on a cross-functional intern team, working across the full SDLC to deliver a user-ready experience for Exonicus's flagship real-time VR trauma training simulator against a hard release deadline.",
    image: exonicusImg,
    imageAlt: 'George at Exonicus',
    reverse: true,
  },
  {
    company: 'FGCU Mathematics Department',
    role: 'Undergraduate Research Assistant',
    period: 'Jan 2026 — Apr 2026',
    location: 'Fort Myers, FL',
    description:
      'Studied a family of parameter-dependent weighting polynomials proposed to smooth noisy data functions. Applied scientific computational tools and linear algebra to analyze the polynomials and their companion matrices.',
    image: mathImg,
    imageAlt: 'George presenting math research at FGCU',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <span className="section-label">// EXPERIENCE</span>
      <div className="experience-list">
        {experience.map((item) => (
          <div key={item.company + item.role} className="experience-entry">
            <div className={`experience-body${item.reverse ? ' experience-body--reverse' : ''}`}>
              <div className="experience-text">
                <div className="experience-header">
                  <div className="experience-left">
                    <h3 className="experience-company">{item.company}</h3>
                    <span className="experience-role">{item.role}</span>
                  </div>
                  <div className="experience-right">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-location">{item.location}</span>
                  </div>
                </div>
                <p className="experience-desc">{item.description}</p>
              </div>
              <div className="experience-image-wrap">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="experience-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
