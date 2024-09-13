function pinValidation(pin){
    const regex = /[^0-9]/;
    if(pin.length<4 || pin.length>6){
        return false;
    }else if(!regex.test(pin)){
        return true;
    }else{
        return false;
    }


}




module.exports = {pinValidation};














