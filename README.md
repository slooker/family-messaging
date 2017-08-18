# Family Messaging

This project was born out of a need for my son to be able to message both of his parents without using crappy MMS messaging that no one likes.

All this simple project does is forwards a message sent from your number to everyone else on this list.  It **will** charge you the SMS cost of one message per number on your list, so be aware of that.  For us it's only $0.0075 per message, so 1.5 cents each time we send a message to our number.

This requires a [Twilio](twilio.com) account and a twilio number.

## Setup

1. Create a `.env` file that has your twilio AccountSID and Authtoken in it.

```
TWILIO_ACCOUNT_SID=THISISMYSID
TWILIO_AUTH_TOKEN=THISISMYTOKEN
```

2. Copy `numbers-example.json` to `numbers.json` and edit your numbers and names in it
3. Run the server by typing `yarn start`
4. Setup your Twilio to use your newly setup server.  Go to your phone number page on [Twilio](twilio.com) and edit your settings like this: ![twilio setup image](http://i.imgur.com/96Uh1zY.png)
5. Send a message to your Twilio number from one of the numbers listed

