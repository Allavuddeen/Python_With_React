import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import FormExample from './components/formHandle';
import Parent from './components/cascadeDropdown'
import DynamicDropdown from './components/dynamicDropdown';
import MyComponent from './components/deselectNextDrpdoen';
import MyComponent2 from './components/datePicker';
import Cascade from './components/cascadeDropdown';


function App() {
 
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<ListUserComponent/>}></Route>
                          <Route path = "/users" exact element = {<ListUserComponent/>}></Route>
                          <Route path = "/add-user/:id" exact element = {<CreateUserComponent/>}></Route>
                          <Route path = "/view-user/:id" exact element = {<ViewUserComponent/>}></Route>
                          <Route path = "/update-user/:id" exact element = {<UpdateUserComponent/>}></Route>
                          
                          
                    </Routes>
                </div>
        </Router>
    </div>
    
  );
}

export default (App);