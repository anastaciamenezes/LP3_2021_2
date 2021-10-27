import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'

import { connectToDB } from './config/db'
/**
 * Cria uma aplicação com express
 */
export const app = express()

/**
 * Libera o acesso aos serviços
 */
app.use(cors())

/**
 * Habilitar os logs avançados
 */
app.use(logger('dev'))

/**
 * Habilitar respostas ao formato Json
 */
app.use(express.json())

connectToDB()