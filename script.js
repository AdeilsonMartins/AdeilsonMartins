const texto = "JUNIOR MARTINS";
const elemento = document.getElementById("nome");

let index = 0;

function digitarTexto() {
  elemento.textContent = texto.slice(0, index++);
  
  if (index > texto.length) {
    index = 0;
  }
}

setInterval(digitarTexto, 200); // Ajuste a velocidade da digitação conforme necessário