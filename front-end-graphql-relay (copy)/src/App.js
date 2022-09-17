import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { BrowserRouter as Router, Route ,Routes ,Navigate} from 'react-router-dom';
import RelayEnvironment from './RelayEnvironment';
import SignIn from './components/modal/SignIn';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
query AppQuery {
  usersList {
    name
    email
  }
}
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  console.log('App = ',data.usersList[0].name)

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.usersList[0].name}</p>
      </header>
      <Router>
          <Routes>
            <Route path="/home" element={<SignIn/>}/> 
            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>
      </Router>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;