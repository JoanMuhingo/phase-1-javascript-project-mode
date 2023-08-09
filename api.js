const express = require('express');
const app = express();

// menu data 
const menu = require('./db.json');

// Endpoint: /menu
app.get('/menu', (req, res) => {
  res.json(menu);
});

// Endpoint: /menu/breakfast
app.get('/menu/breakfast', (req, res) => {
  const breakfastMenu = menu.menu.breakfast;
  res.json(breakfastMenu);
});

// Endpoint: /menu/lunch
app.get('/menu/lunch', (req, res) => {
  const lunchMenu = menu.menu.lunch;
  res.json(lunchMenu);
});

// Endpoint: /menu/dinner
app.get('/menu/dinner', (req, res) => {
  const dinnerMenu = menu.menu.dinner;
  res.json(dinnerMenu);
});

// Endpoint: /menu/drinks
app.get('/menu/drinks', (req, res) => {
  const drinksMenu = menu.menu.drinks;
  res.json(drinksMenu);
});

// Endpoint: /menu/accompaniments
app.get('/menu/accompaniments', (req, res) => {
  const accompanimentsMenu = menu.menu.accompaniments;
  res.json(accompanimentsMenu);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});