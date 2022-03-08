import * as React from 'react';
import { container, heroImage } from './wrapper.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header.js';
import { StaticImage } from 'gatsby-plugin-image'


const Wrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  
  return (
    <div className={container}>
      <Header data={data}></Header>
      <StaticImage className={heroImage} src="../images/sunrise.jpg" alt="sunrise"></StaticImage>
    </div>
  )
}

export default Wrapper