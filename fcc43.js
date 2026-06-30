//IMPLEMENTED A DNA PAIR GENERATOR
function validateDna(check){
    const dnaBase = "ATCG"
    for(let i=0;i<check.length;i++){
      let isValid = dnaBase.includes(check[i]);
      if(!isValid){
 return {
          valid: true,
          invalidBase: check[i]
        };
      }
    }
 return  {
          valid: false,
          invalidBase: null
        };
}



function pairElement(arg) {
    let isInvalid = false;
    let final = [];
    const test = arg.split("");
    let validation = validateDna(test);
      if(validation.valid === true){
        return `Invalid base found: ${validation.invalidBase}`;
      }
    for(let i=0;i<test.length;i++){
       let chunk = [];
       let ind = test[i];
       switch(ind){
        case "A":
          chunk.push(ind, "T");
          break;
        case "T":
          chunk.push(ind, "A");
          break;
        case "C":
          chunk.push(ind, "G");
          break;
        case "G":
          chunk.push(ind, "C");
          break;
       }
        final.push(chunk);

    }
      return final;

}



const test = pairElement("ATCG");
console.log(test);