import './Stack.css'

const tags = [
  'Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript',
  'PyTorch', 'scikit-learn', 'Pandas', 'NumPy',
  'React', 'Vite', 'Node.js', 'Express', 'Mapbox GL JS',
  'Unity', 'C#', 'SQL', 'Git', 'Figma', 'LaTeX',
]

const tagString = tags.join(' · ') + ' · '

export default function Stack() {
  return (
    <section id="stack" className="stack-ticker">
      <div className="ticker-track">
        <span className="ticker-list" aria-hidden="false">{tagString}</span>
        <span className="ticker-list" aria-hidden="true">{tagString}</span>
      </div>
    </section>
  )
}
