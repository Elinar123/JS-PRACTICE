//BUILD AN INVENTORY MANAGEMENT PROGRAM
let inventory = [];
addProduct({ name: "Apple", quantity: 10});
addProduct({ name: "Banana", quantity: 2});
addProduct({ name: "Apple", quantity: 10 });
addProduct({ name: "Banana", quantity: 5 });
addProduct({ name: "Orange", quantity: 8 });
addProduct({ name: "Flour", quantity: 7 });
addProduct({ name: "Grapes", quantity: 9 });
addProduct({ name: "Pineapple", quantity: 5 });

console.log(inventory);

function findProductIndex(product) {
    for(let i = 0; i < inventory.length; i++){
      if(inventory[i].name.toLowerCase() === product.toLowerCase()){
           return i;
      }
    }
    return -1;
}

function addProduct(obj) {
    const lowerCaseName = obj.name.toLowerCase();
    for(let i = 0; i < inventory.length; i++){
      if(obj.name.toLowerCase() === inventory[i].name.toLowerCase()){
          inventory[i].quantity += obj.quantity;
          console.log(`${obj.name.toLowerCase()} quantity updated`);
          return
      }
    }
    const newobj = {name: lowerCaseName, quantity: obj.quantity}
    inventory.push(newobj);
    console.log(`${newobj.name} added to inventory`);
}


// const test2 = findProductIndex("banana"); console.log(test2);

//console.log(inventory);

function removeProduct(item, quant) {
 const items = findProductIndex(item);

  if(items === -1){
    console.log(`${item.toLowerCase()} not found`);
    return;
  }
  if(quant > inventory[items].quantity){
    console.log(`Not enough ${item.toLowerCase()} available, remaining pieces: ${inventory[items].quantity}`);
    return;
  }
    inventory[items].quantity -= quant;
    console.log(`Remaining ${item.toLowerCase()} pieces: ${inventory[items].quantity}`);
  
  if(inventory[items].quantity === 0){
    inventory.splice(items, 1);
  }

}


