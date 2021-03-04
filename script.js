let input = document.getElementById('one-item');

this.addEventListener('keydown', function(event) {
if(event.key == 'Enter'){
    addItem();
}
});

function addItem(){
    let item = " - " + document.getElementById("one-item").value;
    let h1 = document.createElement("h1");

        document.getElementById("one-item").value = '';

        h1.appendChild(document.createTextNode(item));

        h1.addEventListener("click", function(){
            h1.style.textDecoration = "line-through";
        })

        let div = document.getElementById('all-items');
        div.insertAdjacentElement("beforeend", h1);

}
 function clearList(){
     let list = document.getElementById('all-items')
     let i =0;

     while(i <list.childNodes.length){
         list.removeChild(list.childNodes[i]);
     }
 }