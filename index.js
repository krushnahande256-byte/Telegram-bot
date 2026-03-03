const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(express.json());

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

const PORT = process.env.PORT || 3000;

app.post("/webhook", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Bot running");
});

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Hello 🚀 Webhook working");
});

app.listen(PORT, () => {
  console.log("Server started");
});
