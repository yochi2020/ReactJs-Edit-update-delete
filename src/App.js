import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './Reducer'
import Header from './Header'
import AddStudent from './Add-student'
import EditStudent from './Edit-student'
import StudentLists from './Student-lists'
import PageNotFound from './Page-not-found'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const store = createStore(Reducer)
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/edit/:id" component={EditStudent}></Route>
            <Route exact path="/add" component={AddStudent}></Route>
            <Route exact path="/" component={StudentLists}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
