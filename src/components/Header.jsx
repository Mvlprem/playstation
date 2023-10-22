import { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ps5-black-badge.svg'

function Header() {
  const playstation = useRef(null)
  const games = useRef(null)
  const accessories = useRef(null)

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
        <Nav className="navbar navbar-expand">
          {/* Brand Logo */}
          <img
            src={logo}
            alt="ps5-badge"
            className="navbar-brand"
            style={{ width: '150px' }}
          />

          {/* Navigation Links */}
          <div className="navbar-nav fw-bold m-auto">
            <Link to="ps5" className="nav-link">
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
        </Nav>
      </header>
    </>
  )
}

const BG_COLOR = '#EBEEF0'

const Nav = styled.nav`
  @media (width < 600px) {
    display: flex;
    flex-direction: column;
  }
`

export default Header
