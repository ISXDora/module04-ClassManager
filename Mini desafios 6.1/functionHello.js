const url = 'https://jsonplaceholder.typicode.com/users'

const getPosts = async () => {

const response = await fetch(url)

console.log(response)
}