var edit = document.querySelector(".edit");

// eventos
edit.addEventListener("click" , function(){
    var createDiv = document.createElement('div');
    createDiv.className = 'div-criada';
    if(createDiv){
        
        this.style.display =' none';
        
    }
    console.log(createDiv)
    
})