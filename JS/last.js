let word = document.getElementById('word');
let input = document.getElementById("in");
let btn = document.getElementById('btn');
let out = document.getElementById('out');
let list = document.getElementById('list');
let array = [];
let startWord = document.getElementById('start-word');

btn.addEventListener('click', function(e) {
   e.preventDefault();
   if (word.textContent[word.textContent.length - 1] == input.value[0]) {
      for(i in array){
         console.log(i);
         if(array[i]==input.value)
         {
            Modal();
            return;
         }
      }
      alert('O');
      word.textContent = input.value;
      array.push(input.value);
      list.innerHTML+=input.value + " -> ";
      console.log(array);
      input.value = '';
      input.focus();
   } else {
      alert('X');
      input.value = '';
      input.focus();

   }
});
let modal = document.getElementById("gameover");
let gameoverPost = document.querySelector(".gameover-input");


function Modal() {
   modal.style.display="block";
}

