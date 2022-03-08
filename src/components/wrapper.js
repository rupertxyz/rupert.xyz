import React from 'react';
import { container } from './wrapper.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div className={container}>
        <p>{data.site.siteMetaData.title}</p>
    </div>
  )
}

export default Wrapper