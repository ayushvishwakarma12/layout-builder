import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar-container">
              <ul className="navbar-menu-container">
                <li className="navbar-menu">
                  <h1 className="navbar-heading">Left Navbar Menu</h1>
                </li>
                <li className="navbar-menu">Item 1</li>
                <li className="navbar-menu">Item 2</li>
                <li className="navbar-menu">Item 3</li>
                <li className="navbar-menu">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content">Content</h1>
              <p>Lorem ipsum</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar-container">
              <ul className="navbar-menu-container">
                <h1 className="navbar-heading">Right Navbar</h1>
                <li className="right-navbar-menu">
                  <p className="right-navbar">Ad 1</p>
                </li>
                <li className="right-navbar-menu">
                  <p className="right-navbar">Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
