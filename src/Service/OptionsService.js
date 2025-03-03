// Repository
const OptionsRepository     = require('../Repository/OptionsRepository');

//Validator
const { findOption }        = require('../Validators/OptionValidator');

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
		// let option;

		// if (data.level[0].nivel == 1) {
		// 	option = data.perguntaAtual + 1;
		// } else if (data.level[0].nivel !== 1 && data.perguntaAtual !== 9) {
		// 	let questionOptions = data.perguntaAtual + 1;
		// 	let number = data.level[0].nivel - 1;
		// 	option = number.toString() + questionOptions.toString();
		// } else if (data.perguntaAtual == 9) {
		// 	let number = data.level[0].nivel;
		// 	option = number.toString() + 0;
		// }

		// return Options.findAll({
		// 	where: {
		// 		nivel: data.level[0].nivel,
		// 		idquestao: option
		// 	}
		// });
	}

	async insertOptions(data) {
		try {
			return;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = OptionsService;
