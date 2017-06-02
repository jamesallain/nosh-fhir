const assert = require('assert');
const app = require('../../src/app');

describe('\'nutritionOrder\' service', () => {
  it('registered the service', () => {
    const service = app.service('nutrition-order');

    assert.ok(service, 'Registered the service');
  });
});
