const tarefas = document.querySelector("#tarefas");
const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");

tarefa.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            if(!tarefa.value){
                window.alert("Informe uma tarefa");
            }
            else{
                const novoItemDiv = document.createElement("div");
                novoItemDiv.classList.add("tarefa");
                const textoItemDiv = document.createElement("p");
                const inputItemDiv = document.createElement("input");
                inputItemDiv.type = "checkbox";
                inputItemDiv.classList.add("checkbox");
                textoItemDiv.classList.add("tarefa-nova");
                textoItemDiv.textContent = tarefa.value;
                const botaoApagar = document.createElement("button");
                botaoApagar.id = "apagar";
                botaoApagar.textContent = "x";
                inputItemDiv.addEventListener('click', () => {
                        if (textoItemDiv.classList == "tarefa-nova") {
                            textoItemDiv.classList.toggle("tarefa-feita");
                        }
                        else {
                            textoItemDiv.classList.remove("tarefa-feita");
                            textoItemDiv.classList.add("tarefa-nova");
                        }
                    });
                botaoApagar.addEventListener('click', () => {
                        novoItemDiv.remove(novoItemDiv);

                    });
                btn.addEventListener('click', ()=> {
                    tarefas.foreach(novoItemDiv.remove(novoItemDiv));
                    window.alert("Tarefas apagadas com sucesso!!");
                });
                novoItemDiv.appendChild(inputItemDiv);
                novoItemDiv.appendChild(textoItemDiv);
                novoItemDiv.appendChild(botaoApagar);
                tarefas.appendChild(novoItemDiv);
                tarefa.value = "";
                localStorage.setItem('textoP', textoItemDiv.textContent);
                }
        }
    });