module.exports = (client, interaction) => {
	if (interaction.isStringSelectMenu()) {
		require(`../menu/${interaction.customId}`)(client, interaction);
	}
	if (interaction.isButton()) {
		require(`../buttons/${interaction.customId}`)(client, interaction);
	}
	if (interaction.isChatInputCommand()) {
		const command = client.commands.get(interaction.commandName);
		if (!command) return;
		try {
			command.execute(interaction, client);
		} catch (err) {
			if (err) console.error(err);
		}
	}
};
