
var gasolina = 5.67;
var etanol = 4.50;
var diesel = 5.70;
var valorColocado = 15;
var escolha_cliente = 'E';

console.log("----------------------------------------------------------------------------");


switch (escolha_cliente) {

    case 'G':
        var q_litros = valorColocado / gasolina;
        console.log(`\nVALOR COLOCADO: R$${valorColocado}`);
        var q_litrosDecimal = q_litros.toFixed(2);
        console.log(`LITROS: ${q_litrosDecimal}`);
        break;

    case 'E':
        var q_litros = valorColocado / etanol;
        console.log(`\nVALOR COLOCADO: R$${valorColocado}`);
        var q_litrosDecimal = q_litros.toFixed(2);
        console.log(`LITROS: ${q_litrosDecimal}`);
        break;

    case 'D':
        var q_litros = valorColocado / diesel;
        console.log(`\nVALOR COLOCADO: R$${valorColocado}`);
        var q_litrosDecimal = q_litros.toFixed(2);
        console.log(`LITROS: ${q_litrosDecimal}`);
        break;

    default:
        console.log("\nVALOR NÃO ENCONTRADO!");
        console.log("SELECIONE: (G) PARA GASOLINA | (E) PARA ETANOL | (D) PARA DIESEL");







}
