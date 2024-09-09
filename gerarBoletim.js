var pdf = require("html-pdf");
var fs = require("fs");

var nomeDoUsuario = "Samuel Castro dos Santos";
var curso = "Desenvolvimento de Sistemas";
var materias = [
    { nome: "Lógica de Programação", nota: 8.5 },
    { nome: "Banco de Dados", nota: 9.0 },
    { nome: "Desenvolvimento Web", nota: 9.5 },
    { nome: "Projetos 02", nota: 10 },
    { nome: "Power BI", nota: 8.0 }
];

// Carrega a imagem SENAI.png e converte para base64
var imgBase64 = fs.readFileSync("SENAI.png", "base64");
var imgSrc = `data:image/png;base64,${imgBase64}`;

var conteudo = `
<h1 style='color: #4CAF50; text-align: center; font-family: Arial, sans-serif; font-size: 36px;'>
  Boletim Escolar - ${curso}
</h1>
<hr style='border: 1px solid #4CAF50;'>
<p style='font-size: 18px; font-family: Arial, sans-serif;'>
  Nome: <strong>${nomeDoUsuario}</strong>
</p>
<p style='font-size: 18px; font-family: Arial, sans-serif;'>Matérias Cursadas:</p>

<table style='width: 500px; border-collapse: collapse; font-family: Arial, sans-serif;'>
    <tr style='background-color: #f2f2f2; color: #333;'>
        <th style='border: 1px solid #ddd; padding: 12px; text-align: left;'>Matéria</th>
        <th style='border: 1px solid #ddd; padding: 12px; text-align: left;'>Nota</th>
    </tr>
    ${materias.map(materia => `
    <tr style='background-color: ${materias.indexOf(materia) % 2 === 0 ? "#f9f9f9" : "#fff"};'>
        <td style='border: 1px solid #ddd; padding: 12px;'>${materia.nome}</td>
        <td style='border: 1px solid #ddd; padding: 12px;'>${materia.nota}</td>
    </tr>`).join('')}
</table>

<p style='margin-top: 20px; font-family: Arial, sans-serif;'>
  <img src='${imgSrc}' style='width: 150px; height: auto;'/>
</p>
`;

pdf.create(conteudo, {}).toFile("./boletim.pdf", (err, res) => {
    if (err) {
        console.log("UM ERRO ACONTECEU: (");
    } else {
        console.log(res);
    }
});
