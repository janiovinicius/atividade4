import Produto from './modelo/produto';
import RepositorioProdutoImpl from './repositorio/impl/repositorio-produto-impl';

const repositorio = new RepositorioProdutoImpl();

//Lista todos os registros existentes
console.log("-------- Listar dados ------");
console.log(repositorio.listarTodos());

//Cria um novo registro
const incluirProduto = new Produto(
    repositorio.obterProximoId(), 
    "sorvete",
    "JJJ",
    17.50
);

//Salva o registo
console.log("-------- Salvar Produto ------");
repositorio.salvar(incluirProduto);
console.log(repositorio.listarTodos());

//Busca pelo Codigo
console.log("-------- Buscar por Codigo ------");
const buscaCodig = repositorio.buscarPorCodigo(2);
console.log(buscaCodig);

//Atualizar registro
console.log("-------- Atualizar Registro ------");
buscaCodig.marca = "NOVAMARCA";
buscaCodig.valor = 20.00;
repositorio.atualizar(buscaCodig.codigo, buscaCodig);
console.log(repositorio.listarTodos());

//Excluir registro
console.log("-------- Excluir Registro ------");
repositorio.excluir(2);
console.log(repositorio.listarTodos());