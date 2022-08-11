import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const Airtable = () => {
  return (
    <Layout pageTitle="Airtable">
      <div style={{display: "flex", gap: "25px", alignItems: "center", marginBottom: "5rem"}} className="airtable-hero">
        <h1><Link to="https://airtable.com">Airtable.</Link></h1>
        <StaticImage src="../images/sample_image.jpg"></StaticImage>
      </div>
      <div style={{display: "flex", gap: "25px", alignItems: "center"}}>
        <StaticImage src="../images/airtable_clinic_image.jpg"></StaticImage>
        <h1>I help companies build world-class internal tools with #lowcode and #nocode software, with a focus on <Link to="https://airtable.com">Airtable</Link></h1>
      </div>
    </Layout>
  )
}

export default Airtable
