//perguntar a idade pelo prompt...
let age = parseInt(prompt("Qual sua idade?"))
//converter idade em segundos...
let ageInSeconds = age*365*24*60
//mostrar com document.write
document.write("Em seus, " + age + "anos, se passaram " + ageInSeconds + " segundos! ")

