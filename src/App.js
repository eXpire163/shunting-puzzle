
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './w3.css';
import './w3-theme-green.css'
import awsExports from './aws-exports';
import Stocklist from './Stocklist';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <body className='w3-theme-d1'>
      <header className='w3-bar w3-theme'>
        <h2 className="w3-bar-item ">Shunting Puzzle generator</h2>
        <a href="#" onClick={signOut} className="w3-bar-item w3-button w3-right">Sign out {user.username}</a>
      </header>

      <Stocklist />
    </body>
  );
}

export default withAuthenticator(App);
