
const answerElement = document.getElementsByClassName('answer');
console.log(answerElement);

const answer = [];

for( i=0;i<answerElement.length ;i++) {
    answerElement[i].style.height = 'auto';
    answer[i] = answerElement[i].clientHeight + ""+'px';
    answerElement[i].style.height = '0px';
}

console.log(answer);
for(i=0;i<answer.length;i++) {
    console.log(answer[i]);
}

const question = document.querySelectorAll(".accordion .content-container");
console.log(question);

for(i=0;i<question.length;i++) {
    question[i].addEventListener('click', function() {
        this.classList.toggle('active');
        console.log(this.children[1]);
        console.log(answer[i]);
        this.children[1].style.height = sth;
        console.log(this.children[1]);
    })
}



