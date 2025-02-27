// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloNombres = [];

function agregarAmigo(){
    let boxNombres = document.getElementById("amigo").value;
    let texto = document.getElementById("listaAmigos");
    if(document.getElementById("amigo").value==""){
        alert("Porfavor ingresa algun nombre");
    }else{
        arregloNombres.push(boxNombres);
        texto.innerHTML = arregloNombres;
        document.getElementById("amigo").value="";
    }
    
}

function sortearAmigo(){
   document.getElementById("listaAmigos").innerHTML="";
    let numeroAleatorio = Math.floor(Math.random()*arregloNombres.length);
    console.log(numeroAleatorio);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto sorteado es:" + arregloNombres[numeroAleatorio];
    
}
