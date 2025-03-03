const Joi = require('joi');

const findEnableLevel = Joi.object({
  id: Joi.number().required()
});

module.exports = {
    findEnableLevel
};
