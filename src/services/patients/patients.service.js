// Initializes the `patients` service on path `/patients`
const createService = require('feathers-sequelize');
const createModel = require('../../models/patients.model');
const hooks = require('./patients.hooks');
const filters = require('./patients.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'patients',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/patients', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('patients');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
