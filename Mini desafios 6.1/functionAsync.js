function printDouble(number, result){
  const ms = Math.floor(Math.random() * 100) + 1
  const double = number * 2
    return new Promise((resolve) => {
      setTimeout(() => { resolve(double + result)},ms)}
  )
}
/*  ========= Usando encadeamento .then ======
   function imprimeValor (value) {
      console.log(value)
 }
 printDouble(33).then(imprimeValor)  */

 async function printAll(){

  let result;
   result = await printDouble(5,2) 
  console.log(result)
   result = await printDouble(10, result)
  console.log(result)
   result = await printDouble(22, result)
  console.log(result)
   result = await printDouble(1, result)
  console.log(result)
   result = await printDouble(89, result)
  console.log(result)
}

printAll()