
import { Amplify } from 'aws-amplify';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './w3.css';
import './w3-theme-green.css'
import awsExports from './aws-exports';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create"
import Update from "./pages/Update";
import NoPage from "./pages/NoPage";


Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className='w3-theme-d1'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout signOut={signOut} user={user} />}>
            <Route index element={<Home />} />
            <Route path="update/:stockID" element={<Update />} />
            <Route path="create" element={<Create />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default withAuthenticator(App);
