import { app } from './app'

//Aplicação rodando na porta 3001
const PORT = 3001

//Devolve o objeto de server
const server = app.listen(PORT, () => console.log(`App running on port ${PORT}`))

//Finalizando o App
process.on('SIGINT', () => {
    server.close()
    console.log('App finished')
})