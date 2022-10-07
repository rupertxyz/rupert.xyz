import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Faves = ({ data }) => {
  return (
    <Layout pageTitle="Faves">
      <h2>
        <Link to="http://www.paulgraham.com/articles.html">
          Paul Graham's essays
        </Link>
      </h2>
      <h2>
        <Link to="https://terebess.hu/english/tao/mitchell.html">
          Tao Te Ching (Stephen Mitchell translation)
        </Link>
      </h2>
      <h2>
        <Link to="https://i.kym-cdn.com/photos/images/original/000/572/078/d6d.jpg">
          How to draw an owl
        </Link>
      </h2>
      <h2>
        <Link to="https://sive.rs/multiply">
          Ideas are just a multiplier of execution
        </Link>
      </h2>
      <h2>
        <Link to="https://waitbutwhy.com/2015/12/the-tail-end.html">
          The Tail End
        </Link>
      </h2>
      <h2>
        <Link to="https://www.icanw.org/dealing_with_nuclear_anxiety">
          Dealing with Nuclear Anxiety
        </Link>
      </h2>
    </Layout>
  );
};

export default Faves;
