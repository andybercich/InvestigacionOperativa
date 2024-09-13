
function calculateLiters(time) {
    if(typeof time !== 'number'){
        throw new TypeError("TIME DEBE SER UN TIPO NUMBER")
    }
    else if(time<=0 ){
        throw new TypeError("TIME NO DEBE SER MENOR O IGUAL A 0")
    }else{

        return Math.floor(time*0.5)

    }

}

console.log(calculateLiters(7))
module.exports = {calculateLiters};