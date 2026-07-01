//IMPLEMENTED HTML ENTITY CONVERTER
function convertHTML(str) {
  let string = str;
  let newstr = "";
    for(let i=0;i<string.length;i++){
     let ind = string[i];
     switch(ind){
       case '&':
        newstr += "&amp;";
        break;
       case '<':
        newstr += "&lt;";
        break;
       case '>':
        newstr += "&gt;";
        break;
       case '"':
        newstr += "&quot;";
        break;
       case "'":
        newstr += "&apos;";
        break;
       default:
        newstr += ind;
       
        
     }
    }
    return newstr;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));