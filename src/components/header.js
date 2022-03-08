import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { titleFlexContainer, nav } from './header.module.css';
import { Link } from 'gatsby';

const Header = ({data}) => {

  return (
      <header>
          <div className={titleFlexContainer}>
            <h1>{data.site.siteMetadata.author}</h1>
            <ul>
                <a href="https://twitter.com/rupertxyz"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></a>
            </ul>
          </div>
          <nav className={nav}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Articles</Link></li>
              <li><Link to="/airtable">Airtable</Link></li>
            </ul>
          </nav>
      </header>
  )
}

export default Header