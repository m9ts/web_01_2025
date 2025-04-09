/*
Para introduzir a temporização de uma função em nosso software, vamos utilizar duas funções
nativas essenciais do JavaScript: setTimeout e setInterval. Essas funções permitem criar ações que
são executadas após um determinado período de tempo ou de forma intermitente. Um dos argumentos
fundamentais dessas funções é um callback, uma função que será chamada quando a temporização for
concluída.
*/

// Função setTimeout

console.log("Antes do setTimeout");

setTimeout (() => console.log("Executando o setTimeout"), 2000);

console.log("Depois do setTimeout");

/*
Podemos observar que as mensagens "Antes do setTimeout" e "Depois do setTimeout" são exibidas
em sequência, e somente depois é executada a mensagem "Executando o setTimeout" que está dentro do
callback. Esse comportamento é adequado e é possível devido ao delay de 2 segundos imposto pela função
setTimeout. No contexto do Node.js, que é single-threaded, esse processamento ocorre posteriormente,
respeitando a temporização estabelecida.
De forma semelhante, a setInterval funciona, com a diferença de que a função será executada em
intervalos de tempo determinados. Vejamos um exemplo:
*/

// Função setInterval

setInterval (() => console.log("Executando o setInterval"), 2000);
console.log("Depois do setInterval");

/*
Neste exemplo, a função passada para setInterval será executada a cada 2 segundos. 
Como esperado, a mensagem "Depois do setInterval" foi exibida primeiro
*/