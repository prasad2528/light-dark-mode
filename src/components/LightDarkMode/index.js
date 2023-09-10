import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeModes = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const className = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`card ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.changeModes}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
