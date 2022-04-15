import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Help: Command = {
    name: "help",
    description: "Returns a list of commands",
    type: "CHAT_INPUT",
    run: async (_client: Client, interaction: BaseCommandInteraction) => {
        const content = "Here's a list of commands:\n" +
            "```\n" +
            "/help \t- Returns this list\n" +
            "/ping \t- Returns a pong to the user who sent the command\n" +
            "/time \t- Returns the current time\n" +
            "/hello\t- Returns a hello to the user who sent the command\n" +
            "```";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

export const Ping: Command = {
    name: "ping",
    description: "Returns a pong to the user who sent the command",
    type: "CHAT_INPUT",
    run: async (_client: Client, interaction: BaseCommandInteraction) => {
        const toUser: string = interaction.member?.toString() ?? "someone";
        const content = "```Pong! " + toUser + "!```";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

export const Time: Command = {
    name: "time",
    description: "Returns the current time",
    type: "CHAT_INPUT",
    run: async (_client: Client, interaction: BaseCommandInteraction) => {
        const content = "```The current date and time is:\n" + new Date().toLocaleString() + "```";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting to the user who sent the command",
    type: "CHAT_INPUT",
    run: async (_client: Client, interaction: BaseCommandInteraction) => {
        const toUser: string = interaction.member?.toString() ?? "someone";
        const content = "```Why if it isn't```" + toUser + "```Hello, relax and enjoy your stay!```";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};