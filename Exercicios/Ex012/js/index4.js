let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const verifica_data_range
 = (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } 
else
 if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo = (
signo
, data) => {

    let 
ano
 = data.getFullYear();

    for ( const signo of signos ){

        
let data_inicio_signo
 = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        
let data_fim_signo
 = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }

    }

}

let data_app = new Date();

const 
nome_signo = retorna_signo(data_app)
;

console.log("O signo de hoje é: " + nome_signo);











const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
  ];
  
  itensOpcionais.map
  ( ( item ) => {
    console.log( 
  item.nome
   + ' - ' + 
  item.valor
   );
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  const itensOpcionais = [
      { nome: 'Pré som', valor: 800 },
      { nome: 'Conta-giros', valor: 500 },
      { nome: 'Desembaçador traseiro', valor: 1000 },
      { nome: 'Ar quente', valor: 1800 },
    ];
    
    itensOpcionais.map( ( item ) => {
      console.log( item.nome + ' - ' + item.valor);
    });










    const alunos = [
        { nome: "José", av1: 10, av2: 5, av3: 7 },
        { nome: "Ana", av1: 1, av2: 10, av3: 10 },
        { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
        { nome: "Diego", av1: 10, av2: 2, av3: 8 },
      ];
      
      const qntAlunos = alunos.length;
      
      const mediaTurmaAv1 = alunos.reduce((total, aluno) => {
        return total + aluno.av1;
      }, 0);
      
      console.log(mediaTurmaAv1 / qntAlunos);












      const itensOpcionais = [
        { nome: 'Pré som', valor: 800 },
        { nome: 'Conta-giros', valor: 500 },
        { nome: 'Desembaçador traseiro', valor: 1000 },
        { nome: 'Ar quente', valor: 1800 },
      ];
      
      const valorTotal = 
      itensOpcionais.filter
      ( ( total, item ) => {
          
      return total + item
       ;
      }, 0);
      
      console.log('R$ ' + valorTotal.toFixed(2));












      const itensOpcionais = [
        { nome: 'Pré som', valor: 800 },
        { nome: 'Conta-giros', valor: 500 },
        { nome: 'Desembaçador traseiro', valor: 1000 },
        { nome: 'Ar quente', valor: 1800 },
      ];
      
      const valorTotal = 
      itensOpcionais.reduce
      ( ( total, item ) => {
          
      return total + item.valor;
      }, 0);
      
      console.log('R$ ' + valorTotal.toFixed(2));











      const itensCarrinho = [
        { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
        { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
        { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
        { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
      ];
      
      const totalAPagar = 
      itensCarrinho.reduce
      ( function(
      total, itemCarrinho
      ) {
        const valorItem = itemCarrinho.qnt * itemCarrinho.valor;
      
        
      return
       total + valorItem;
      }, 0);
      
      
      console.log(totalAPagar);











      const chuvaDeMeteoros = [
        { nome: 'Alfa Centaurídeos', declinacao: -59 },
        { nome: 'Gama Normídeos', declinacao: -50 },
        { nome: 'Pi Pupídeos', declinacao: -45 },
        { nome: 'Líridas', declinacao: 34 },
        { nome: 'Eta Aquáridas', declinacao: -1 },
        { nome: 'Eta Líridas', declinacao: 44 },
        { nome: 'Bootídeos de Junho', declinacao: 48 },
        { nome: 'Alfa Capricornídeos', declinacao: -10 },
        { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
        { nome: 'Piscis Austrinídeos', declinacao: -30 },
        { nome: 'Perseidas', declinacao: 58 },
      ];
      
      function imprimirChuva(chuva) {
        const hemisferio = chuva.declinacao >= 0 ? 'Norte' : 'Sul';
        console.log('Chuva: ' + chuva.nome + ' Hemisfério: ' + hemisferio);
      }
      
      chuvaDeMeteoros.forEach(imprimirChuva);
      









      const noticias = [
        'Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ',
        'Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ',
      ];
      const novaNoticia = 'Among Us ganhará tradução em português do Brasil ';
      
      noticias.shift()
      ;
      noticias.push(novaNoticia)
      ;
      
      for (const noticia of noticias) {
        console.log(noticia);
      }











      const jogos = [
        { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
        { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
        { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
        { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
        { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
        { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
      ];
      
      jogos.array.forEach(element => {
      });((jogo) => {
        console.log(jogo.nome);
      });













      Armazene na variável 'receitasRapidas' apenas as receitas que demoram menos de 10 minutos de preparo. Em seguida imprima os nomes das receitas ('receitasRapidas') no terminal.

const receitas = [
  { nome: 'Misto quente', tempoPreparo: 5 },
  { nome: 'Omelete', tempoPreparo: 10  },
  { nome: 'Pão de queijo', tempoPreparo: 20  },
  { nome: 'Pizza', tempoPreparo: 60 },
  { nome: 'Hamburguer', tempoPreparo: 60 },
];

const receitasRapidas = 
receitas.filter
( receita => receita.tempoPreparo <= 10);

for
 (const receita 
of receitasRapidas
) {
  console.log(receita.nome);
}















const tecnologias = [ "PHP", "Flutter", "HTML", "CSS", "C#", "React Native" ];

function imprimeStack(tec) {
  switch (tec) {
    case "HTML":
    case "CSS":
      console.log('Front-end');
      break;

    case "C#":
    case "PHP":
      console.log('Back-end');
      break;

    case "Flutter":
    case "React Native":
      console.log('Mobile');
      break;

    default:
      console.log('Tecnologia não encontrada');
      break;
  }
}

tecnologias.forEach(imprimeStack);













const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
  ];
  
  const valorTotal = 
  itensOpcionais.reduce
  ( ( total, item ) => {
      
  return total + item.valor
   ;
  }, 0);
  
  console.log('R$ ' + valorTotal.toFixed(2));














  Crie um código para percorrer o array 'alunos' e retornar apenas os alunos que possuem a média maior ou igual a 7. Em seguida, percorra o array 'aprovados' para imprimir os nomes dos alunos.

const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

const aprovados = 
alunos.reduce
( aluno => {
  const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;

  return (
media
 >= 7);
});

aprovados.forEach
( (aluno) => console.log(aluno.nome) );















Imprima os meses abreviados (variável 'mesesAbreviados'). Crie o array 'mesesAbreviados' 
que possui a mesma quantidade de elementos do array 'meses'. Utilize a função 'abreviar' 
para que os elementos do array 'mesesAbreviados' tenham apenas três letras.

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

function abreviar (mes) {
  return mes.substr(0,3)
};

const mesesAbreviados = 
meses.map(abreviar)
;

mesesAbreviados.forEach
( mes => {
  console.log(mes);
});






const produtos = [
    { id: 1, nome: 'Açúcar', ativo: true, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', ativo: true, valor: 2.50 },
  ];
  
  let nomesProdutos = produtos.reduce( (resultado, produto) => {
    return resultado + produto.nome + ', ';
  }, "" );
  
  console.log(nomesProdutos);














  const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  const totalVolume = itensCarrinho.
  reduce
  ( (total, itemCarrinho) => {
    
  return
   ( 
  total + itemCarrinho.qnt
   );
  }, 0);
  
  
  console.log(totalVolume);










  Crie a variável 'hoje' que possui a data atual do sistema. Depois altere a data para 20 de Fevereiro de 1998.

const hoje = 
new Date()
;

hoje.
setFullYear
(1998);
hoje.
setMonth
(1);
hoje.
setDate
(20);

console.log( hoje );






const alunos = [
    { nome: "José", av1: 10, av2: 5, av3: 7 },
    { nome: "Ana", av1: 1, av2: 10, av3: 10 },
    { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
    { nome: "Diego", av1: 10, av2: 2, av3: 8 },
  ];
  
  const aprovados = alunos.filter(aluno => {
    const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;
    return media >= 7;
  });
  
  aprovados.forEach(aluno => console.log(aluno.nome));





  const verifica_tamanho_login = (login) =>
{

    if( login.length > 0 ){
        return true;
    } else {
        return false;
    }

}

export default verifica_tamanho_login
;













function celsius_fahrenheit(temperatura_celsius) {
    let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    return temperatura_fahrenheit;
  }

















  const retorna_media = (nota_1, nota_2) => {

    let media = (
nota_1
 + nota_2) / 2;
    
return media;


}

let 
media_aluno =  retorna_media
 (9, 8);
console.log("A média do aluno é: " + media_aluno);








let nome_completo = " Carlos Aguiar Mendonça    ";
nome_completo = nome_completo.trim();


console.log
(nome_completo);









import soma_numeros from
 './funcoes/funcoes.js';

let numero_1 = 8;
let numero_2 = 4;

const soma = 
soma_numeros
(numero_1, numero_2);
const 
subtracao
 = subtracao_numeros(numero_1, numero_2);

console.log("A soma entre os números é: " + soma);
console.log("A subtração entre os números é: " + subtracao);








import { soma_numeros, subtracao_numeros } from
 './funcoes/
funcoes.js
';

let 
numero_1
 = 8;
let numero_2 = 4;

const soma = soma_numeros(numero_1,
numero_2
);
const subtracao = subtracao_numeros(numero_1, numero_2);

console.log
("A soma entre os números é: " 
+ soma
);
console.log
("A subtração entre os números é: " 
+ subtracao
);








const 
verifica_paridade
 = (numeros) => {

    for( const 
numero of numeros
  ){

        if( numero % 2 == 0 ){
            console.log("O número " + numero + " é par");
        } else {
            console.log("O número " + numero + " é ímpar");
        }

    }

}
export default verifica_paridade;















Preencha as lacunas abaixo de modo que todos os elementos de "numeros" sejam impressos.

const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]

digite

 
digite
(numero);
}











import
 colecao_signos 
from
 './dados/dados.js';
import
 retorna_signo 
from
 './funcoes/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(
colecao_signos, data_app
);

console.log
("O signo de hoje é: " + nome_signo);




import calculaSubtracao from "./calculadora.js"

let x = 10;
let y = 8;

let resultado = calculaSubtracao(x, y);

console.log(resultado);

index.js (camada de exibição)

function calculaSubtracao(x, y)

{
    let diferenca = x - y;
    return diferenca;
}

export default calculaSubtracao;












const converteCelsiusParaFahrenheit = (celsius) => (celsius * 1.8) + 32;
const converteCelsiusParaKelvin = (celsius) => celsius + 273.15;
const converteFahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

export {converteCelsiusParaFahrenheit, converteCelsiusParaKelvin, converteFahrenheitParaCelsius};

















let listaJogos = [];

listaJogos.push("Super Mario World");
listaJogos.push("The Last of Us");
listaJogos.push("Gears of War");

listaJogos.forEach(function(jogo) {
  console.log(jogo);
});









Complete o código da aplicação que retorna o dia da semana atual:

- Deve ser utilizado as funções nativas do Date para identificar o dia da semana.
- O dia da semana deve ser retornado em texto utilizando o array diasDaSemana.

function retornaDiaSemana()

{
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    let data = 
new Date()
;
    let dia = data.
getDay()
;

    return 
diasDaSemana[dia]
;
}

let semana = retornaDiaSemana();

console.log("Hoje é "+semana);














Carros da Fiat
Complete o código a seguir para que sejam retornados apenas os carros da Fiat:

const carros = [
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
  { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

export
 default carros;

dadosCarros.js

function retornarCarroFiat
(carro) {
    return (
carro
);
}

export
 default retornarCarroFiat;


import carros from
 './dadosCarros.js';
import retornarCarroFiat from
 './retornaCarros.js';

const carrosFiat = carros.
filter(retornarCarroFiat)
;

console.log(carrosFiat);

















Séries do Disney+
Complete o código para que ao ser executado ele retorne apenas as séries da Disney+:

let series = [
    {nome: 'Loki', servico: 'Disney+'},
	{nome: 'Friends', servico: 'HBO'},
	{nome: 'Superman & Lois', servico: 'HBO'},
	{nome: 'WandaVision', servico: 'Disney+'},
];

exeport default series
;

series.js

function retornaSeriesDisney
(serie)
{
	return (
series
 == 'Disney+');
}

function retornaSeriesHBO 
(serie)
{
	return (
series
 == 'HBO');
}

export
 {retornaSeriesDisney, retornaSeriesHBO};

retornaSeries.js

import series from
 './series.js';
import {retornaSeriesDisney, retornaSeriesHBO} from 
 'retornaSeries.js';

let servico = 'Disney';
let retornaSeries = [];

switch
(servico)
{
    
case
 'Disney':
        retornaSeries = series.
filter(retornaSeriesDisney)
;
        break;
    
case
 'HBO':
        retornaSeries = series.
filter(retornaSeriesHBO)
;
        break;
}

retornaSeries.
forEach
(serie => {
	console.log(serie.nome);
});




















Livros
Complete o código abaixo para que ele retorne apenas os livros do autor Makoto Shinkai.

- Todos os arquivos estão no mesmo diretório;
- utilizar import;
- utilizar export default.

let livros = [
    {titulo: 'Tenki no ko', autor: 'Makoto Shinkai'},
    {titulo: 'Toradora', autor: 'Yuyuko Takemia'},
    {titulo: 'Kimi no na wa', autor: 'Makoto Shinkai'},
    {titulo: 'A silent voice', autor: 'Yoshitoki Oima'},
    {titulo: '5 Centímetros por segundo', autor: 'Makoto Shinkai'}
];

export default livros
;

dadosLivros.js

function verificaAutor(livro)
{
    
return livro.autor == 'Makoto Shinkai'
;
}

export default verificaAutor
;

filtraAutor.js

import livros from
 './dadosLivros.js';
import verificaAutor from './filtraAutor.js'
;

let livrosMakotoShinkai = livros.filter(verificaAutor);

livrosMakotoShinkai.forEach
(livro => {
    console.log(livro.titulo);
});

index.js