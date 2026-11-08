import './Projects.css'
import SectionHeader from './SectionHeader.jsx'

const projects = [
  {
    name: 'Ace.AI',
    description: 'AI-powered interviewing assistant app that talks to users in real-time as an interviewer, helping software engineering students practice technical and behavioral skills',
    stack: ['TypeScript', 'React', 'Vite', 'Node.js', 'Express'],
    category: 'AI / LLM',
    role: 'Backend Developer',
    link: 'https://github.com/georgealenchery/ace.ai',
  },
  {
    name: 'Parking Assistance for Trailer-Truck Transport Vehicles Using Sensor Fusion and Motion Planning',
    description: 'Conference-nominated research paper presenting an autonomous parking framework for articulated trucks during low-speed docking maneuvers, combining sensor fusion and motion planning to solve a hard real-world robotics problem. Published May 2026.',
    stack: ['Python', 'Sensor Fusion', 'Motion Planning', 'ROS', 'LIDAR'],
    category: 'Research / Robotics',
    role: 'Lead Author & Head Researcher',
    link: 'https://arxiv.org/abs/2605.02716',
  },
  {
    name: 'Rocket Avionics System, Deep Tech Initiative',
    description: 'Building a single stage rocket with a commercial payload as a part of the Deep Tech Initiative at FGCU, set to launch in September 2026',
    stack: ['Embedded Systems', 'C', 'Avionics', 'CAD'],
    category: 'Aerospace',
    role: 'Tech Lead / Software Engineer',
    link: 'https://www.wgcu.org/science-tech/2026-05-01/fgcu-deep-tech-club-plans-rocket-launches-as-part-of-research-into-payload-issues',
  },
  {
    name: 'Trauma Patient MindState Simulator, Exonicus',
    description: 'Built a real-time VR trauma training simulator for combat medics.',
    stack: ['Unity', 'C#'],
    category: 'VR / XR',
    role: 'Software Engineer',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeader title="Projects" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="win project-card">
            <h3 className="win-title project-name">
              <span>{project.name}</span>
              <span className="win-controls" aria-hidden="true">
                <span>_</span><span>□</span><span>×</span>
              </span>
            </h3>
            <div className="win-body project-body">
              <p className="project-category">{project.category}</p>
              <p className="project-desc">{project.description}</p>
              <p className="project-role"><strong>Role:</strong> {project.role}</p>
              <ul className="project-tags">
                {project.stack.map((tag) => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button project-link"
                >
                  Open ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
