
   let totalPages = 20,
   selectedPage = 5,
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

   console.log(pages)