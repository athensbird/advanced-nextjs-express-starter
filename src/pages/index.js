import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/list">
          <a>View Peple</a>
        </Link> #nbsp
        <Link href="/create">
          <a>Create a Person</a>
        </Link>
      </div>
    );
  }
}

export default withRedux(initStore, null, null)(IndexPage);
