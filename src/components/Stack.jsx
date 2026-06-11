import './Stack.css'

const tags = [
  'Python', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy',
  'React', 'Vite', 'Node.js', 'Express', 'Mapbox GL JS',
  'Unity', 'C#', 'SQL', 'Git', 'Figma', 'LaTeX',
]

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <span className="section-label">// STACK</span>
      <div className="stack-grid">
        {tags.map((tag) => (
          <span key={tag} className="stack-tag">{tag}</span>
        ))}
      </div>
    </section>
  )
}
