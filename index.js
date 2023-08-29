const questions = document.querySelectorAll('.question');

questions.forEach(question=>{
  question.querySelector('.plus-icon').addEventListener('click',(e)=>{
    question.querySelector('.minus-icon').classList.add('show-text');
    question.querySelector('.question-text').classList.add('show-text')
  })
  question.querySelector('.minus-icon').addEventListener('click',(e)=>{
    question.querySelector('.minus-icon').classList.remove('show-text');
    question.querySelector('.question-text').classList.remove('show-text')
  })
 
})










