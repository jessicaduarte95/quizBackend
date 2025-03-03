const Joi = require('joi');

const findOption = Joi.object({
  level: Joi.number().required(),
  idQuestion: Joi.number().required()
});

module.exports = {
    findOption
};
