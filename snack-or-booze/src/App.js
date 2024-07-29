import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      console.log("Fetched snacks:", snacks); // Add this line
      console.log("Fetched drinks:", drinks); // Add this line
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const addItem = async () => {
    let snacks = await SnackOrBoozeApi.getSnacks();
    let drinks = await SnackOrBoozeApi.getDrinks();
    setSnacks(snacks);
    setDrinks(drinks);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/new">
              <NewItemForm addItem={addItem} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;