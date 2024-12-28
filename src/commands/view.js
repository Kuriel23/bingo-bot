const discord = require("discord.js");

module.exports = {
	data: new discord.SlashCommandBuilder()
		.setName("bingo_view")
		.setDescription("Veja o bingo de alguma pessoa!")
		.setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator)
		.addUserOption((option) =>
			option
				.setName("membro")
				.setDescription("Identifique o utilizador")
				.setRequired(true),
		),
	async execute(interaction, client) {
		const bingo = await client.db.Bingo.findOne({
			_id: interaction.options.getMember("membro").user.id,
		});
		if (bingo) {
			await interaction.reply({
				content: `https://images.kurieldev.tk/api/cards/bingoGOU?numbers=${encodeURIComponent(bingo.numbers.join(","))}`,
				ephemeral: true,
			});
		} else {
			interaction.reply({
				content: "Essa pessoa nem cartela têm.",
				ephemeral: true,
			});
		}
	},
};
