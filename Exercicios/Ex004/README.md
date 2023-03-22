
## Comando JavaScript NodeJs

- tiFixed(2)
- toFixed(2).replace('.' ',')
- toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})


# Pratica 

> n1 = 1545.5
1545.5
> n1.toFixed(2)
1545.50


>n1.toFixed(2).replace('.' , ',')
1545,50

>n1.toFixed(2).replace('.' , '..')
1545..50


>n1.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
R$ 1,545.50


>n1.toLocaleString('pt-BR' , {style: 'currency' , currency: 'USD'})
US$ 1,545.50
