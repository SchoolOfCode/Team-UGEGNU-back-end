import { pool } from "../DB/index.js";
// GET a list of ALL saved routes
export async function getRoutes() {
  // query the db
  // return all results
  const queryText = "SELECT * FROM routes";
  // construct sql command
  const result = await pool.query(queryText);
  // send to db
  return result.rows;
}
// GET route by ID
export async function getRouteById(id) {}
// POST new route
export async function postRoute() {}
// DELETE route
export async function deleteRoute() {}
