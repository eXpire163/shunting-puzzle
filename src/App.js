
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './w3.css';
import awsExports from './aws-exports';
import Stocklist from './Stocklist';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <header className='w3-bar w3-teal'>
        <h2 className="w3-bar-item ">Shunting Puzzle generator</h2>
        <a href="#" onClick={signOut} className="w3-bar-item w3-button w3-right">Sign out {user.username}</a>
      </header>

      <Stocklist />
    </>
  );
}

export default withAuthenticator(App);
