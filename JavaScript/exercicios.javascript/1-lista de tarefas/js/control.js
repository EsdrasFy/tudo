let contador = 0;
let input = document.getElementById ('inputTarefa');
let btnAdd = document.getElementById ('btn-add');
let main = document.getElementById ('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !==null) && (valorInput !==undefined)){

        ++contador;
        let novoItem = `<div id= "${contador}"class="item" >

        <div onclick="checked(${contador})" class="item-icone">
            <img class="" src="/estilos/circle-outline.svg">
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="limparTudo(${contador})" > <img src="/estilos/delete.svg" style="width: 20px;"> delete</button>
        </div> 
    </div>`;
        main.innerHTML += novoItem;
        
        input.value = "";
        input.focus ();
        
    }
}
        input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
        }
        })


        function limparTudo(id){
            var tarefa = document.getElementById (id);
            tarefa.remove();        
    }
    
        