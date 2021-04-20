const Discord = require('discord.js')
const request = require('request')
const colors = require('../lib/colors.json')

exports.run = async (client, message, args, level) => {
    try {
        request('https://dog.ceo/api/breeds/image/random', function(error, body) {
            var result = JSON.parse(body.body)
            const embed = new Discord.MessageEmbed()
                .setColor(colors.default)
                .setImage(result.message)
                .setFooter(`${lang.RespondingTo} ${message.author.tag}`, message.author.avatarURL())
                .setTimestamp()

            message.channel.send(embed)
        })
    } catch (err) {
        const errors = require('../modules/errors.js')
    errors.embedError(err, lang, message)
    }
}

exports.conf = {
    enabled: true,
    aliases: ['pup', 'doggo', 'doge', 'puppy'],
    guildOnly: false,
    permLevel: 'User'
}

exports.help = {
    name: 'dog',
    category: 'Fun',
    description: 'Shows a pictue of a random doggo.',
    usage: 'dog'
}