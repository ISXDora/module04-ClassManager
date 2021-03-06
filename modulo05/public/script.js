

function paginate(selectedPage, totalPages){

    let    
        pages = [],
        oldPage 
 
    for ( let currentPage = 1; currentPage <= totalPages; currentPage++){
 
     const firstAndLastPages = currentPage == 1 || currentPage == 2 || currentPage == totalPages - 1 || currentPage == totalPages
     const pageAfterSelectedPage = currentPage <= selectedPage + 1
     const pageBeforeSelectedPage = currentPage >= selectedPage -1
 
        if(firstAndLastPages || pageAfterSelectedPage && pageBeforeSelectedPage){
            
            if(oldPage && currentPage - oldPage > 2){
                pages.push("...")
         }
 
         if(oldPage && currentPage - oldPage == 2){
             pages.push(currentPage - 1)
      }
         
         pages.push(currentPage)
         oldPage = currentPage
     }
 }

    return pages
 
}


function createPagination(pagination){

    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;
    const filter = pagination.dataset.filter;
    const pages = paginate(page, total);
    
    
    let elements = ""
    
    for (let page of pages) {
    
        if(String(page).includes("...")){
            elements += `<span>${page}</span>`
        } else {
            if( filter ){
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
    
            } else {
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }
    
    pagination.innerHTML = elements

}

const pagination = document.querySelector(".pagination")

if (pagination){
    createPagination(pagination)
}