function printDouble(number){

  const ms = Math.floor(Math.random() * 100) + 1
  
  return new Promise((resolve) => {
    setTimeout(() => {
       resolve(number * 2)
   },ms)
  })
      
  }

 function imprimeValor (value) {
      console.log(value)
 }

 printDouble(33).then(imprimeValor)

function printAll(){
  printDouble(5).then(imprimeValor)
  printDouble(10).then(imprimeValor)
  printDouble(22).then(imprimeValor)
  printDouble(1).then(imprimeValor)
  printDouble(89).then(imprimeValor)
}

printAll()