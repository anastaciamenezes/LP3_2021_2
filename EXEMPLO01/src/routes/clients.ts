import { Request, Response, Router } from "express"
import { ClientController } from "../controllers/ClientController"
import { Client } from "../models/Client"

export const clientsRouter = Router()
const clientCtrl = new ClientController()
/* Todas as vezes que for salvar um, eu incremento
*/
let idCounter = 1

clientsRouter.post('/', (req: Request, res: Response) => {
  /*const name = req.body.name
  const phone = req.body.phone*/

  /**
   * Associação por desestruturação
   */
  const { name, phone } = req.body
  const client = new Client(idCounter, name, phone)
  if (clientCtrl.save(client)) {
    idCounter++
    /**
     * Estatus 201 - significa Created (criado)
     * Se ele conseguiu salvar é porque não tinha nenhum cliente igual
     * Pode devolver um json para o frontend uma mensagem de resposta
     */
    return res.status(201).json({message: 'Client created'})
  } else {
    /**
     * 403 = Já existe
     * 409 = Conflit (causa conflito)
     * Caso contrário já tem um cliente com este id
     */
    return res.status(409).json({
        message: 'A client with this is already exists'
    })
  }
})
  /*
  * Lista tudo e não altera nada. Usar o método GET.
  * Quando não se específica o status é porque por padrão é o 200 (res.status(200))
  */
  clientsRouter.get('/', (req: Request, res: Response) => {
      return res.json({ clients: clientCtrl.findAll() })
  })

/*
* Atualizar dados. Usar método PUT.
*/
  
clientsRouter.put('/clients/unico/id', (req: Request, res: Response) => {
  const { id } = req.body
  const idCliente: number = parseInt(id)
  const clienteAtualizado = idCliente
  return res.status(202).json({
    message: "Dados do cliente alterado com sucesso!"
  })

  clientsRouter.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const idClient: number = parseInt(id)
    const clientRemovido = idClient
    res.status(404).json({
      message: "O Cliente foi removido"
    })
  })
})