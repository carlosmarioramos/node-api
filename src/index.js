const app = require('./app')

app.listen(app.get('port'), () => {
  console.log(`👍🏻 Server running on port ${app.get('port')}`)
  console.log(`🚀 http://localhost:${app.get('port')}`)
})