let id = 0;
document.body.addEventListener('click', e => {
    if (e.target.classList.contains('btn-info')) {
        id = e.target.id;
        localStorage.setItem('id', id);
        window.location.href = "game.html";
    }
})

