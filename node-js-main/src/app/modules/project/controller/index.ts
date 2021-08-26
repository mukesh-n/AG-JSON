import express from "express";
import { Environment } from "../../../../global/utils";
import { UserController } from "../controller/user.controller"
const router = express.Router();
const environment = Environment.getInstance();

router.use("/User", UserController);


export { router as ProjectRoutes };