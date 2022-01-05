import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import HomeView from "../view/Home";
import { BrowserRouter } from "react-router-dom";
import AuthView from "../view/Auth";
import SearchView from "../view/Search";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={AuthView} />
          <Route exact path="/search" component={SearchView} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
