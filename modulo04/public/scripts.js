const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .menu a")

for (item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
        console.log(currentPage)
        console.log(item)
    }
}