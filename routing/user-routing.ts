import express from 'express'; 
import userController from '../controllers/user-controller';

const userRouter = express.Router();

userRouter
    .route("/user")
    .get(userController.getAllUsers)
    .post(userController.insertUserManually);

userRouter
    .route("/user/:id")
    .get(userController.getUserByID)
    .put(userController.updateUserData)
    .delete(userController.deleteUser);


userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);

export default userRouter;


