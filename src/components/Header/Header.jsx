import React from 'react'

// css
import './header.css'

// icons
import { FaVk, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { goToTop } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  render() {

    return (
      // <div className="header-container">
      <div className={`${this.state.scrolling ? 'header-container-scrolled' : 'header-container'}`}>
        <ScrollableAnchor id={'home'}>
          <p className="header-logo">
            <span className="header-logo-yandex">
              <span className="header-logo-y">Y</span>andex
          </span>
            <span className="header-logo-taxi">&nbsp;Taxi</span>
          </p>
        </ScrollableAnchor>
        {/* </div> */}
        <nav className="header-nav">
          <ul>
            <li><a href="#reason">ПОЧЕМУ ЯНДЕСК.ТАКСИ?</a></li>
            <li><a href="#rates">ТАРИФЫ</a></li>
            <li><a href="#application">ПРИЛОЖЕНИЕ</a></li>
            <li><a href="#requirements">ПОДКЛЮЧИТЬСЯ</a></li>
            <li><a href="#"><FaVk /></a></li>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
          </ul>
        </nav>
      </div>
    )
  }
}