import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Header = ({data}) => {

  return (
      <header>
          <h1>{data.site.siteMetadata.author}</h1>
          <ul>
              <a href="https://twitter.com/rupertxyz"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
              <a href="#"><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></a>
          </ul>
      </header>
  )
}

export default Header