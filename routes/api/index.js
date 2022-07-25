'use strict'

const token = process.env.TOKEN_META

module.exports = async function (fastify, opts) {
    fastify.get('/v1/webhook/meta', async function (request, reply) {
    fastify.log.info(JSON.stringify(request.query))
    
    // @ts-ignore
    if (request.query['hub.mode'] === 'subscribe' && request.query['hub.verify_token'] === token) {

        // @ts-ignore
        reply.send(request.query['hub.challenge']);

      } else {              
        reply.send(400)
      }
  })
}