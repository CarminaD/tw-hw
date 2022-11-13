function addTokens(input, tokens){

    let checkString=function(array){
        for(let i=0;i<array.length;i++){
            if(typeof array[i].tokenName==='string')
            {
                return true;
            }
        }
        return false;
       }
    
   if(typeof input==='string'||(input instanceof String))
   {
    if(input.length>=6){
        if(checkString(tokens)===true){
           
                let modified=input
                
                if(modified.indexOf('...')!==-1){
                    let nr=0;
                    while(nr<tokens.length){
                    modified=modified.replace('...', '${'+tokens[nr].tokenName+'}');
                    nr++
                    }
                    return modified;
                }
                else {
                    return input;
                }
            
        }
        
        else {
            throw new Error("Invalid array format");
        } 
    }
    else {
        throw new Error("Input should have at least 6 characters");
    }
   }
   else {
    throw new Error('Invalid input');
   }
}

const app = {
    addTokens: addTokens
}

module.exports = app;