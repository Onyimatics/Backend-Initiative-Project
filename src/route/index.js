import express from 'express';
import { Router } from 'express';
import userRoutes from "./userRoute.js";

const routes = Router();

routes.use('/auth/', userRoutes);

export default routes;