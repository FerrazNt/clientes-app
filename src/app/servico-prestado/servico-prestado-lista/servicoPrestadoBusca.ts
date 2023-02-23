import { Cliente } from "../../clientes/cliente";

export class ServicoPrestadoBusca{
    id!:number;
    descricao!:string;
    valor!:number;
    dataServico!:string;
    cliente!: Cliente;
}