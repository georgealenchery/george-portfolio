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
      "At the Dendritic Institute, I contribute to research, outreach, and event-based initiatives. Here, I work alongside faculty on ongoing AI and data science projects. I am also on the Instructional Design team, currently working on building out the AI Academy curriculum under the guidance of Prof. Leandro de Castro Silva, PhD.",
    image: dendriticImg,
    imageAlt: 'George at the FGCU Dendritic Institute',
  },
  {
    company: 'Exonicus',
    role: 'Software Engineer',
    period: 'Aug 2025 — May 2026',
    location: 'Fort Myers, FL',
    description:
      "At Exonicus, I was a software engineering intern, constructing C# middleware scripts in Unity on a cross-functional intern team, working across the full SDLC to deliver a user-ready experience for Exonicus's flagship real-time VR trauma training simulator against a hard release deadline. Here, I collaborated with my fellow intern classmates under the guidance of our mentor, Chad Josewski, lead engineer at Exonicus.",
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
      'At the FGCU Mathematics Department, I studied a family of parameter-dependent weighting polynomials proposed to smooth noisy data functions. With the help and leadership of Dr. Cara D. Brooks, I strategized a computational process using MATLAB to analyze the roots of the polynomial family through spectral and pseudospectral analysis of their respective companion matrices.',
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
