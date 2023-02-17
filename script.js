const openBtnModal = document.querySelector('.open-modal')
const closeBtnModal = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.modal-container')
const overlay = document.querySelector('.overlay')
const acceptBtn = document.querySelector('.accept')
const deleteBtn = document.querySelector('.delete')

let clicked = true

openBtnModal.addEventListener('click', () => {
    modalContainer.classList.add('active')
    overlay.classList.add('show')
    openBtnModal.classList.add('mask')
})

closeBtnModal.addEventListener('click', () => {
    modalContainer.classList.remove('active')
    overlay.classList.remove('show')
    openBtnModal.classList.remove('mask')

})

acceptBtn.addEventListener('click', () => {
    if(clicked){
        alert('You accepted the request !')
        modalContainer.classList.remove('active')
        overlay.classList.remove('show')
        openBtnModal.classList.remove('mask')
    }
})

deleteBtn.addEventListener('click', () => {
    if(clicked){
        alert('You rejected the request !')
        modalContainer.classList.remove('active')
        overlay.classList.remove('show')
        openBtnModal.classList.remove('mask')
    }
})