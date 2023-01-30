import React from 'react';
import Layout from './layout.js';
import { StaticImage } from 'gatsby-plugin-image';
import { heroImage } from './home.module.css';
import { Link } from 'gatsby';

const Home = () => {
  return (
    <Layout>
      <StaticImage
        className={heroImage}
        src="../images/sunrise.jpg"
        alt="sunrise"
      ></StaticImage>
      <h1>Me in 10 Seconds</h1>
      <ul
        style={{
          fontSize: '1.3rem',
          lineHeight: '2rem',
          listStyleType: 'disc',
          textIndent: '-1.35em',
          paddingLeft: '1.35em',
        }}
      >
        <li>
          Indie hacker building a document automation tool in public:{' '}
          <Link target="_blank" to="https://docsautomator.co">
            DocsAutomator
          </Link>
          .
        </li>
        <li>
          Previously founded two companies in completely unrelated fields:{' '}
          <Link target="_blank" to="https://hy.co/">
            hy!
          </Link>{' '}
          and{' '}
          <Link target="_blank" to="https://roykombucha.com/">
            ROY
          </Link>
          .
        </li>
        <li>
          Developing internal tools & automated systems (mostly with Airtable).{' '}
          <a href="https://twitter.com/rupertxyz">
            Please send a dm if you need help.
          </a>
        </li>
        <li>
          Random thoughts on life, work and things in between:{' '}
          <Link to="/articles">Articles</Link>.
        </li>
        <li>
          Based in Berlin, Germany. Married to{' '}
          <Link to="https://www.emilylouisemcdonnell.com/">Emily</Link>.
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
