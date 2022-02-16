async function printDouble(number){

  return new Promise((resolve) => {
    setTimeout( () => {
     resolve(number * 2)
   }, 
   Math.floor(Math.random() * 100) + 1
  )
  })
      
  }

 printDouble(33).then(value => console.log(value))

function printAll(){
  printDouble(5).then(value => console.log(value))
  printDouble(10).then(value => console.log(value))
  printDouble(22).then(value => console.log(value))
  printDouble(1).then(value => console.log(value))
  printDouble(89).then(value => console.log(value))
}

 printAll()