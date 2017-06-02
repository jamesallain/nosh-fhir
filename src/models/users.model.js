// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    username: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
  
  
    googleId: { type: Sequelize.STRING },
  
    facebookId: { type: Sequelize.STRING },
  
    githubId: { type: Sequelize.STRING },
  
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        users.hasMany(models.patients, { foreignKey: 'user_id' });
      }
    }
  });

  return users;
};
