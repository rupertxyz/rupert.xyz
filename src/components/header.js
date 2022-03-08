import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
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
      <header>
        <h1>{data.site.siteMetadata.author}</h1>
        <ul>
            <li>Icon1</li>
            <li>Icon2</li>
        </ul>
      </header>
  )
}

export default Header