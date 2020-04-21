var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    USERNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PHONE :{
      type: DataTypes.STRING,
    },
    FIRSTNAME :{
      type: DataTypes.STRING,
    },
    MIDDLENAME :{
      type: DataTypes.STRING,
    },
    SURNAME :{
      type: DataTypes.STRING,
    },
    DOB :{
      type: DataTypes.DATE,
    },
    CITY :{
      type: DataTypes.INTEGER,
    },
    POSTALCODE :{
      type: DataTypes.STRING,
    },
    RESIDENCE :{
      type: DataTypes.INTEGER,
    },
    COUNTRY :{
      type: DataTypes.INTEGER,
    },
    LICENSENUMBER :{
      type: DataTypes.STRING,
    },
    STREETADDRESS :{
      type: DataTypes.STRING,
    },
    PARENTFIRSTNAME :{
      type: DataTypes.STRING,
    },
    PARENTLASTNAME :{
      type: DataTypes.STRING,
    },
    PARENTPHONENUMBER :{
      type: DataTypes.STRING,
    },
    SECURITYQUESTION1 :{
      type: DataTypes.INTEGER,
    },
    SECURITYANSWER1 :{
      type: DataTypes.STRING,
    },
  },{
    tableName: 'USERS'
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
