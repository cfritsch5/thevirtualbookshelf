import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HomeContainer from './session/home_container';
import SessionFormContainer from'./session/session_form_container';
import BookShelfContainer from './bookshelf/bookshelf_container';
const App = () => (
  <div>

    <header>

      <Link to="/" className="header-link">
        <div className="header-title">
          <h1>Virtual Book Shelf</h1>
        </div>
      </Link>
    </header>
    <div className="content">
      <Switch>
        <Route path="/" component={HomeContainer} />
        <Route exact path="/login" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
