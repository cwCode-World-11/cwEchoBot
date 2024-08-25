// https://rizkyrajitha.hashnode.dev/send-messages-with-telegram-using-appwrite-functions

const { Telegraf } = require("telegraf");

const bot = new Telegraf("7126722358:AAEwnN3Pr71y6TCHS1jXh7yWyqa9wIshRx4");


const express = require("express")
const app = express();
app.get("/",(req,res)=>res.send("<h1>Hello World!</h1><h2>Open Your browser console.log</h2>"));
app.listen(3000,()=>console.log("Server is listening!!!"))



const startMsg = "You start this bot cwEchoBot\nSend any text to this bot and it will reply to you.\ndon't think so much just use and enjoy.";
bot.start((ctx) => ctx.reply(startMsg));

const helpMsg = "i bet you don't need tutorial or any help.\nit just echoing";
bot.help((ctx) => ctx.reply(helpMsg));

bot.use((ctx) => ctx.reply(ctx.update.message.text));

bot.launch();
