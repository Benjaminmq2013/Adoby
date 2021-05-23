const express = require("express")
const app = express();
const path = require("path")
const ejs = require("ejs")


// MIDDLEWARES
app.use((req, res, next)=>{
    console.log(`${req.url} -${req.method}`)
    next()
})
app.set("views", path.join(__dirname, "views"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs")

// ROUTES
const router = express.Router()
router.get("/", (req, res)=>{
    res.render("index.html")
})
app.use(router)

// STATICS
app.use(express.static(path.join(__dirname, "public")))

// SETTINGS
const config = require("../config")

// PORT
const PORT = config.api.port;
app.listen(PORT, ()=>{
    console.log("App Listening on http://127.0.0.1:"+ PORT)
})