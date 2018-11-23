
var årtalfråga = ['När var d-dagen?','När anföll tyskland polen?','När anföll Tyskland norge och danmark?',
'När anföll tyskland frankrike via nederlenderna och belgien?','Tyskland anfaller sovjet',
'Japan anfaller pearl harbour','Tyskland förlorar ökenkriget. Slaget vid el-Almein',
'Tyska trupper besegras av röda armen. Slaget om stalingrad','Hitler begår själmord i en bunker i berlin',
'Tyskland kapitulerar','Usa släpper en atombomb över Hiroshima'];
var ställdafrågor = [];
var ställdafrågorår = [];
var ställdafrågordag = [];
var ställdafrågormånad = [];

var årsvar = ['1944','1939','1940','1940','1941','1941','1942','1943','1945','1945','1945'];
var dagsvar = ['6','1','9','10','22','7','27','2','30','7','6'];
var månadsvar = ['June','September','April','May','June','December','July','February','April','May','August'];

quizindex = Math.floor(Math.random() * årtalfråga.length);
additem(årtalfråga[quizindex]);

var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');
var yearSelect = document.querySelector('#year');


//detta är funtionen som skriver ut frågan
//text är värdet i arrayen på texten som ska stå
function additem(text){

    //rutan det ska stå i
    ruta = document.getElementById("frageruta");
    
    //skapar frågan
    fråga = document.createElement("p");
    fråga.innerText = text;

    //fråga blir en del av ruta
    ruta.appendChild(fråga);

}

document.getElementById('replay').addEventListener('click', function(){

    console.log('yeet');

    årtalfråga = ställdafrågor;
    ställdafrågor = [];

    årsvar = ställdafrågorår;
    ställdafrågorår = [];

    dagsvar = ställdafrågordag;
    ställdafrågordag = [];

    månadsvar = ställdafrågormånad;
    ställdafrågormånad = [];

    ruta.removeChild(fråga);
    additem(årtalfråga[quizindex]);

});

document.getElementById('klar').addEventListener('click', function(){

    if (monthSelect.value == månadsvar[quizindex]){
        if (daySelect.value == dagsvar[quizindex]){
            if (yearSelect.value == årsvar[quizindex]){

                console.log('correct');
                alert('ajamensan, rätt  svar!');


                ställdafrågor.push(årtalfråga[quizindex]);
                ställdafrågordag.push(dagsvar[quizindex]);
                ställdafrågormånad.push(månadsvar[quizindex]);
                ställdafrågorår.push(årsvar[quizindex]);


                console.log(årtalfråga);
                årtalfråga.splice(quizindex, 1);
                årsvar.splice(quizindex, 1);
                månadsvar.splice(quizindex, 1);
                dagsvar.splice(quizindex, 1);
                console.log(årtalfråga);
                
                //ruta.removeChild(fråga);

                if (årtalfråga.length >= 0){
                    quizindex = Math.floor(Math.random() * årtalfråga.length);

                    ruta.removeChild(fråga);

                    additem(årtalfråga[quizindex]);
                }else{
                    alert('hepp det var allt');


                };
                

            }else{

                console.log('incorrect');
                alert('det är fel rätt svar är ' + dagsvar[quizindex] +' '+ månadsvar[quizindex] + ' ' + årsvar[quizindex]);
        
            }

        }else{

            console.log('incorrect');
            alert('det är fel. Rätt svar är ' + dagsvar[quizindex] +' '+ månadsvar[quizindex] + ' ' + årsvar[quizindex]);
    
        }

    }else{

        console.log('incorrect');
        alert('det är fel. Rätt svar är ' + dagsvar[quizindex] +' '+ månadsvar[quizindex] + ' ' + årsvar[quizindex]);

    }


})


