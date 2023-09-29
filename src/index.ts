import { Client, IntentsBitField, Events } from "discord.js"; // -> importing from discord.js
import eventHandler from "./handlers/eventHandler";
import antiCrash from "./handlers/antiCrash";
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds
  ],
}); // -> create the Client

client.once(Events.Ready, async () => {
	console.log(`Logged in as ${client.user?.tag}!`); // -> notify when bot is online
	
// Register command
	const commandData = {
		name: 'ping', // command name
		description: 'Reply with Pong!', //command description
	}
	const command = await client.application?.commands.create(commandData)
	
	if(command) {
		console.log(`Command registered: ${command.name}`)
	} else {
		console.log(`Error registering the command: ${command.name}`)
	}
})

client.on(Events.InteractionCreate, async interaction => {
	if(!interaction.isChatInputCommand()) return

	if(interaction.commandName === "ping") {
		await interaction.reply('Pong!')
	}
}) // -> command handler

client.login(process.env.TOKEN)