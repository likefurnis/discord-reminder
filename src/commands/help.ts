import { Client, Message, RichEmbed, RichEmbedOptions } from 'discord.js';
import { Command } from './command';

export class Help extends Command {
    public async execute(client: Client, message: Message): Promise<Message> {
        // TODO: Display proper help.
        const options: RichEmbedOptions = {
            title: 'Help',
            color: 3447003,
            description: 'Here you will see the commands descriptions.',
        };
        const embed: RichEmbed = new RichEmbed(options);
        return message.channel.send(embed);
    }
}
