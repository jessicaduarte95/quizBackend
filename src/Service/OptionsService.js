// Repository
const OptionsRepository     = require('../Repository/OptionsRepository');

//Validator
const { 
	findOption, 
	insertOption 
}                           = require('../Validators/OptionValidator');

class OptionsService {
	async getOptionsQuestions(params, query) {
		try {
			// Data input validation
			const data = {
				level: query.level,
				idQuestion: params.idQuestion
			}
            const { error, value } = findOption.validate(data, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

			// Got questions
			const result = await OptionsRepository.findAll({
				level: value.level,
				idQuestion: value.idQuestion
			})
			if(!result) {
				throw new Error('options_not_found');
			}

			return result;
		} catch (error) {
			throw new Error(error);
		}
	}

	async insertOptions(body) {
		try {
			// Data input validation
            const { error, value } = insertOption.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

			// Insert options
			for (let index = 0; index < body.options.length; index++) {
				const optionEntry = body.options[index];
				const optionKey = Object.keys(optionEntry)[0];
				const correctKey = Object.keys(optionEntry)[1];

				const data = {
					level: value.level,
					idQuestion: value.question,
					option: optionEntry[optionKey],
        			correct: optionEntry[correctKey]
				}
				const resultOption = await OptionsRepository.createOptions(data);

				if(!resultOption) {
					throw new Error('created_options_failed');
				}
			}

			return;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = OptionsService;
