import express from "express";
import { Environment } from "../../../../global/utils";
import { UsersController } from "./users.controller"
const router = express.Router();
const environment = Environment.getInstance();

router.use("/User", UsersController);

export { router as ProjectRoutes };