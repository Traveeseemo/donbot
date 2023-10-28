const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer

const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalXZ } = require('mineflayer-pathfinder').goals

const bot = mineflayer.createBot({
    host: 'OldSmp.mcserver.us',// minecraft server ip
    username: 'torsten.donfuer@gmail.com', // minecraft username
    version: "1.19.4",
    auth: 'microsoft' // for offline mode servers, you can set this to 'offline'
    // port: 25565,                // only set if you need a port that isn't 25565
    // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // password: '12345678'        // set if you want to use password-based auth (may be unreliable)
  })

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  mineflayerViewer(bot, { firstPerson: true, port: 3000 })

  const path = [bot.entity.position.clone()]
  bot.on('move', () => {
    if (path[path.length - 1].distanceTo(bot.entity.position) > 1) {
      path.push(bot.entity.position.clone())
      bot.viewer.drawLine('path', path)
    }
  })

  const mcData = require('minecraft-data')(bot.version)
  const defaultMove = new Movements(bot, mcData)
  bot.pathfinder.setMovements(defaultMove)
  bot.pathfinder.setGoal(new GoalXZ(2121084, 285607))
})