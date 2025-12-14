const question = document.querySelectorAll(".accordion .content-container");
console.log(question);

for(i=0;i<question.length;i++) {
    question[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.querySelector('.answer');
        if (this.classList.contains('active')) {
            answer.style.height = answer.scrollHeight + 'px';
        }
        else {
            answer.style.height = '0px';
        }

    })
}



