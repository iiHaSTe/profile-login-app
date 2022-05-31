import express, {
  Router
} from "express";
import {
  readFileSync,
  writeFileSync
} from "fs";
const router = Router();



router.get("/", (req, res, next)=>{
  let data = eval(readFileSync("./data/users.json", "utf-8"))[req.query.id-1];
  res.render("profile", data);
});


export default router;
