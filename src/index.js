import React from 'react';
import ReactDOM from 'react-dom';
import './banner.css';
import './footer.css';
import './stylesheet.css';

// Importing pages
import Home from './home/home.js';
import Resume from './resume/resume.js';
import Clash from './clash/clash.js';

// Importing images
import mail from './assets/mail.png';
import phone from './assets/phone.png';
import locationPin from './assets/location_pin.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';

const pages = ['Home', 'Resume', 'Clash'];


function BannerLink(props) {
  return (
    <li className="banner-link" onClick={props.onClick}>
      <p>{props.text}</p>
    </li>
  );
}

function Banner(props) {
  const bannerLinks = props.pages.map((pageName, index) =>
    <BannerLink
      onClick={() => props.onClick(pageName)}
      text={pageName}
      key={index}
    />
  );
  return (
    <div>
      <ul className="banner">
        {bannerLinks}
      </ul>
      <br className="banner-break" />
    </div>
  );
}

function ContactInfo(props) {
  return (
    <ul className='contact-info'>
      <li>
        <p>
          He/Him
        </p>
      </li>
      <li>
        <img src={mail} alt='mail icon' className='icon' />
        <p>btdavis9999@gmail.com</p>
      </li>
      <li>
        <img src={phone} alt='phone icon' className='icon' />
        <p>501.282.4834</p>
      </li>
      <li>
        <img src={locationPin} alt='location pin icon' className='icon' />
        <p>Austin, TX, USA</p>
      </li>
    </ul>
  );
}

function Socials(props) {
  return (
    <ul className='socials'>
      <li>
        <a href='https://github.com/brocktdavis'>
          <img src={github} alt='GitHub icon' className='icon' />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com/in/brocktdavis'>
          <img src={linkedin} alt='LinkedIn icon' className='icon' />
        </a>
      </li>
      <li>
        <a href='https://facebook.com/brock.davis.946'>
          <img src={facebook} alt='facebook icon' className='icon' />
        </a>
      </li>
    </ul>
  );
}

function Footer(props) {
  return (
    <div className='footer'>
      <ContactInfo />
      <Socials />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    };
  }

  changePage(pageStr) {
    this.setState({page: pageStr});
  }

  render() {
    const currentPage = this.state.page;
    let content = <p>Hello, World!</p>;
    
    if (currentPage === 'Home') {
      content = <Home />;
    } else if (currentPage === 'Resume') {
      content = <Resume />;
    } else if (currentPage === 'Clash') {
      content = <Clash />;
    }

    return (
      <div className='app'>
        <Banner pages={pages} onClick={pageName => this.changePage(pageName)}/>
        {content}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);