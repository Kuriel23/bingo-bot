const discord = require("discord.js");

module.exports = {
	data: new discord.SlashCommandBuilder()
		.setName("bingo_reset")
		.setDescription("Resete todas as cartelas!")
		.setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator),
	async execute(interaction, client) {
		await client.db.Bingo.deleteMany({});
		await interaction.reply({
			content: "Todas as cartelas foram resetadas!",
			ephemeral: true,
		});
	},
};
