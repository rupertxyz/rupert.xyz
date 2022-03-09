import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { titleFlexContainer, nav, titleFlexContainerLeft } from './header.module.css';
import { Link } from 'gatsby';
import kopfGif from '../images/kopf.gif'

const Header = ({data}) => {

  return (
      <header>
          <div className={titleFlexContainer}>
            <div className={titleFlexContainerLeft}>
              <Link to="/"><img width={50} src={kopfGif}></img></Link>
              <h1>{data.site.siteMetadata.author}</h1>
            </div>
            <ul>
                <Link to="https://twitter.com/rupertxyz"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                {/* <Link style={{cursor: "pointer"}}><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></Link> */}
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