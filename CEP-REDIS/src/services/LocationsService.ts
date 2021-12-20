import { createClient } from "redis";

export const redisClient = createClient()
export class cepService {
  //redisClient.connect().then(
  const value = JSON.stringify(locationObj)
    redisClient.set(cep, value)
  
  get Cep(cep , value) {
    return this.http.get<cep>(`https://viacep.com.br/ws/79200000/json`);
}
  
redisClient.get(cep)
  // Converte o valor (string) de volta para um objeto de endereço
  //const locationObj = JSON.parse(this.Cep)
  const locationObj = JSON.parse(this.value)


function getCep(cep: any, value: string) {
  throw new Error("Function not implemented.");
}

