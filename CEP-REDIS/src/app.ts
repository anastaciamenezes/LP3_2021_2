import express from 'express'
import cors from 'cors'
import logger from 'morgan'

//Executa o script que faz a conexão com o Redis
import './db/config'

//Exportar o App
export const app = express()

//Adiciona middleware para habilitar coisas ao App
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


