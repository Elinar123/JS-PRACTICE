//BUILD A SMART PANTRY RESTOCKER
const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(raw){
    const prodArr = [];
  for(let data of raw){
     const arrSplit = data.split("|");
 
      let isDuplicate = false;
      for(let check of prodArr){
        if(arrSplit[0] === check.sku){
           isDuplicate = true;
        }
    }
      if(isDuplicate === true){
        continue;
      }

     const prodOb = {};
     prodOb.sku = arrSplit[0];
     prodOb.name = arrSplit[1];
     prodOb.qty = parseInt(arrSplit[2]);
     prodOb.expires = arrSplit[3];
    if(!arrSplit[4]){
      prodOb.zone = "general";
    }else{
      prodOb.zone = arrSplit[4];
    }
    prodArr.push(prodOb);
  }
   return prodArr;
 }


const arrShipment = parseShipment(rawData);
//console.log(arrShipment);

function planRestock(pantry, shipment){
    const arr = [];
    
    for(let item of shipment){
      const tempOb = {};
      let exist = false;
        for(let pItem of pantry){
          if(item.sku === pItem.sku){
           exist = true;
           break;
         }
        }
      if(item.qty <= 0){
         tempOb.type = "discard";
         tempOb.item = item;
      }else if(exist === true){
         tempOb.type = "restock";
         tempOb.item = item;
      }else{
        tempOb.type = "donate";
        tempOb.item = item;
      }

      arr.push(tempOb);
    }
    return arr;
}

const actions = planRestock(pantry, arrShipment);
//console.log(actions);

 function groupByZone(actions){
     const object = {};
     for(let action of actions){
       const zones = action.item.zone;
       if(!object[zones]){
           object[zones] = [];
       }
       object[zones].push(action);
     }
     return object;
 }

 const test = groupByZone(actions);
 //console.log(test);

  function clonePantry(pantry){
      const newPantry = [];

      for(let pantries of pantry){
        const itemCopy = {...pantries}
        newPantry.push(itemCopy);
      }
      return newPantry;
  }

const test2 = clonePantry(pantry);
console.log(test);