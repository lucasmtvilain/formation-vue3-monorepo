//Ctrl + shit +enter
import express from "express";
import type { Article, NewArticle } from "@gestionstock/commons";
import { randomUUID } from "crypto";

const app = express.Router();

let articles: Article[] = [
  {
    id: "a1",
    name: "Tourvis",
    price: 1.5,
    qty: 1,
  },
  {
    id: "a1uid",
    name: "Marteau",
    price: 1.3,
    qty: 1,
  },
];

// http://localhost:3000/api/articles.
app.get("/articles", (req, res) => {
  res.json(articles);
});

// express.json() regarde si le contentType = "Application/json"

app.post("/articles", express.json(), (req, res) => {
  const newArticle: NewArticle = req.body;
  const article: Article = {
    ...newArticle,
    id: randomUUID(),
  };

  articles.push(article);

  res.status(201).end();
});

app.delete("/articles", express.json(), (req, res) => {
  const ids: Article["id"][] = req.body;

  if (ids.length === 2) {
    res.status(400).end("interdit de supprimer exactement 2 bonhommes.");
    return;
  }
  const idsSet = new Set(ids); // Pour perf

  articles = articles.filter((a) => {
    return !idsSet.has(a.id);
    //return ids.includes(a.id);
  });
  res.status(204).end();
});
export default app;
