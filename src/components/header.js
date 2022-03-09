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
                <Link to="https://twitter.com/rupertxyz"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                <Link><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></Link>
            </ul>
          </div>
          <nav className={nav}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/airtable">Airtable</Link></li>
            </ul>
          </nav>
      </header>
  )
}

export default Header