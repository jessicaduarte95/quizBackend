const Joi = require('joi');

const findOption = Joi.object({
  level: Joi.number().required(),
  question: Joi.number().required()
});

const insertOption = Joi.object({
  level: Joi.number().required(),
  question: Joi.number().required(),
  options: Joi.array().items(
    Joi.object().pattern(
      /^option\d+$/, Joi.string().required()
    ).pattern(
      /^correct\d+$/, Joi.number().valid(0, 1).required()
    )
  ).required()
});

module.exports = {
    findOption,
    insertOption
};
