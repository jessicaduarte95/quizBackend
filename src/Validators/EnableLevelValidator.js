const Joi = require('joi');

const findEnableLevel = Joi.object({
  id: Joi.number().required()
});

const insertEnableLevel = Joi.object({
  idUser: Joi.number().required(),
  points: Joi.number().required(),
  level: Joi.number().required()
});

module.exports = {
    findEnableLevel,
    insertEnableLevel
};
