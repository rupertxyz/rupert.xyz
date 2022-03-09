import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
        <article style={{"marginTop": "2rem"}}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </article>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}, frontmatter: {}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }`
  

export default BlogPost