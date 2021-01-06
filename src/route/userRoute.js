import express from 'express';
import { Router } from 'express';

import UserController from "../controller/userController.js";
import UserValidation from "../middleware/userMiddleware.js";

const userRoutes = Router();

userRoutes.post(
    '/user',
    UserValidation.userInputs,
    UserController.createUser);

export default userRoutes;