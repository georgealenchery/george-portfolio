import './Background.css'
import meOnRockImg from '../assets/me-on-rock.jpg'
import beckyGradImg from '../assets/becky-grad-pic.jpg'
import floridaSvg from '../assets/florida.svg'

const stats = [
  { value: '1', label: 'IEEE-nominated paper' },
  { value: '1st', label: 'EagleHacks 2026' },
  {value: 'B.S.', label: 'Software Engineering @ FGCU, 2026' },
  { value: 'M.S.', label: 'CS @ FGCU, Fall 2026' }
]

export default function Background() {
  return (
    <section id="background" className="background">
      <span className="section-label">// BACKGROUND</span>
      <div className="background-photos">
        <div className="background-photo">
          <img src={meOnRockImg} alt="George on a rock" />
        </div>
        <div className="background-photo">
          <img src={beckyGradImg} alt="Graduation photo" />
        </div>
      </div>
      <div className="background-grid">
        <div className="background-prose">
          <p>
            I'm a computer science graduate beginning my M.S. at Florida Gulf Coast University in Fall 2026,
            concentrating in AI &amp; Data Science. Currently, I work at the Dendritic Institute at FGCU, a Human Centered AI &amp; 
            Data Science research lab. There, I am a graduate research assistant, exploring machine learning applications and AI pedagogy.
            </p>
            <p>
            Additionally, I have an IEEE-nominated
            paper on an autonomous (self-driving) truck parking system that I developed. You can click <a href="https://arxiv.org/abs/2605.02716" target="_blank" rel="noopener noreferrer">here</a> to read it!
          </p>
          
          <p>
            At EagleHacks 2026, my team took first place company challenge, and third place overall. 
            We built an LLM-powered interview assistant
            that gives real-time coaching and feedback, specifically engineered for Software Engineering interviews, both technical and behavioral. 
            Click <a href="https://www.youtube.com/watch?v=ySnJEHYqqfY" target="_blank" rel="noopener noreferrer">here</a> to watch a demo.
          </p>
          <p>
            In my final semester of my Bachelor's degree, I conducted undergraduate math research
            on pseudospectra of non-normal matrices and parameter-dependent characteristic polynomials. During my time as an undergrad research assistant, I learned tough linear algebra concepts,
             and honed my abilities to connect software engineering skills to mathematical rigor.
          </p>
          <p>
            In my free time, I enjoy building side projects, reading, rock climbing, playing piano and guitar, 
            and of course, spending time with my family. I'm endlessly grateful for them.
            </p>
        </div>
        <div className="background-stats">
          <img src={floridaSvg} alt="" className="florida-bg" aria-hidden="true" />
          {stats.map((stat) => (
            <div key={stat.value} className="stat-block">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
