import Produto from "../modelo/produto";

export default interface IRepositorioProduto {
    listarTodos():Array<Produto>;
    buscarPorCodigo(codigo:number): Produto;
    salvar(produto:Produto): void;
    atualizar(codigo:number, produto:Produto): void;
    excluir(codigo:number): void;
}