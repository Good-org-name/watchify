const db = require("./db");
const { STRING, UUID, UUIDV4 } = db.Sequelize;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT = process.env.JWT_SECRET;
// //create a function to generate a web token
// User.generateToken=(user)=>{
//     return jwt.sign({id:user.id},JWT)
// }

// //create ecryptUser function

// User.encryptUser = async (user) =>{
//     const { dataValues } = await User.create(user)
//     return User.generateToken(dataValues)
// }
// //authenticate user

// User.authenticate = async function ({ username, password }) {
//     const user = await User.findOne({
//       where: {
//         username,
//       },
//     });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       return jwt.sign({ id: user.id }, JWT);
//     }
//     const error = new Error('bad credentials');
//     error.status = 401;
//     throw error;
//   };

  
//   User.addHook('beforeSave', async (user) => {
//     if (user.changed('password')) {
//       user.password = await bcrypt.hash(user.password, 5);
//     }
//   });

//   // Create a User model function to validate JWT passed
//   User.findByToken = async function (token) {
//     try {
//       const { id } = jwt.verify(token, process.env.JWT);
//       const user = await this.findByPk(id);
//       if (user) {
//         return user;
//       }
//       throw 'user not found';
//     } catch (ex) {
//       const error = new Error('bad credentials');
//       error.status = 401;
//       throw error;
//     }
//   };

const User = db.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

User.addHook("beforeSave", async (user) => {
<<<<<<< HEAD
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

User.prototype.getUserByEmail = async function (email) {
  const user = await user.find({
    where: {
      email: email,
    },
  });
  return user;
};
/* generate token function
returns a signed jwt using the environment secret
*/
User.generateToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "abigfatsecretword"
  );
};

/* encryptUser function (for registering new user)
returns a jwt token for the created user
*/

//User.encryptUser = async(user) => {
//create new user
//const { dataValues } = await User.create(user)
//return the jwt for the new user
//return User.generateToken(dataValues)
//}

/**
 create authenticate function
 *
 * Find the user based on the username
 * Compare the password in the db with the password provided by the user with bcrypt
 * If they match then generate a token for the user
 * If not throw an error
 */

User.authenticate = async ({ email, password }) => {
  //find user based on email
  const user = await User.findOne({
    where: { email: email },
  });
  //Compare the password in the db with the password provided by the user with bcrypt
  //If they match then generate a token for the user

  if (user && (await bcrypt.compare(password, user.password))) {
    return User.generateToken(user);
  }
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};

/**
 * create a User model function to validate the JWT passed
 */

User.validate = async (token) => {
  try {
    const { userId } = await jwt.verify(
      token,
      process.env.JWT_SECRET || "abigfatsecretword"
    );
    const user = await User.findByPk(userId);

    if (user) {
      return user;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (err) {
    const error = Error("bad credentials");
    error.status = 401;
    throw (error, err);
  }
};
=======
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 5);
    }
});

User.prototype.getUserByEmail = async function (email){
    const user = await user.find({where: {
        email: email
    }});
    return user;
}

>>>>>>> main

module.exports = User;
