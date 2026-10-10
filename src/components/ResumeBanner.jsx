import './ResumeBanner.css'

export default function ResumeBanner() {
  return (
    <div className="resume-banner">
      <span className="resume-banner-text">
        Don't want to read the whole website?{' '}
        <a
          href="/George_Alenchery_Resume_SWE.pdf"
          download="George_Alenchery_Resume_SWE.pdf"
          className="resume-banner-link"
        >
          Click here to download my resume
        </a>
      </span>
    </div>
  )
}
