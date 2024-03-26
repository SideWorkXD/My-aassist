// Modified by BIlloXD

const client = require("../index");
const Discord = require(`discord.js`);
const chalk = require('chalk');
const simplydjs = require("simply-djs");

let statuses = [
  "Follow ig.billo",
]
let e = statuses.length

function status() {
  i = Math.floor(Math.random() * (e))
  client.user.setActivity(statuses[i],
    {
      type: "WATCHING",
    });
}

client.on("ready", async () => {
  simplydjs.connect(process.env.MONGO)

  setInterval(status, 3000)

  console.clear()
  console.log(chalk.bgBlack(chalk.greenBright(`═════════════════════════════════════════════`)));
  console.log(chalk.magenta(`
  Modified by BilloXD | Developed by BilloXD
  `))
  console.log(chalk.bgBlack(chalk.magentaBright(`═════════════════════════════════════════════`)));
  console.log(chalk.yellowBright("BilloXD | Online And Fully Functional"))
  console.log(chalk.bgBlack(chalk.yellowBright(`═════════════════════════════════════════════`)))

  console.log(chalk.cyanBright(`BilloXD | Node: ${process.version}
  BilloXD | Discord.js: ${Discord.version}
  BilloXD | Connected as: ${client.user.username}
  BilloXD | ID: ${client.user.id}
  BilloXD | Owner: ⍟ ・🜲 Bilal`));
  console.log(chalk.bgBlack(chalk.cyanBright(`═════════════════════════════════════════════`)))
  console.log(chalk.red(`BilloXD | Currently watching ${client.guilds.cache.size} Servers`));
  console.log(chalk.bgBlack(chalk.red(`═════════════════════════════════════════════`)));
})

// loading database
require('../handlers/Database')(client)

client.guilds.cache.forEach(async (guild) => {
  await client.updateembed(client, guild)
});