const Joi = require("@hapi/joi");


module.exports = {
    //Handling Category validation
    categoryValidation: Joi.object().keys({
        categoryName: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `Category is required.`,
            "any.required": `Category is required.`,
        }),
        discription: Joi.string().required().empty().messages({
            "string.base": `Discription should be a type of 'text'`,
            "string.empty": `Discription is required.`,
            "any.required": `Discription is required.`,
        })
    }),

    //Handling Portfolio validation
    portfolioValidation: Joi.object().keys({
        projectName: Joi.string().required().messages({
            "string.base": `Project name should be a type of 'text'`,
            "string.empty": `Project name is required.`,
            "any.required": `Project name is required.`,
        }),
        projectCategory: Joi.string().required().messages({
            "string.base": `Project category should be a type of 'text'`,
            "string.empty": `Project category is required.`,
            "any.required": `Project category is required.`,
        }),
        discription: Joi.string().required().messages({
            "string.base": `Discription should be a type of 'text'`,
            "string.empty": `Discription is required.`,
            "any.required": `Discription is required.`,
        }),
        image: Joi.optional()
    }),

    //Handling Testnomial validation
    testnomialValidation: Joi.object().keys({
        clientName: Joi.string().required().empty().messages({
            "string.base": `Client name should be a type of 'text'`,
            "string.empty": `Client name is required.`,
            "any.required": `Client name is required.`,
        }),
        feedback: Joi.string().required().empty().messages({
            "string.base": `Feedback should be a type of 'text'`,
            "string.empty": `Feedback is required.`,
            "any.required": `Feedback is required.`,
        })
    }),

    //Handling Enquiry validation
    enquiryValidation: Joi.object().keys({
        firstName: Joi.string().required().empty().messages({
            "string.base": `Firstname should be a type of 'text'.`,
            "string.empty": `Firstname is required`,
            "any.required": `Firstname is required.`
        }),
        lastName: Joi.string().required().empty().messages({
            "string.base": `Lastname should be a type of 'text'.`,
            "string.empty": `Lastname is required`,
            "any.required": `Lastname is required.`
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'.`,
            "string.empty": `Email is required`,
            "string.email": `Email format not valid`,
            "any.required": `Email is required.`
        }),
        mobileNo: Joi.string().required().empty().regex(/[0-9]{10}/).messages({
            "string.base": `Mobile number should be a type of 'number'.`,
            "string.empty": `Mobile number is required`,
            "string.pattern.base": "Mobile number must be {1234567890} formate",
            "any.required": `Mobile number is required.`
        }),
        comment: Joi.string().required().empty().messages({
            "string.base": `Comment should be a type of 'text'.`,
            "string.empty": `Comment is required`,
            "any.required": `Comment is required.`
        })
    }),

    //Handling User validation
    userValidation: Joi.object().keys({
        userName: Joi.string().required().empty().messages({
            "string.base": `Username should be a type of 'text'`,
            "string.empty": `Username is required.`,
            "any.required": `Username is required.`,
        }),
        password: Joi.string().required().empty().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,16}$/).min(6).max(16).messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password is required.`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "string.pattern.base": "password must contains lower case, upper case and between 6 and 16 characters",
            "any.required": `Password is required.`,
        }),
        firstName: Joi.string().required().empty().messages({
            "string.base": `Firstname should be a type of 'text'`,
            "string.empty": `Firstname is required.`,
            "any.required": `Firstname is required.`,
        }),
        lastName: Joi.string().required().empty().messages({
            "string.base": `Lastname should be a type of 'text'`,
            "string.empty": `Lastname is required.`,
            "any.required": `Lastname is required.`,
        }),
        contact: Joi.string().required().empty().regex(/[0-9]{10}/).messages({
            "string.base": `Contact should be a type of 'text'`,
            "string.empty": `Contact is required.`,
            "string.pattern.base": "Contact must be {1234567890} formate",
            "any.required": `Contact is required.`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email is required.`,
            "string.email": `Email should be correct Format.`,
            "any.required": `Email is required.`,
        })
    }),

    //Handling Login validation
    loginValidation: Joi.object().keys({
        userName: Joi.string().required().empty().messages({
            "string.base": `Username should be a type of 'text'`,
            "string.empty": `Username is required.`,
            "any.required": `Username is required.`,
        }),
        password: Joi.string().required().empty().min(6).messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password is required.`,
            "string.min": `Password should be of minimum 6 characters.`,
            "any.required": `Password is required.`,
        })
    }),

    //Handling Forgot Password validation
    forgotpasswordValidation: Joi.object().keys({
        password: Joi.string().required().empty().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,16}$/).min(6).max(16).messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password is required.`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "string.pattern.base": "password must contains lower case, upper case and between 6 and 16 characters",
            "any.required": `Password is required.`,
        }),
        confirmPassword: Joi.string().required().empty().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,16}$/).min(6).max(16).valid(Joi.ref('password')).messages({
            "string.base": `Confirm password should be a type of 'text'`,
            "string.empty": `Confirm password is required.`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "string.pattern.base": "password must contains lower case, upper case and between 6 and 16 characters",
            "any.only": `Password and Confirm password must me match.`,
            "any.required": `Confirm password is required.`,
        })
    }),

    //Handling Change Password validation
    changePasswordValidation: Joi.object().keys({
        oldPassword: Joi.string().required().empty().min(6).messages({
            "string.base": `Old password should be a type of 'text'`,
            "string.empty": `Old password is required.`,
            "string.min": `Old password should be of minimum 6 characters.`,
            "any.required": `Old password is required.`,
        }),
        password: Joi.string().required().empty().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,16}$/).min(6).max(16).messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password is required.`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "string.pattern.base": "password must contains lower case, upper case and between 6 and 16 characters",
            "any.required": `Password is required.`,
        }),
        confirmPassword: Joi.string().required().empty().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,16}$/).min(6).max(16).valid(Joi.ref('password')).messages({
            "string.base": `Confirm password should be a type of 'text'`,
            "string.empty": `Confirm password is required.`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "string.pattern.base": "password must contains lower case, upper case and between 6 and 16 characters",
            "any.only": `Password and Confirm password must me match.`,
            "any.required": `Confirm password is required.`,
        })
    })
};