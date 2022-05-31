import { Router } from "express";
import {
  readFileSync,
  writeFileSync
} from "fs";
const router = Router();






router.get("/", (req, res)=>{
  res.render("login");
});

router.post("/", (req, res)=>{
  let acounts = eval(readFileSync("./data/users.json", "utf-8"));
  let userAcount = acounts.find(el => {
    return (
      el.email == req.body.email &&
      el.pass == req.body.pass
    )
  });
  
  let cookieOpt = {
    maxAge: 1000 * 60 * 15 * 10000
  }

  if (userAcount){
    res.cookie("email", userAcount.email, cookieOpt);
    res.cookie("pass", userAcount.pass, cookieOpt);
    res.cookie("id", userAcount.id, cookieOpt);
    res.redirect(encodeURI("profile"));
  }else
    res.render("login", {
      retrying: true
    });
  
});
/*router.post("/", (req, res)=>{
  let cont = eval(readFileSync("./routes/users.json", "utf-8"));
  req.body.id = cont.length+1;
  cont.push(req.body);
  writeFileSync("./routes/users.json", JSON.stringify(cont, undefined, 2));
  res.json(cont);
});*/

export default router;
