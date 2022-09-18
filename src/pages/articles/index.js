import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const Articles = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      {data.allMarkdownRemark.edges.map((el) => (
        <article key={el.node.id}>
          <h2>
            <Link to={el.node.frontmatter.slug}>
              {el.node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {el.node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allMdx(
//       sort: {
//         fields: [frontmatter___date, frontmatter___title]
//         order: [DESC, ASC]
//       }
//     ) {
//       nodes {
//         frontmatter {
//           title
//           date(formatString: "DD.MM.YYYY")
//         }
//         id
//         slug
//       }
//     }
//   }
// `;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export default Articles;
