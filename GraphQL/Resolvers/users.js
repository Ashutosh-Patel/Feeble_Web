const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {SECRET_KEY} = require('../../config')
const User = require("../../Models/User");
const {UserInputError} = require('apollo-server')

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, password, confirmPassword, email } },
    ) {
      // Validate user data
      // make sure user doesn't already exist
        const user = await User.findOne({username});
        if(user){
            throw new UserInputError("Username already taken", {
                errors: {
                    username: 'This username is taken'
                }
            })
        }

      // hash password and create auth token
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
            email,
            username,
            password,
            createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = jwt.sign({
          id: res.id,
          email: res.email,
          username: res.username
      },SECRET_KEY, {expiresIn:'1h'});

      return {
          ...res._doc,
          id: res.id,
          token
          
      }

    },
  },
};
