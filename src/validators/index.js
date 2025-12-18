import { body } from "express-validator"

const userRegisterValidator = () => {
    return [
        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLowercase().withMessage("Username must be a lowercase string")
            .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long"),

        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email must be valid"),

        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .optional()
            .isEmail().withMessage("Email must be valid"),

        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
    ]
}


const userChangePasswordValidator = () => {
    return [
        body("oldPassword")
            .trim()
            .notEmpty().withMessage("Old password is required"),
        body("newPassword")
            .trim()
            .notEmpty().withMessage("New password is required")
            .isLength({ min: 5 }).withMessage("New password must be at least 5 characters long"),
    ]
}
const userForgotPasswordValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email must be valid"),
    ]
}
const userResetForgotPasswordValidator = () => {
    return [
        body("newPassword")
            .trim()
            .notEmpty().withMessage("New password is required")
            .isLength({ min: 5 }).withMessage("New password must be at least 5 characters long"),
    ]
}




export {
    userRegisterValidator,
    userLoginValidator,
    userChangePasswordValidator,
    userForgotPasswordValidator,
    userResetForgotPasswordValidator
}