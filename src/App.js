import React from 'react';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from './Components/BlogDetails/BlogDetails';
import AddBlog from './Components/Admin/AddBlog/AddBlog';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';


const App = () => {


  return (
    <Router>
      <Switch>

        <Route path="/addBlog" component={AddBlog} />
        <Route path="/blog/manage" component={ManageBlog} />
        <Route path="/details/:id" component={BlogDetails} />
        <Route path="/" component={Home} />

      </Switch>
    </Router>
  );
};

export default App;