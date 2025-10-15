import DadosProduto from "../../util/dados-produto";
import IRepositorioProduto from "../repositorio-produto";
import Produto from "../../modelo/produto";

export default class RepositorioProdutoImpl implements IRepositorioProduto{
    

    private listaProdutos:Array<Produto> = [];
    
    constructor(){
        //Carrega as informações contidas no arquivo json
        this.listaProdutos = DadosProduto.dados();
    }

    public listarTodos():Array<Produto>{
        return this.listaProdutos;
    }

    public buscarPorCodigo(codigo:number): Produto {
        return this.listaProdutos.find(
            produto => produto.codigo == codigo
        );
    }

    public salvar(produto:Produto): void{
        this.listaProdutos.push(produto);
    }

    public atualizar(codigo:number, produto:Produto): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaProdutos.findIndex(
            produto => produto.codigo == codigo
        );

        //Atualiza o registro
        this.listaProdutos[indice] = produto;
    }

    public excluir(codigo:number): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaProdutos.findIndex(
            produto => produto.codigo == codigo
        );

        //Remove o registo do array
        this.listaProdutos.splice(indice, 1);
    }

    //Apenas para simular a chave incremental do banco de dados
    //Retorna o próximo valor do identificado para que não 
    //haja duplicidade de identificadores
    public obterProximoId(): number{
        
        if(this.listaProdutos.length == 0){
            return 1
        }else{
            //Obtém o último registro do array
            let ultimoRegistro = this.listaProdutos[
                this.listaProdutos.length - 1
            ];

            //Incrementa o identificador 
            //para ser usado um novo registro
            return ultimoRegistro.codigo + 1;
        }
    }
}