const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '2b2t.org', // minecraft server ip
  username: 'torsten.donfuer@gmail.com', // minecraft username
  version: '1.19.4',
  auth: 'microsoft' // for offline mode servers, you can set this to 'offline'
  // port: 25565,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // password: '12345678'        // set if you want to use password-based auth (may be unreliable)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})
// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

const { mineflayer: mineflayerViewer } = require('prismarine-viewer', version='1.18.2')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})
