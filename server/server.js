require("dotenv").config();
const { request } = require("express");
const express = require("express");
const morgan = require("morgan");
//======================================================
const db = require("./db/index.js");
const cors = require("cors");
//======================================================

const app = express();
//======================================================
// middlewares mus be before routes
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//======================================================

app.get("/test", (req, res) => {
     res.send("crbtest--get");
});
//======================================================
// getall restaurants
//======================================================
app.get("/api/v1/restaurants", async (req, res) => {
     try {
          const results = await db.query("select * from restaurants");
          // console.log(results);
          res.status(200).json({
               status: "success",
               nhits: results.rowCount,
               data: { restaurants: results.rows },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
// get ONErestaurants + reviews + ratings
//======================================================
app.get("/api/v1/restaurants/:id", async (req, res) => {
     // console.count('//==app.get("/api/v1/restaurants/:id"=======');
     // console.log("(req.params.id>>>", req.params.id);
     try {
          const reply = await db.query(
               // `select * from restaurants where id = ${req.params.id}`//works --but dont use this
               "select * from restaurants where id = $1",
               [req.params.id]
          );
          const reply2 = await db.query(
               // `select * from restaurants where id = ${req.params.id}`//works --but dont use this
               "select * from reviews where restaurant_id = $1",
               [req.params.id]
          );
          const reply3 = await db.query(
               // `select * from restaurants where id = ${req.params.id}`//works --but dont use this
               "select trunc(avg(rating),2) from reviews where restaurant_id = $1",
               [req.params.id]
          );
          // console.log(reply);
          res.status(200).json({
               status: "success",
               // data: { restaurants: `req.params.id>>> ${req.params.id}` },
               data: { restaurant: reply.rows[0], reviews: reply2.rows, avg:reply3.rows[0].trunc },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
// CREATE ONErestaurants
//======================================================
app.post("/api/v1/restaurants/", async (req, res) => {
     // console.count('//==app.post("/api/v1/restaurants/"======');
     // console.log("req.body>>", req.body);

     try {
          const { name, location, price_range } = req.body;

          const reply = await db.query(
               "INSERT INTO restaurants( name, location, price_range) VALUES ($1,$2,$3) returning *",
               [name, location, price_range]
          );
          res.status(201).json({
               status: "success",
               data: { createdrestaurant: reply.rows[0] },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
//======================================================
//======================================================
// UPDATEONErestaurants
//======================================================
app.put("/api/v1/restaurants/:id", async (req, res) => {
     // console.count('//==app.get("/api/v1/restaurants/:id"=======');
     // console.log("(req.params.id>>>", req.params.id);
     const updateData = req.body;
     const updateKeys = Object.keys(updateData);
     updateKeys.forEach((e) => {
          // console.log(updateData);
          // console.log(updateKeys);
     });
     try {
          const reply = await db.query(
               "UPDATE restaurants SET name = $2, location = $3, price_range = $4 where id = $1 returning *",
               [
                    req.params.id,
                    updateData.name,
                    updateData.location,
                    updateData.price_range,
               ]
          );

          res.status(200).json({
               status: "success",
               data: {
                    restaurants: `req.params.id>>> ${req.params.id}`,
                    body: req.body,
                    updateItem: reply.rows[0],
               },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
// deleteONErestaurants
//======================================================
app.delete("/api/v1/restaurants/:id", async (req, res) => {
     // console.count('//==app.get("/api/v1/restaurants/:id"=======');
     // console.log("(req.params.id>>>", req.params.id);
     try {
          const reply = await db.query(
               "DELETE FROM restaurants WHERE id = $1 returning *",
               [req.params.id]
          );
          res.status(200).json({
               status: "success",
               data: {
                    restaurants: `req.params.id>>> ${req.params.id}`,
                    deletReply: reply.rows[0],
               },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
// create one reviews for one restaurant
app.post("/api/v1/reviews/:restaurant_id", async (req, res) => {
     // res.send("re1");
     try {
          const reply = await db.query(
               // "select * from reviews "
               "insert into reviews (name,restaurant_id,review,rating) values($1,$2,$3,$4) returning *  ",
               [
                    req.body.name,
                    req.params.restaurant_id,
                    req.body.reviewText,
                    req.body.ratings,
               ]
          );
          res.status(200).json({
               status: "success",
               data: {
                    // restaurants: `req.params.id>>> ${req.params.id}`,
                    newReview: reply.rows[0],
               },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
// get ALL reviews for one restaurant not used!!
app.get("/api/v1/reviews/:restaurant_id", async (req, res) => {
     // res.send("re1");
     try {
          const reply = await db.query(
               // "select * from reviews "
               "select * from reviews where restaurant_id = $1",
               [req.params.restaurant_id]
          );
          res.status(200).json({
               status: "success",
               data: {
                    // restaurants: `req.params.id>>> ${req.params.id}`,
                    reviews: reply.rows,
               },
          });
     } catch (error) {
          res.status(400).json(error);
     }
});
//======================================================
//======================================================
//======================================================
//======================================================

//======================================================
const port = process.env.PORT || 5009;
app.listen(port, () => {
     console.count("//======================================================");
     console.log(`server@${port}...crb`);
     console.count("//======================================================");
});
