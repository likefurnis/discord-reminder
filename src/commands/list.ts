import { Client, Message, RichEmbed, RichEmbedOptions } from 'discord.js';
import { Command } from './command';

export class List extends Command {
    public async execute(client: Client, message: Message, args: string[]): Promise<Message> {
        // TODO: List all reminders
        const options: RichEmbedOptions = {
            title: 'Reminders list',
            author: {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL,
            },
            color: 3447003,
            description: 'Here all the reminders that the user has will be displayed',
        };
        const embed: RichEmbed = new RichEmbed(options);
        return message.channel.send(embed);
    }
}
