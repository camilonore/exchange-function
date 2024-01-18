const { app } = require('@azure/functions')

app.timer('ExchangeTmr', {
  schedule: '10 * * * * *',
  handler
})

const handler = (myTimer, context) => {
  context.log('Timer function processed request.')
}
