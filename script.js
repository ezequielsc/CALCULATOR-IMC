
const calc = document.getElementById ('calc');


function imc(){
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');
     
    if(nome !== '' && altura !=='' && peso !== ''){
        
        const valorimc = (peso/ (altura*altura)).toFixed(2);
        
        let classificacao='';
    
        if (valorimc <18.5){
            classificacao = ' under weight!';
        }else if (valorimc <25){
            classificacao = ' at ideal weight. Congratulations!';
        }else if(valorimc <30){
            classificacao = ' a little overweight!';
        }else if (valorimc <35){
            classificacao = 'with grade I obesity';
        }else if (valorimc <40){
            classificacao = 'with grade II obesity';
        }else{
            classificacao = 'with morbid obesity. CAREFUL!';
        }
        resultado.textContent =`${nome} your BMI is ${valorimc} and you are ${classificacao}`;
    }
    else{
        resultado.textContent ='Fill in the fields!';
    }
}


calc.addEventListener('click', imc);