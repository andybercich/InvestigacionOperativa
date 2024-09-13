
//No se como hacer el testing de esto profe :(

function bloodGame() {
    let friendRandom = ["RECEPTOR","DADOR"]
    const donantesCompatibles = {
        'A+': ['A+', 'A-', 'O+', 'O-'],
        'A-': ['A-', 'O-'],
        'B+': ['B+', 'B-', 'O+', 'O-'],
        'B-': ['B-', 'O-'],
        'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], 
        'AB-': ['A-', 'B-', 'AB-', 'O-'],
        'O+': ['O+', 'O-'],
        'O-': ['O-'] 
    };

    let randomBlood ;
    let randomType ;


    const prompt = require("prompt-sync")();
    let points = 0;
    let round = 1; 
    do{

        randomType = friendRandom[randomNumber(0,1)];
        randomBlood = donantesCompatibles["AB+"][randomNumber(0,7)];
        console.log("Estudiante, le toco el tipo de sangre "+randomBlood+ " de un "+ randomType);


        console.log("RONDA NUMERO ", round);
        
        
        if(randomType == "RECEPTOR"){
            let tryes = 3;
            let responseStudent = "";
            let accert = false;

            do{
                
                do{
                    
                    responseStudent = prompt("Ingresa el grupo sanguineo de un posible donante, para el tipo de sangre "+randomBlood+ " : ").toUpperCase();
                    if(!donantesCompatibles["AB+"].includes(responseStudent)){
                        console.log("NO HAS INGRESADO UN TIPO DE SANGRE VÁLIDO ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')")
                    }

                }while(!donantesCompatibles["AB+"].includes(responseStudent))
                    


                if(donantesCompatibles[randomBlood].includes(responseStudent)){
                    console.log("Muy bieeen estudiante, acertó!!!!")
                    accert = true;
                }else{
                    console.log("EL TIPO DE SANGRE INGRESADO, NO ES DEL POSIBLE DONANTE")
                    tryes--
                }


            }while(tryes>0 && !accert)
            if(accert){
                points++;
            }
        }else{

            let tryes = 3;
            let responseStudent = "";
            let accert = false;
            do{
                
                do{
                    
                    responseStudent = prompt("Ingresa el grupo sanguineo de un posible receptor, del tipo de sangre "+randomBlood+ " : ").toUpperCase();
                    if(!donantesCompatibles["AB+"].includes(responseStudent)){
                        console.log("NO HAS INGRESADO UN TIPO DE SANGRE VÁLIDO ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')")
                    }

                }while(!donantesCompatibles["AB+"].includes(responseStudent))

                console.log(donantesCompatibles[responseStudent])
                console.log(donantesCompatibles[responseStudent].includes(randomBlood))
                console.log(responseStudent)
                
                if(donantesCompatibles[responseStudent].includes(randomBlood)){
                
                    console.log("Muy bieeen estudiante, acertó!!!!")
                    accert = true;

                }else{
                    console.log("EL TIPO DE SANGRE INGRESADO, NO ES DE UN POSIBLE RECEPTOR")
                    tryes--
                }


            }while(tryes>0 && !accert)
            
            if(accert){
                points++;
            }

        }




        round++;
    }while(round>0)

}




function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;

}
console.log(bloodGame());
module.exports = {}