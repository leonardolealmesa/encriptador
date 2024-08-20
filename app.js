document.getElementById('textusuario').value="";

function verificarDeEncriptar(){


  let textoDeUsuairo=document.getElementById('textusuario').value;




    if  (textoDeUsuairo.length !=0 ){
    let textocifrado=textoDeUsuairo
    .replace(/e/gi,"enter") 
    .replace(/i/gi,"imes") 
    .replace(/a/gi,"ai") 
    .replace(/o/gi,"ober") 
    .replace(/u/gi,"ufat");
    console.log(textoDeUsuairo);
    console.log(textocifrado); 

            document.getElementById('texto').value= textocifrado
            document.getElementById('titulo').style.display="none";
            parrafo.style.display = "none"; 
            document.getElementById('textusuario').value="";
            document.getElementById('imagen').style.display="none";
            document.getElementById("copiar_texto").style.display="block";
            document.getElementById("contendeor__salida").style.display="block";
            document.getElementById("cotenedor__estetica").style.display="block";
    }
    else{
    document.getElementById('titulo').textContent = "Ningun mensaje Fue enviado";
           parrafo.textContent = "ingresa el texto que desea encriptar o desencriptar"; 
            document.getElementById('imagen').style.display="block";
            document.getElementById("copiar_texto").style.display="none";
            document.getElementById("contendeor__salida").style.display="none";
            document.getElementById("cotenedor__estetica").style.display="none";
            parrafo.style.display="block"
        
    }

}

function verificarDesencriptar(){

    let textoDeUsuairo=document.getElementById('textusuario').value;
    let resultado=document.getElementById('texto').value;
 
 
    
 
 
     if  (textoDeUsuairo.length !=0 ){

      let textocifrado=textoDeUsuairo
     .replace(/enter/gi,"e") 
     .replace(/imes/gi,"i") 
     .replace(/ai/gi,"a") 
     .replace(/ober/gi,"o") 
     .replace(/ufat/gi,"u");
     console.log(textoDeUsuairo);
     console.log(textocifrado); 
 
        document.getElementById('texto').value= textocifrado
        document.getElementById('titulo').textContent = "";
        parrafo.textContent = ""; 
        document.getElementById('textusuario').value="";
        document.getElementById('imagen').style.display="none";
        document.getElementById("copiar_texto").style.display="block";
        document.getElementById("contendeor__salida").style.display="block";
        document.getElementById("cotenedor__estetica").style.display="block";
     }
     else{
            document.getElementById('titulo').textContent = "Ningun mensaje Fue enviado";
            parrafo.textContent = "ingresa el texto que desea encriptar o desencriptar"; 
             document.getElementById('imagen').style.display="block";
             document.getElementById("copiar_texto").style.display="none";
             document.getElementById("contendeor__salida").style.display="none";
             document.getElementById("cotenedor__estetica").style.display="none";
             parrafo.style.display="block"
     }



}

function copiar(){

    let texto= document.getElementById("texto").value;
    console.log("texto a copiar", texto);

    //texto.select();
    //texto.setSelectionRange(0,texto.value.length);


    //let textarea = document.createElement("textarea");

    //textarea.value =texto.value;
    //document.body.appendChild(textarea);
    //textarea.select();
    //textarea.setSelectionRange(0,textarea.value.length);

   
    //console.log("texto a copiar",textarea.value);
    
    navigator.clipboard.writeText(texto).then(function(){
            let confirmacion =document.getElementById("confirmacion");
            confirmacion.style.display="block";
            
            setTimeout(function(){

                confirmacion.style.display= "none";

            },2000);

    });
   // document.body.removeChild(textarea);
   
}