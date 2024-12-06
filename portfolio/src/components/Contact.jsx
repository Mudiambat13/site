import 'bootstrap-icons/font/bootstrap-icons.css'

function Contact() {
  return (
    <div className="container mt-5 pt-5">
      <h1>Contact</h1>
      <div className="d-flex flex-column gap-3 mt-4">
        <span>
          <a href="mailto:contact@example.com" className="text-decoration-none">
            <i className="bi bi-envelope-fill me-2"></i>
            Mon email
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/your-profile" className="text-decoration-none">
            <i className="bi bi-linkedin me-2"></i>
            Mon LinkedIn
          </a>
        </span>
        <span>
          <a href="https://github.com/your-profile" className="text-decoration-none">
            <i className="bi bi-github me-2"></i>
            Mon GitHub
          </a>
        </span>
      </div>
    </div>
  )
}

export default Contact
