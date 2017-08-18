const config = require('dotenv').config()
const twilio = require('twilio')
const numbers = require('./numbers.json')

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

function setupMessagingRoutes (app) {
  app.post('/api/messaging/incomingSMS', (req, res, next) => {
    message = req.body
    let name = ''
    console.log('incoming sms', message)
    // Remove the from number from the list of numbers to forward to
    const filtered = numbers.filter((n) => { 
      // Set name of sender
      if (n.number === message.From) name = n.name
      return n.number !== message.From
    })

    // Forward message to each number
    filtered.forEach((n) => {
      client.messages.create({
        body: `(${name}) ${message.Body}`,
        to: n.number,
        from: message.To
      })
    })

    res.json({ status: 'good' })
    
  })
}

module.exports = (app) => {
  console.log('numbers', numbers)
  const filtered = numbers.filter((n) => { 
    console.log('number: ', n.number)
    return n.number !== '+17025094335' 
  })
  console.log('filtered', filtered)
  setupMessagingRoutes(app)
}
