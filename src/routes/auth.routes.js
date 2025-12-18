import { Router } from "express";
import { registerUser,login,logoutUser, verifyEmail, refreshAccessToken, forgotPasswordRequest, resetForgotPassword, getCurrentUser, changeCurrentPassword, resendEmailVerification } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator-middleware.js";
import { verifyJWT} from "../middlewares/auth.middlewares.js";
import { userRegisterValidator,userLoginValidator, userForgotPasswordValidator, userResetForgotPasswordValidator, userChangePasswordValidator } from "../validators/index.js";

const router = Router();


// unsecure routes
router.route("/register").post(userRegisterValidator(), validate, registerUser);    
router.route("/login").post(userLoginValidator(), validate, login);    
router.route("/verify-email/:verificationToken").get(verifyEmail);    
router.route("/refresh-token").post(refreshAccessToken);    
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest);    
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword);    


// secure routes can be added here
router.route("/logout").post(verifyJWT, logoutUser); 
router.route("/current-user").post(verifyJWT, getCurrentUser); 
router.route("/change-password").post(verifyJWT,userChangePasswordValidator(), validate, changeCurrentPassword); 
router.route("/reset-email-verification").post(verifyJWT, resendEmailVerification); 


  
export default router;
