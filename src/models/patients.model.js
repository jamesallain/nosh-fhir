// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const patients = sequelizeClient.define('patients', {  
    id: { type: Sequelize.STRING }, 
    patientId: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      field: 'patient_id'
    },

    identifier: { type: Sequelize.JSON },
    active: { type: Sequelize.BOOLEAN },
    name: { type: Sequelize.JSON },
    telecom: { type: Sequelize.JSON },
    gender: { type: Sequelize.STRING },
    birthDate: { 
      type: Sequelize.STRING,
      field: 'birthdate'
    },
    deceased: { type: Sequelize.STRING },
    address: { type: Sequelize.JSON },
    maritalStatus: { 
      type: Sequelize.JSON, 
      field: 'maritalstatus'
    }, 
    multipleBirth: {
      type: Sequelize.INTEGER,
      field: 'multiplebirth',
    },
    photo: { type: Sequelize.JSON },
    contact: { type: Sequelize.JSON },
    animal: { type: Sequelize.JSON },
    communication: { type: Sequelize.JSON },
    generalPractioner: { 
      type: Sequelize.JSON,
      field: 'generalpractitioner'
    },
    managingOrganization: { 
      type: Sequelize.JSON,
      field: 'managingorganization'
    },
    link: { type: Sequelize.JSON },
    createdAt: {
      type: Sequelize.DATE,
      // field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      // field: 'updated_at',
    }
  },{
    schema: 'fhir'
  },{
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  });

  return patients;
};
