import './Projects.css'

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
    name: 'Building a Rocket, Nexum Technologies',
    description: 'Building a single stage rocket with a commercial payload, set to launch in September 2026',
    stack: ['Embedded Systems', 'C', 'Avionics', 'CAD'],
    category: 'Aerospace',
    role: 'Tech Lead / Software Engineer',
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
      <span className="section-label">// PROJECTS</span>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-card-left">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              {project.role && (
                <p className="project-role">
                  <span className="project-role-label">role</span>
                  {project.role}
                </p>
              )}
              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-card-right">
              <span className="project-category">{project.category}</span>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow project-arrow-link"
                >
                  →
                </a>
              ) : (
                <span className="project-arrow">→</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
