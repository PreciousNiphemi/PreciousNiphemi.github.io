const quizBox = document.getElementById('questionBox');
const ul = document.getElementById('ul');
const btn = document.getElementById('button');
const scoreCard = document.getElementById('scoreCard');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

const app = {
  questions:[
    {q:'Two divided by two is ?', options:['1','3','2','0'],
    answer:1},
    {q:'ten multiplied by 2 is ?',options:['30','40','20','50'],
    answer:3},
    {q:'one plus one is ?',options:['11','2','4','14'],
    answer:2},
  ],
  index:0,
load:function  (){
  if(this.index<= this.questions.length - 1){
    quizBox.innerHTML = this.questions[this.index].q;
    op1.innerHTML = this.questions[this.index].options[0];
    op2.innerHTML = this.questions[this.index].options[1];
    op3.innerHTML = this.questions[this.index].options[2];
    op4.innerHTML = this.questions[this.index].options[3];
}else{
  quizBox.innerHTML = 'Quiz over!!!';
  op1.style.display = 'none';
  op2.style.display = 'none';
  op3.style.display = 'none';
  op4.style.display = 'none';
  btn.style.display = 'none';
}

  },
  next:function(){
  this.index++;
  this.load();
   },
  check:function(element){

    const id = element.id.split('');
    if(id[id.length - 1] == this.questions[this.index].answer){
      this.score++;
      element.className ='correct';
      element.innerHTML = 'Correct';
      this.scoreCard();
    }
    else{
      element.className='wrong';
      element.innerHTML = 'Wrong';
    }
  },
  notClickAble:function() {
    for(let i=0; i<ul.children.length;i++){
      ul.children[i].style.pointerEvents = 'none';
    }
  },
    clickAble:function() {
      for(let i=0; i<ul.children.length;i++){
        ul.children[i].style.pointerEvents = 'auto';
        ul.children[i].className = '';
      }
    },
  score:0,
  scoreCard:function(){
      scoreCard.innerHTML =  this.score + '/' + this.questions.length  ;
  }
}

window.onload= app.load();

function button(element){
  app.check(element);
  app.notClickAble();
}

function next(){
   app.next();
   app.clickAble();

 }
