//BUILD A PASSWORD GENERATOR APP
function generatePassword(len) {
  const uniPass = [];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let arrOfchar = chars.split("");
  for(let i = 0; i < len; i++){
    let targetInd = Math.floor(Math.random() * chars.length);
    uniPass.push(chars[targetInd]);
  }
  const finalPass = uniPass.join("");
  return finalPass;
}

const password = generatePassword(29);
console.log(`Generated password: ${password}`);