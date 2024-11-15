import { Link } from "react-router-dom"

function Navigation() {

  return (
    <div className="nav-links">
      <div className="link-wrapper">
        <Link className="primary-color" to="/industry">The Industry</Link>
      </div>
      <div className="link-wrapper">
        <Link className="primary-color" to="/meet-us">The Team</Link>
      </div>
      <div className="link-wrapper">
        <Link className="primary-color" to="/get-started">Get Involved</Link>
      </div>
    </div>
  )
}

export default Navigation
