import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  titleFlexContainer,
  nav,
  titleFlexContainerLeft,
  siteTitle,
} from './header.module.css';
import { Link } from 'gatsby';
import kopfGif from '../images/kopf.gif';
import kopf2 from '../images/kopf2.png';

const Header = ({ data }) => {
  return (
    <header>
      <div className={titleFlexContainer}>
        <div className={titleFlexContainerLeft}>
          <Link to="/">
            <img width={100} src={kopf2} alt="Kopf als Gif"></img>
          </Link>
          <h1 className={siteTitle}>{data.site.siteMetadata.author}</h1>
        </div>
        <ul>
          <a href="https://twitter.com/rupertxyz">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="https://www.youtube.com/channel/UCPoiZBRqSbPfRPv01Oy6O5g">
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/ruphoffschmidt/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </ul>
      </div>
      <nav className={nav}>
        <ul>
          <li>
            <Link
              activeStyle={{ fontWeight: '600' }}
              style={{ textDecoration: 'none' }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeStyle={{ fontWeight: '600' }}
              style={{ textDecoration: 'none' }}
              to="/articles"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              activeStyle={{ fontWeight: '600' }}
              style={{ textDecoration: 'none' }}
              to="/faves"
            >
              Internet Faves
            </Link>
          </li>
          {/* <li><Link activeStyle={{ fontWeight: "600"}} style={{ textDecoration: "none" }} to="/airtable">Airtable</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
