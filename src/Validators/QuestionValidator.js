const Joi = require('joi');

const findQuestionByLevel = Joi.object({
  level: Joi.number().required()
});

const create = Joi.object({
  level: Joi.number().required(),
  question: Joi.string().required(),
});

module.exports = {
    findQuestionByLevel,
    create
};
