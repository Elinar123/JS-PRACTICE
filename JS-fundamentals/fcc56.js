//BUILT AN ALL-TRUE PROPERTY VALIDATOR
function truthCheck(collection, pre) {
  const isThere = collection.every(obj => obj[pre]);
  return isThere;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");