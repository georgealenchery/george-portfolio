import './Background.css'
import SectionHeader from './SectionHeader.jsx'
import gradImg from '../assets/about-grad.png'
import portraitImg from '../assets/about-portrait.png'
import galleryImg from '../assets/about-gallery.png'

export default function Background() {
  return (
    <section id="background" className="background">
      <SectionHeader title="About Me" />
      <div className="background-grid">
        <div className="background-prose">
          <p>
            I'm a Graduate Student studying Computer Science, with a concentration in Data Science and
            Artificial Intelligence at FGCU. Currently, I work at the Dendritic Institute at FGCU, a Human
            Centered AI &amp; Data Science research lab. There, I am a graduate research assistant,
            exploring machine learning applications and AI pedagogy.
          </p>
          <p>
            Additionally, I have an IEEE-nominated paper on an autonomous (self-driving) truck parking
            system that I developed. You can click{' '}
            <a href="https://arxiv.org/abs/2605.02716" target="_blank" rel="noopener noreferrer">here</a>{' '}
            to read it!
          </p>
          <p>
            At EagleHacks 2026, my team took first place company challenge, and third place overall. We
            built an LLM-powered interview assistant that gives real-time coaching and feedback,
            specifically engineered for Software Engineering interviews, both technical and behavioral.
            Click{' '}
            <a href="https://www.youtube.com/watch?v=ySnJEHYqqfY" target="_blank" rel="noopener noreferrer">here</a>{' '}
            to watch a demo.
          </p>
          <p>
            In my final semester of my Bachelor's degree, I conducted undergraduate math research on
            pseudospectra of non-normal matrices and parameter-dependent characteristic polynomials.
            During my time as an undergrad research assistant, I learned tough linear algebra concepts,
            and honed my abilities to connect software engineering skills to mathematical rigor.
          </p>
          <p>
            In my free time, I enjoy building side projects, reading, rock climbing, playing piano and
            guitar, and of course, spending time with my family. I'm endlessly grateful for them.
          </p>
        </div>

        <div className="background-photos">
          <img src={gradImg} alt="George shaking hands at his graduation" className="bg-photo bg-photo--grad" />
          <img src={portraitImg} alt="George smiling with arms crossed" className="bg-photo bg-photo--portrait" />
          <img src={galleryImg} alt="George looking at paintings in a red gallery" className="bg-photo bg-photo--gallery" />
        </div>
      </div>
    </section>
  )
}
