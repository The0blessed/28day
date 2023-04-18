var nomes = ["Jussimar", "Graciete", "José", "Oswaldo"];




const exibirNomes = () =>{

    for(let i = nomes.length - 1; i >= 0; i--){

        document.getElementById("series").insertAdjacentHTML("afterbegin", "<p>" + i + " - " + nomes[i] + "</p>");

    }

}




const receberNomes = () =>{

    document.getElementById("series").innerHTML = "";

    nomes.unshift(document.getElementById("nome").value);

    document.getElementById("nome").value = "";




    exibirNomes();

}




exibirNomes();