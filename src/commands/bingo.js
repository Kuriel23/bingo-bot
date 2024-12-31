const discord = require("discord.js");

module.exports = {
	data: new discord.SlashCommandBuilder()
		.setName("bingo_start")
		.setDescription("Comece o bingo!")
		.setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator),
	async execute(interaction, client) {
		interaction.reply("Ah shit, here we go again");
		interaction.channel.send({
			embeds: [
				new discord.EmbedBuilder().setTitle("Bingo!").setColor(client.cor),
			],
			components: [
				new discord.ActionRowBuilder().addComponents(
					new discord.ButtonBuilder()
						.setCustomId("cartela")
						.setStyle(discord.ButtonStyle.Primary)
						.setLabel("Criar cartela"),
				),
			],
		});
	},
};
