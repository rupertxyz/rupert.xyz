import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const Articles = ({data}) => {
  return (
    <Layout pageTitle="Articles">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/articles/${node.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                title
                date(formatString: "DD.MM.YYYY")
              }
              id
              slug
            }
          }
    }`

export default Articles