import  express  from "express";
import  chatBotController  from "controller/HomeController";
let router=  express.Router();

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send("test");
    // });
    router.get("/", chatBotController.getHomePage);
    return app.use("/", router);
}
module.exports = initWebRoutes;