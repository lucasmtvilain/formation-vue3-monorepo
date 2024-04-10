// Commentaire

import express from "express";
import serveIndex from "serve-index";
import api from "./api.js";
const app = express();
const port = 3000;
const publicDir = ".";

const log: express.RequestHandler = (
  req,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("req : ", req.method, req.url);
  next();
};

app.use(log);

// app.use((req, res, next) => {
//   console.log("req : ", req.method, req.url);
//   next();
// });

app.use("/api", api);
app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//req => snippet pour mettre une constante

// Ctrl + shift + d => efface les console.log
