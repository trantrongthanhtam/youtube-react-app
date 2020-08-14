import React from "react";
import Index from "./pages/index";

import "./App.css";
import NavBar from "./components/general-components/NavBar";
import Footer from "./components/general-components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MusicListByGenre from "./pages/musiclistbygenre";
import MusicListByTheme from "./pages/musiclistbytheme";
import Explore from "./pages/explore";
import Favorite from "./pages/favorite";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path={["/", "/index", "/home"]} component={Index} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/favorite" component={Favorite} />
            <Route
              path="/musicbygenre/:listname"
              render={(props) => <MusicListByGenre {...props} />}
            />
            <Route
              path="/musicbytheme/:listname"
              render={(props) => <MusicListByTheme {...props} />}
            />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
