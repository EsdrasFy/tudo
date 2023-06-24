function abrirModal(){
    const modal = document.getElementById('modal-container');

    modal.classList.add('mostrar');

    modal.addEventListener ('click', (e) =>{
        if (e.target.id == 'fechar' || e.target.id == 'modal-container');
            modal.classList.remove('mostrar')
    })

}