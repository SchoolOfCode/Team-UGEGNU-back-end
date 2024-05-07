import express from "express";
import { getRoutes } from "./models/routes.js";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  const allRoutes = await getRoutes();
  res.status(200);
  res.send(allRoutes);
});

// GET to retrieve stored route
// read row from database
// return the route data and name -- as JSON?

// 1_ GET all routes (to display in table on FrontEnd (FE)) ---- /getAllRoutes
// 2_ GET route by ID to display single route on user click ---- /getRouteById

// POST to store/save a route
// need to check body (route name and route data - generate id ourside in db) is present and in correct format -- sanitise name of route (user input)
// add row to database

// DELETE to delete a saved route
// remove row from database based on ID
// return 'delete successful' if row has been removed ok
// return updated database to display on FE

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port" + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
