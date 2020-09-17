let word = document.getElementById('word');
let input = document.getElementById("in");
let btn = document.getElementById('btn');
let out = document.getElementById('out');
let list = document.getElementById('list');
let array = [];
let startWord = ['기차', '사과', '윤석훈', '돼지', '노트북', '시나브로', '동아리' , '학교', '기숙사', '집'];
let startSize = startWord.length;
let size = Math.floor(Math.random() * startSize);
let randomWord =  startWord[size];
let randomSize = randomWord.length - 1;
let start = document.getElementById('start-word');
// let consonant = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ','ㄲ','ㅃ','ㅉ','ㄸ'];
start.innerHTML = randomWord;
btn.addEventListener('click', function(e) {
   e.preventDefault();
   // if (word.textContent[word.textContent.length - 1] == input.value[0]) {
      if (start.textContent[start.textContent.length - 1] == input.value[0]) {
         
      for(i in array){
         console.log(i);
         if(array[i]==input.value)
         {
            Modal();
            return;
         }
      }      
      alert('O');
      // word.textContent = input.value;
      start.textContent = input.value;
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

function noSpace(obj){
   let str_space = /\s/;
   if(str_space.exec(obj.value)){
      alert("공백을 사용하실 수 없습니다.");
      obj.focus();
      obj.value = obj.value.replace(' ', '');
      return false;
   }
}


