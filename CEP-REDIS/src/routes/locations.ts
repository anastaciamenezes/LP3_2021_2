import { LocationsController } from '../controllers/LocationsController'
import { Request, Response, Router } from 'express'
import { Locations } from './../models/Locations'

const locationsCtrl: LocationsController = new LocationsController()
export const locationsRouter = Router()

locationsRouter.get('/:cep', async (req: Request, res: Response) => {
  const { cep } = req.params
  const response = await locationsCtrl.findByCep(cep)
  const status = response.message ? 400 : 200
  return res.status(status).json(response)
})