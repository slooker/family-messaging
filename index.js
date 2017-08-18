const restify = require('restify')
const routes = require('./routes')

const app = restify.createServer()

app.use(restify.plugins.bodyParser())
routes(app)

app.listen(9889, () => {
  console.log('%s listening at %s', app.name, app.url)
})
