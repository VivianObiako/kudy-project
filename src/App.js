import { Switch, Route} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFoundScreen from "./pages/NotFound";
import Navbar from "./components/Navbar";


function ErrorFallback({ error }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // color: theme.colors.danger
      }}
    >
      Error: {error.message}
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <Navbar key="navbar" />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="*">
            <NotFoundScreen />
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
