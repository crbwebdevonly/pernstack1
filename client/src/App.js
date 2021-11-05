import "./app.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import RestaurantUpdatePage from "./pages/RestaurantUpdatePage";
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================

function App() {
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     return (
          <Router>
               
               <div className="App">
                  
                    <Switch>
                         <Route exact path="/">
                              <HomePage />
                         </Route>
                         <Route path="/restaurant/:id">
                              <RestaurantDetailsPage />
                         </Route>
                         <Route path="/update/:id">
                              <RestaurantUpdatePage />
                         </Route>
                    </Switch>
               </div>
          </Router>
     );
}

export default App;
