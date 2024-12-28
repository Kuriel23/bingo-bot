module.exports = async (client, interaction) => {
	let numbers = [];
	const userId = interaction.user.id;

	const bingo = await client.db.Bingo.findOne({ _id: userId });
	if (bingo) {
		numbers = bingo.numbers;
	} else {
		while (numbers.length < 24) {
			const randomNumber = Math.floor(Math.random() * 99) + 1;
			if (!numbers.includes(randomNumber)) {
				numbers.push(randomNumber);
			}
		}

		const newBingo = new client.db.Bingo({
			_id: userId,
			numbers: numbers,
		});
		await newBingo.save();
	}

	await interaction.reply({
		content: `https://prismatic-squirrel-9e8dca.netlify.app/api/cards/bingo?numbers=${encodeURIComponent(numbers.join(","))}`,
		ephemeral: true,
	});
};
