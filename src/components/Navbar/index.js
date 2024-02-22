// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const navClass = isDarkTheme ? 'darkNav' : 'lightNav'
          const hClass = isDarkTheme ? 'darkH' : 'lightH'

          return (
            <nav className={navClass}>
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo"
                />
              ) : (
                <img
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}

              <ul className="ul">
                <Link to="/">
                  <li>
                    <h1 className={hClass}>Home</h1>
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <h1 className={hClass}>About</h1>
                  </li>
                </Link>
              </ul>

              {isDarkTheme ? (
                <button
                  data-testid="theme"
                  type="button"
                  onClick={toggleTheme}
                  className="t-btn"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="logo"
                  />
                </button>
              ) : (
                <button
                  data-testid="theme"
                  type="button"
                  onClick={toggleTheme}
                  className="t-btn"
                >
                  <img
                    className="logo"
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                  />
                </button>
              )}
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
