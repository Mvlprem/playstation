import { useLocation } from 'react-router-dom'
import psLogo from '../assets/images/ps-logo.svg'
import sonyLogo from '../assets/images/sie-logo.svg'

function Footer() {
  const BG_COLOR = '#00439C'
  let location = useLocation()
  const path =
    location.pathname.replace('/', '').charAt(0).toUpperCase() +
    location.pathname.slice(2)

  return (
    <>
      <footer
        style={{ backgroundColor: BG_COLOR }}
        className="container-fluid py-2 text-white"
      >
        {/* Playstation Trademark Logo */}
        <img
          src={psLogo}
          className="py-2"
          alt="Playstation Logo"
          style={{ width: '250px' }}
        />

        {/* Location Hierarchy */}
        <nav style={{ '--bs-breadcrumb-divider': "'>>'" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">
              {path.length === 0 ? 'Playstation 5' : path}
            </li>
          </ol>
        </nav>
        <p className="border border-bottom-0 border-light border-opacity-50"></p>

        <section className="row">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#about-collapse"
              style={{ backgroundColor: BG_COLOR }}
              className="border border-0 p-0 w-100 d-flex justify-content-between text-white fw-bold"
            >
              About<span>+</span>
            </button>
            <div
              id="about-collapse"
              className="collapse"
              style={{ backgroundColor: BG_COLOR, color: 'whitesmoke' }}
            >
              <small>Careers</small>
              <br />
              <small>Corporate</small>
              <br />
              <small>About SIE</small>
              <br />
              <small>PlayStation Studios</small>
              <br />
              <small>PlayStation Productions</small>
            </div>
            <p className="border border-bottom-0 border-light border-opacity-50 mt-3"></p>
          </div>

          {/* Values Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#values-collapse"
              style={{ backgroundColor: BG_COLOR }}
              className="border border-0 p-0 w-100 d-flex justify-content-between text-white fw-bold"
            >
              Values<span>+</span>
            </button>
            <div
              id="values-collapse"
              className="collapse"
              style={{ backgroundColor: BG_COLOR, color: 'whitesmoke' }}
            >
              <small>Environment</small>
              <br />
              <small>Accessibility</small>
              <br />
              <small>Online safety</small>
              <br />
              <small>Diversity, equity & inclusion</small>
              <br />
              <small>Naruto uzumaki & Sasuke uchiha</small>
            </div>
            <p className="border border-bottom-0 border-light border-opacity-50 mt-3"></p>
          </div>

          {/* Support Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#support-collapse"
              style={{ backgroundColor: BG_COLOR }}
              className="border border-0 p-0 w-100 d-flex justify-content-between text-white fw-bold"
            >
              Support<span>+</span>
            </button>
            <div
              id="support-collapse"
              className="collapse"
              style={{ backgroundColor: BG_COLOR, color: 'whitesmoke' }}
            >
              <small>Support hub</small>
              <br />
              <small>PSN Status</small>
              <br />
              <small>Password reset</small>
              <br />
              <small>PlayStation Safety</small>
              <br />
              <small>PlayStation Repairs</small>
            </div>
            <p className="border border-bottom-0 border-light border-opacity-50 mt-3"></p>
          </div>

          {/* Resources Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#resources-collapse"
              style={{ backgroundColor: BG_COLOR }}
              className="border border-0 p-0 w-100 d-flex justify-content-between text-white fw-bold"
            >
              Resources<span>+</span>
            </button>
            <div
              id="resources-collapse"
              className="collapse"
              style={{ backgroundColor: BG_COLOR, color: 'whitesmoke' }}
            >
              <small>Developers</small>
              <br />
              <small>Age ratings</small>
              <br />
              <small>Health warning</small>
              <br />
              <small>PSN terms of service</small>
              <br />
              <small>PS Store cancellation policy</small>
              <br />
            </div>
            <p className="border border-bottom-0 border-light border-opacity-50 mt-3"></p>
          </div>
        </section>

        {/* Sony Trademark Logo */}
        <img
          src={sonyLogo}
          className="py-2"
          alt="Sony Logo"
          style={{ width: '250px' }}
        />
        <div className="py-2">
          <small>
            All content, games titles, trade names and/or trade dress,
            trademarks, artwork and associated imagery are trademarks and/or
            copyright material of their respective owners. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
