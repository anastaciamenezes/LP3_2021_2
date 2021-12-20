import { API_URL } from './../config'
import { Locations } from './../models/Locations'
import { redisClient } from './../db/config'
import axios from 'axios'

export class LocationsController {
  
  async findByCep(cepQuery: string): Promise<Locations | any> {
    const value: string = await redisClient.get(cepQuery)
    console.log(value)
    if (value) {
      const locations: Locations = JSON.parse(value)
      return locations
    } else {
      const url = API_URL.replace('{CEP}', cepQuery)
      try {
        const response = await axios.get(url)
        if (response.status == 200) {
          const { cep, logradouro, complemento, bairro, localidade, uf } =
            response.data
          const locationsObj: Locations = {
            cep,
            logradouro,
            complemento,
            bairro,
            localidade,
            uf,
          }

          await redisClient.set(cepQuery, JSON.stringify(locationsObj))

          return locationsObj
        } else {
          return { message: 'Invalid cep' }
        }
      } catch (error) {
        return { message: 'Invalid cep' }
      }
    }
  }
}