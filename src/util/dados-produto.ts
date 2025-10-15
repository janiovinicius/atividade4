import dados from '../dados/dados-produtos.json';
import Produto from '../modelo/produto';

export default class DadosProduto{

    public static dados():Array<Produto>{

        const json_para_string = JSON.stringify(dados);
        const json_para_objeto = JSON.parse(json_para_string);
        const listaProdutos:Array<Produto> = [];

        json_para_objeto.forEach( (element) => {

            let produto = new Produto(element.codigo, element.descricao, 
                element.marca,element.valor);

            listaProdutos.push(produto);
        });


        return listaProdutos;
    }
}