import './Background.css'
import meOnRockImg from '../assets/me-on-rock.jpg'
import beckyGradImg from '../assets/becky-grad-pic.jpg'

const stats = [
  { value: '1', label: 'IEEE-nominated paper' },
  { value: '1st', label: 'EagleHacks 2026' },
  { value: 'M.S.', label: 'CS @ FGCU, Fall 2026' },
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
            concentrating in AI &amp; Data Science. My research at the Dendritic Institute explores
            machine learning applications and AI pedagogy. Additionally, I have an IEEE-nominated
            paper on an autonomous (self-driving) truck parking system that I developed. Click <a href="https://arxiv.org/abs/2605.02716" target="_blank" rel="noopener noreferrer">here</a> to read it!
          </p>
          <p>
            At EagleHacks 2026, my team took first place company challenge, 
            building an LLM-powered interview assistant
            that gives real-time coaching and feedback. 
          </p>
          <p>
            In my senior year, I conducted undergraduate math research
            on parameter-dependent polynomials. I learned and practiced very technical linear algebra concepts,
             and honed my abilities to connect software engineering skills to mathematical rigor.
          </p>
          <p>
            I care about shipping systems that work at the intersection of research and product. To me, this means 
            clean implementations, clear reasoning, and software that actually gets used.
          </p>
        </div>
        <div className="background-stats">
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
