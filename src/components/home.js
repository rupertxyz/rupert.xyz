import React from 'react'
import Layout from './layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import { heroImage } from './home.module.css'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <Layout>
        <StaticImage className={heroImage} src="../images/sunrise.jpg" alt="sunrise"></StaticImage>
        <h1>Me in 10 Seconds</h1>
        <ul style={{fontSize: "1.3rem", lineHeight:"2rem"}}>
          <li>I like falling down rabbit holes and write <Link to="/articles">articles</Link> about it.</li>
          <li>I'm an entrepreneur who founded two companies in completely unrelated fields: <Link to="https://hy.co/">hy!</Link> and <Link to="https://roykombucha.com/">ROY</Link>.</li>
          <li>I'm an Airtable (and aspiring software) developer, <Link to="/airtable">so please reach out to me if you need help.</Link></li>
          <li>Based in Berlin, Germany.</li>
        </ul>
    </Layout>
  )
}

export default Home