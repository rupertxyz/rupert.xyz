import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
      <p>Category: {frontmatter.category}</p>
      <h1>{frontmatter.title}</h1>
      <article style={{ marginTop: '2rem' }}>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
      }
    }
  }
`;
