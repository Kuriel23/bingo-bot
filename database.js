const { connect, Schema, model } = require('mongoose');
const { ChalkAdvanced } = require('chalk-advanced');
connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		console.log(
			`${ChalkAdvanced.gray('>')} ${ChalkAdvanced.green(
				'✅ • Carregado com sucesso [BANCO DE DADOS]',
			)}`,
		),
	)
	.catch(() =>
		console.log(
			`${ChalkAdvanced.gray('>')} ${ChalkAdvanced.red(
				'❎ • Conexão do banco de dados falhada',
			)}`,
		),
	);

const bingoSchema = new Schema({
	_id: { type: String, required: true },
	numbers: { type: Array },
});
module.exports.Bingo = model('Bingo', bingoSchema);
