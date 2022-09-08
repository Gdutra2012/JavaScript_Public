//CALCULADORA

var vlr1;
var vlr2;
var total;
var op;

//ATRAVÉS DESSE COMANDO QUE O USUÁRIO CONSEGUE INTERAGIR COM O CÓDIGO.
var interacao = require(`prompt-sync`)({ sigint: true });

vlr1 = interacao(`DIGITE O PRIMEIRO VALOR: `);
op = interacao(`ESCOLHA: (+) PARA ADIÇÃO | (-) PARA SUBTRAÇÃO | (*) PARA MULTIPLICAÇÃO | (/) PARA DIVISÃO | (pot) PARA POTENCIAÇÃO | (RAD) PARA RADICIAÇÃO: `);
vlr2 = interacao(`DIGITE O SEGUNDO VALOR: `);

switch (op) {

    case '+':
        //FOI PRECISO TRANSFORMAR AS VARIÁVEIS EM VALOR NUMÉRICO, POR ISSO FOI USADO O 'parseInt'.
        //SEM O 'parseInt', OS VALORES ESTAVAM CONCATENANDO, E NÃO SOMANDO (EXEMPLO: 3 + 3 ESTAVA DANDO 33 AO INVÉS DE 6).
        total = parseFloat(vlr1) + parseFloat(vlr2);
        console.log(`TOTAL: ${total}`);
        break;

    case '-':
        //MÉTODO DE SUBTRAÇÃO CASO O USUÁRIO ESCOLHA O SINAL DE "-"
        total = vlr1 - vlr2;
        console.log(`TOTAL: ${total}`);
        break;

    case '*':
        //MÉTODO DE MULTIPLICAÇÃO CASO O USUÁRIO ESCOLHA O SINAL DE "*"
        total = vlr1 * vlr2;
        console.log(`TOTAL: ${total}`);
        break;

    case '/':
        //MÉTODO DE DIVISÃO CASO O USUÁRIO ESCOLHA O SINAL DE "/"
        total = vlr1 / vlr2;
        console.log(`TOTAL: ${total}`);
        break;

    case "pot":
        //MÉTODO DE POTENCIAÇÃO CASO O USUÁRIO ESCOLHA O SINAL DE "**"
        total = vlr1 ** vlr2;
        console.log(`Valor total: ${total}`);
        break;

    case "rad":
        //MÉTODO DE RADICIAÇÃO CASO O USUÁRIO ESCOLHA O SINAL DE "rad"
        total = vlr1 ** (1 / vlr2);
        console.log(`Valor total: ${total}`);
        break;    

    default:
        console.log(`ERRO!`);

}