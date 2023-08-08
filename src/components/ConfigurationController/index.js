import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onSelectContent = () => {
        onToggleShowContent()
      }

      const onSelectLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onSelectRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layout-bg-controller">
          <h1 className="layout">Layout</h1>
          <ul className="input-container">
            <li className="label-container">
              <input
                id="contentCheckbox"
                type="checkbox"
                onChange={onSelectContent}
                checked
              />
              <label htmlFor="contentCheckbox" className="label">
                Content
              </label>
            </li>
            <li className="label-container">
              <input
                id="leftNavbarCheckbox"
                type="checkbox"
                onChange={onSelectLeftNavbar}
                checked
              />
              <label htmlFor="leftNavbarCheckbox" className="label">
                Left Navbar
              </label>
            </li>
            <li className="label-container">
              <input
                id="rightNavbarCheckbox"
                type="checkbox"
                onChange={onSelectRightNavbar}
                checked
              />
              <label htmlFor="rightNavbarCheckbox" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
