import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import store from '../components/store';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </div>
  );
}
