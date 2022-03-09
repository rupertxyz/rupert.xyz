import React from 'react'
import Layout from './layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import { heroImage } from './home.module.css'

const Home = () => {
  return (
    <Layout>
        <StaticImage className={heroImage} src="../images/sunrise.jpg" alt="sunrise"></StaticImage>
    </Layout>
  )
}

export default Home