import { createClient} from 'redis'

/**
 * Abre conexão com redis
 * Fecha conexão com o BD
 * lê registro chave e valor, neste caso o CEP
 * Função set grava uma nova chave
 * Função get retorna o valor da chave
 */
export const redisClient = createClient()
redisClient.connect().then(
    async () => {
    console.log('App connected to Redis')
        await redisClient.set('academica', 'Anastacia Menezes')
    console.log(
        await redisClient.get('academica'))

})

process.on('SIGINT', () => {
    redisClient.disconnect()
    console.log('App disconnected from Redis')
})