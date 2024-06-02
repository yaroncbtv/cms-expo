'use strict';

/**
 * yaron service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yaron.yaron');
