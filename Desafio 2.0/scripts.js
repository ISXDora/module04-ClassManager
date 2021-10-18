const modalOverlay = document.querySelector('.modal-overlay');
const cards =document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

    for (let card of cards ){
        card.addEventListener("click", function(){
            const pageId = card.getAttribute("id");
            modalOverlay.classList.add('active')
            modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${pageId}/`
        })
    }
    
    document.querySelector('.close-modal').addEventListener("click", function(){
        modalOverlay.classList.remove('active')
        modal.classList.remove('maximazed')
        modalOverlay.querySelector("iframe").src = ""
        
    })

document.querySelector('.maximize').addEventListener("click", function(){
    if(modal.classList.contains('maximaze')){
        modal.classList.remove('maximazed')
    }else {
        modal.classList.add('maximazed')
    }

})