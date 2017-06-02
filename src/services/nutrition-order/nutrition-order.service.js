// Initializes the `nutritionOrder` service on path `/nutrition-order`
const createService = require('feathers-sequelize');
const createModel = require('../../models/nutrition-order.model');
const hooks = require('./nutrition-order.hooks');
const filters = require('./nutrition-order.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'nutrition-order',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/nutrition-order', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('nutrition-order');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
