import express, {
  Router
} from "express";
import {
  readFileSync,
  writeFileSync
} from "fs";

const router = Router();



router.get("/", (req, res, next)=>{
  let data = eval(readFileSync("./data/users.json", "utf-8"))[req.cookies.id-1];
  res.render("profile", data);
});

router.post("/", (req, res, next)=>{
  console.log(req.body);
  if (req.body.type=="folow"){
  let cont = eval(readFileSync("./data/users.json", "utf-8"));
  cont[parseInt(req.cookies.id)-1]["folowers"] += 1;
  writeFileSync("./data/users.json", JSON.stringify(cont, undefined, 2));
  let userAcount = cont[parseInt(req.cookies.id)-1];
  console.log("yes");
  res.status(204).render("profile", userAcount);
  }else {
    next();
  }
});

export default router;
