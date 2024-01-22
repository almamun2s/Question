// Selecting all Questions
const questions = document.querySelectorAll('.tq-question');

questions.forEach(function(question){
    let button        = question.querySelector('.tq-question-btn');
    let plusBtn       = question.querySelector('.tq-plus');
    let minusBtn      = question.querySelector('.tq-minus');
    let questionBody  = question.querySelector('.tq-question-body');
    button.addEventListener('click', function(){
        questionBody.classList.toggle('tq-show');
        minusBtn.classList.toggle('tq-hide');
        plusBtn.classList.toggle('tq-hide');
        questions.forEach(function(item){
            if (item !== question) {
                let itemMinusBtn    = item.querySelector('.tq-minus');
                let itemPlusBtn     = item.querySelector('.tq-plus');
                let itemBody        = item.querySelector('.tq-question-body');
                
                    itemBody.classList.remove('tq-show');
                    itemMinusBtn.classList.add('tq-hide');
                    itemPlusBtn.classList.remove('tq-hide');
                }
            
        });




    })
})