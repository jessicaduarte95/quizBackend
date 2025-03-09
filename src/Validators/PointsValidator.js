const Joi = require('joi');

const setPoints = Joi.object({
  idUser: Joi.number().required(),
  level: Joi.number().required(),
  points: Joi.number().required()
});

module.exports = {
    setPoints
};