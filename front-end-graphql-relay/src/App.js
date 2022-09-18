// your-app-name/src/App.js

import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import "./App.css";
import {
  RelayEnvironmentProvider,
  //loadQuery,
  //usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import fetchGraphQL from "./fetchGraphQL";
import HomeContainer from "./pages/HomeContainer.container";
import AuthState from "./contexts/auth/authState";

const { Suspense } = React;

function App() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null);

  // When the component mounts we'll fetch a repository name
  // useEffect(() => {
  //   let isMounted = true;
  //   fetchGraphQL(`
  //     query RepositoryNameQuery {
  //       # feel free to change owner/name here
  //       repository(owner: "facebook" name: "relay") {
  //         name
  //       }
  //     }
  //   `).then(response => {
  //     // Avoid updating state if the component unmounted before the fetch completes
  //     if (!isMounted) {
  //       return;
  //     }
  //     const data = response.data;
  //     setName(data.repository.name);
  //   }).catch(error => {
  //     console.error(error);
  //   });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header"></header>
      <HomeContainer></HomeContainer>
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
    <AuthState>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={"Loading..."}>
          <App />
        </Suspense>
      </RelayEnvironmentProvider>
    </AuthState>
  );
}

export default AppRoot;
