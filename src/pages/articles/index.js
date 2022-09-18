import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import { categoryButton } from './index.module.css';

const Articles = ({ data }) => {
  const [category, setCategory] = useState('ALL');

  const handleClick = (event) => {
    setCategory(event.target.innerHTML);
  };

  let categoryArr = [];

  data.allMarkdownRemark.edges.forEach((el) => {
    categoryArr.push(el.node.frontmatter.category);
  });

  categoryArr = categoryArr.filter(
    (el, i, arr) => arr.indexOf(el) === i && el !== null
  );

  return (
    <>
      <Layout pageTitle="Articles">
        <div>
          <button className={categoryButton} autoFocus onClick={handleClick}>
            All
          </button>
          {categoryArr.map((el, i) => (
            <button key={i} className={categoryButton} onClick={handleClick}>
              {el}
            </button>
          ))}
        </div>

        {category === 'ALL'
          ? data.allMarkdownRemark.edges.map((el) => (
              <article key={el.node.id}>
                <h2>
                  <Link to={el.node.frontmatter.slug}>
                    {el.node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {el.node.frontmatter.date}</p>
              </article>
            ))
          : data.allMarkdownRemark.edges.map(
              (el) =>
                el.node.frontmatter.category === category && (
                  <article key={el.node.id}>
                    <h2>
                      <Link to={el.node.frontmatter.slug}>
                        {el.node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>Posted: {el.node.frontmatter.date}</p>
                  </article>
                )
            )}
      </Layout>
    </>
  );
};

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
            category
          }
        }
      }
    }
  }
`;

export default Articles;
