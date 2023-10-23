import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ps5-black-badge.svg'

function Header() {
  const playstation = useRef(null)
  const games = useRef(null)
  const accessories = useRef(null)
  const BG_COLOR = '#EBEEF0'

  function setBackground(id) {
    const refList = [playstation, games, accessories]
    refList.map((item) => {
      const index = refList.indexOf(item)
      if (index === id) item.current.style.backgroundColor = BG_COLOR
      else item.current.style.backgroundColor = 'transparent'
    })
  }

  return (
    <>
      <header className="container-fluid">
        <nav className="navbar navbar-expand">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <img
                src={logo}
                alt="ps5 brand logo"
                className="navbar-brand"
                style={{ width: '150px' }}
              />
            </div>

            <div className="col">
              <div className="navbar-nav fw-bold">
                <Link to="/" className="nav-link">
                  <small
                    ref={playstation}
                    onClick={() => setBackground(0)}
                    className="rounded-pill px-3 py-1"
                    style={{ backgroundColor: BG_COLOR }}
                  >
                    Playstation 5
                  </small>
                </Link>
                <Link to="games" className="nav-link">
                  <small
                    ref={games}
                    onClick={() => setBackground(1)}
                    className="rounded-pill px-3 py-1"
                  >
                    Games
                  </small>
                </Link>
                <Link to="accessories" className="nav-link">
                  <small
                    ref={accessories}
                    onClick={() => setBackground(2)}
                    className="rounded-pill px-3 py-1"
                  >
                    Accessories
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
