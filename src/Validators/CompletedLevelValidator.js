const Joi = require('joi');

const findCompletedLevel = Joi.object({
  id: Joi.number().required(),
  level: Joi.number().required()
});

module.exports = {
    findCompletedLevel
};