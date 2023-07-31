const { User } = require('../models')
const { compareHash } = require("../helpers/passwordHasher");
const { encodeToken } = require("../helpers/jwtEncoderDecoder");

class Controller {
    static async registerUser(req, res, next) {
        const { email, phone, password } = req.body;

        try {
            const newUser = await User.create({
                email,
                phone,
                password,
                type: 2
            });

            res.status(201).json({
                id: newUser.id,
                email: newUser.email,
                message: `User with email ${newUser.email} is succesfully registered`
            });
            
        } catch (err) {
            next(err);
        }
    }

    static async loginUser(req, res, next) {
        const { email, password } = req.body;

        try {
            if (!email) {
                throw { name: "EmailIsRequired" };
            }
            if (!password) {
                throw { name: "PasswordIsRequired" };
            }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: "WrongEmailOrPassword" };
            }

            const isPasswordCorrect = compareHash(password, user.password);
            if (!isPasswordCorrect) {
                throw { name: "WrongEmailOrPassword" };
            }

            const encodedToken = encodeToken({ id: user.id });

            res.status(200).json({
                access_token: encodedToken,
                email: user.email,
                avatar: user.avatar,
                message: `${user.email} is successfully logged in`
            });
            
        } catch (err) {
            next(err);
        }
    }

}

module.exports = Controller
