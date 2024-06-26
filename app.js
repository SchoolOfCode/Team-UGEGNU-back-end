import express from "express";
import {
  getRouteById,
  getRoutes,
  saveNewRoute,
  deleteRoute,
} from "./models/routes.js";

const app = express();
const PORT = 3000;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// 1_ GET all routes (to display in table on FrontEnd (FE)) ---- /getAllRoutes
// GET to retrieve stored route
// read row from database
// return the route data and name -- as JSON?
app.get("/routes", async (req, res) => {
  const allRoutes = await getRoutes();
  res.status(200).json({ status: "success", payload: allRoutes });
  //   console.log(allRoutes);
});

// 2_ GET route by ID to display single route on user click ---- /getRouteById
app.get("/route/:id", async (req, res) => {
  // get id from params in url
  const id = req.params.id;
  //   pass id to function to get specificed route
  const route = await getRouteById(id);
  //   return chosen route
  res.status(200).json({ status: "success", payload: route });
});

// POST to store/save a route
app.post("/newRoute", async (req, res) => {
  //define data from request body - THIS WILL NEED VALIDATING!
  const route = req.body;
  console.log("req.body route" + route);
  // add new route to DB once validated
  const newRoute = await saveNewRoute(route);
  console.log("new Route line 41" + newRoute);
  console.log(JSON.parse(newRoute));
  // return new route and success
  res.status(201).json({ status: "success", payload: newRoute });
});

// DELETE to delete a saved route
app.delete("/delete/:id", async (req, res) => {
  // get id from params in url
  const id = req.params.id;
  // pass id to delete function
  const deletedRoute = deleteRoute(id);
  // return details of deleted route
  res.status(200).json({ status: "success", payload: "Deleted Successfully" });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port" + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
