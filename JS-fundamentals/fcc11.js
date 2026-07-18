function emailmasker(email) {  
    const lastline = email.slice(1, email.indexOf("@") - 1);
    const ask = "*".repeat(lastline.length);
    const replace = email.replace(lastline, ask);
    return replace;
}

console.log(emailmasker("adrian.ranile@gmail.com"));