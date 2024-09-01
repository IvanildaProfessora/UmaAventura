const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
document.getElementById('passo-16').addEventListener('click', function() {
    var audio = new Audio('susto.mp3');
    audio.play();
});
document.getElementById('passo-16').addEventListener('click', function() {
    var audio = new Audio('risada.mp3');
    audio.play();
});
