import * as React from 'react';
import { container } from './wrapper.module.css';
import { useStaticQuery, graphql } from 'gatsby';


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
      <header>
          <h1>{data.site.siteMetadata.author}</h1>
          <ul>
              <li>Icon1</li>
              <li>Icon2</li>
          </ul>
      </header>
    </div>
  )
}

export default Wrapper