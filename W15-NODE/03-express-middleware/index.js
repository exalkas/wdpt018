import express from "express";
import userRoutes from "./routes/userRoutes.js";
import tweetRoutes from "./routes/tweetRoutes.js";

const app = express();
app.use(express.json());
/**
 * Express is storing all the middlewares into an array
 *
 * app.get = array.push
 *
 * SOS: EVERY REQUEST LISTENER MUST TERMINATE THE REQ/RES CYCLE OR
 * CALL THE NEXT REQUEST LISTENER IN THE SEQUENCE
 *
 * Order of middleware MATTERS
 */

// app.use("*", (req, res, next) => {
//   console.log("middleware 1 runs");

//   next();
// });

// app.get("/login", (req, res, next) => {
//   // this is a middleware
//   console.log("login runs");

//   next();
// });
// app.post("/register", (req, res, next) => {
//   // this is a middleware
//   console.log("register runs");

//   next();
// });

// app.use("*", (req, res) => {
//   console.log("middleware 2 runs");
//   res.send("OK");
// });

app.use("/users", userRoutes); // send these requests to the given file

app.use("/tweets", tweetRoutes);

app.listen(5000, () => console.log("Server is up and running!"));

// if (app._router && app._router.stack) {
//   app._router.stack.forEach((middleware, index) => {
//     if (middleware.route) {
//       // for route middleware
//       console.log(index, middleware.route);
//     } else if (middleware.name === "router") {
//       // for routers
//       middleware.handle.stack.forEach((handler) => {
//         const route = handler.route ? handler.route.path : "n/a";
//         const method = handler.route
//           ? Object.keys(handler.route.methods)[0].toUpperCase()
//           : "n/a";
//         console.log(`${index} - ${middleware.name} - ${route} - ${method}`);
//       });
//     } else {
//       // for other middleware
//       console.log(index, middleware.name || "anonymous");
//     }
//   });
// }
