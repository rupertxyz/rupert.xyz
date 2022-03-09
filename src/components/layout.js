import * as React from 'react';
import { container, pageTitleStyle } from './layout.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header.js';

const Layout = ({pageTitle, children}) => {
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
      <h1 className={pageTitleStyle}>{pageTitle}</h1>
      {children}
    </div>
  )
}

export default Layout