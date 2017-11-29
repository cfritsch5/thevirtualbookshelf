import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import HomeContainer from './session/home_container';
import SessionFormContainer from'./session/session_form_container';
import BookShelfContainer from './bookshelf/bookshelf_container';

const App = () => (
  <div>
    <HeaderContainer/>
    <div className="content">
      <Switch>
        <Route path="/" component={HomeContainer} />
        <Route exact path="/login" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;

// import {appShortcut} from './shortcut_actions';
//
// class App extends React.Component {
//   // componentDidMount(){
//   //   this.nameInput.focus();
//   // }
//   shortcut(e){
//     console.log('shortcut',e.key.toUpperCase());
//     appShortcut(e.key.toUpperCase());
//   }
//
//   render(){
//     return(
//       <div className='app'
//         ref={input => input && input.focus()}
//         tabIndex={0}
//         autoFocus={true}
//         onKeyDown={this.shortcut}
//         onKeyUp={this.shortcut}>
//         <HeaderContainer/>
//         <div className="content">
//           <Switch>
//             <Route path="/" component={HomeContainer} />
//             <Route exact path="/login" component={SessionFormContainer} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
