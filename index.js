import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import profileRouter from "./routes/profile.js";
import loginRouter from "./routes/login.js";


const app = express();
const port = 3000;

//**** Config ****//
app.set("view engine", "ejs");
app.use(cookieParser("secret"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("./public/"));

//**** Routes ****//
app.use("/profile", profileRouter);
app.use("/login", loginRouter);

app.get("/", (req, res, next)=>{
  res.cookie("gg", "hi mom");
  res.status(200).json(req.cookies);
  //res.render("index");
});



app.listen(port, ()=>console.log(`App started with port http//:localhost:[${port}]`));
