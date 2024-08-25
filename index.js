// https://rizkyrajitha.hashnode.dev/send-messages-with-telegram-using-appwrite-functions

const { Telegraf } = require("telegraf");

const bot = new Telegraf("7126722358:AAEwnN3Pr71y6TCHS1jXh7yWyqa9wIshRx4");

const startMsg = `
You start this bot cwEchoBot\n
Send any text to this bot and it will reply to you.\n
don't think so much just use and enjoy.
`;
bot.start((ctx) => ctx.reply(startMsg));

const helpMsg = `
i bet you don't need tutorial or any help.\n
it just echoing
`;
bot.help((ctx) => ctx.reply(helpMsg));

bot.use((ctx) => ctx.reply(ctx.update.message.text));

bot.launch();
