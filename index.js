var pdf = require("html-pdf");

var nomeDoUsuario = "Seu Nome";
var curso = "Desenvolvimento Sistemas";
var categoria = "TI";

var conteudo = `
<h1 style='color: red'> TURMA 3A<h1>
<hr>
<p>Modelo de PDF</p>
<p>Nome: ${nomeDoUsuario} </p>
<p>Curso: ${curso} </p>
<p>Categoria: ${categoria} </p>
<img src='https://img.freepik.com/vetores-gratis/empresario-elegante-usando-personagem-de-laptop_18591-82588.jpg?t=st=1725635753~exp=1725639353~hmac=5fafed5068302d2091f6a048f9d94acd37ff8d36d0b41a00e0de49a1770ef785&w=360'/>
`

pdf.create(conteudo,{}).toFile("./meupdf.pdf",(err, res) => {
if(err){
console.log("UM ERRO ACONTECEU: (");
}else{
console.log(res);
}
})