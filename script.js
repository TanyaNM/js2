let container_main = document.querySelector('.main');
let container_start = document.querySelector('.start');
let container_start_h3 = container_start.querySelector('h3');
let question_field = document.querySelector('.question');
let answer_buttons = document.querySelectorAll('.answer');
let start_btn = document.querySelector('.start-btn');

class Question {
    constructor(question, answer_1, answer_2, answer_3, correct, answer_5) {
        this.question = question;
        this.correct = correct;
        this.answers = [
            answer_1,
            answer_2,
            answer_3,
            this.correct,
            answer_5,
        ];
    }

    display() {
        question_field.innerHTML = this.question;

        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i];
        }
    }
}

let questions = [
    new Question("Коли появився мем Skavarodachkarr?", "12.06.23", "05.07.24", "4.09.23", "11.08.24", "08.08.23"),
    new Question("Тані після нас потрібен психолог?", "Можливо", "Ні", "Не знаю", "КАНЄШНА", "Скоріше всього"),
    new Question("Що ми робимо на перервах?", "Тихенько сидимо", "Граємо щось", "Хвалимо Таню", "Верещимо/граємо ігри", "Верещимо"),
    new Question("Після яких людей Тані треба психолог?", "Ліза+Соня", "Денис+Андрій", "Маша+Соня", "Міша+Маша+Поліна", "Поліна+Соня"),
    new Question("Яка коронна фраза Тані?", "Ну ви канєшно вообщє", "Шо за блін капєц", "Поможіть", "Я вже всьо", "Шо батькам покажете?"),
    new Question("Коли в нас перерва?", "13.00", "14.50", "21.00", "15.15","16.00"),
     new Question("Які курси в нас були?", "пайтон,скретч,", "Сайти,роблокс", "Роблокс,пайтон", "Скретч,Сайти,Джава","Джава"),
      new Question("Ми буллимо Таню?", "ні", "хз", "не знаю", "да","навєрно"),
       new Question("Які ігри ми граємо на перерві", "ми нічого не граємо , ми заставляємо Таню не колитися", "меми", "гартік фон/гартік іо", "гартік фон/меми","щавель"),
        new Question("Що по словах Тані з нами зробить Мирослава і вона", "Зтанцюють", "накричать", "З'їдять нас ", "наб'ють по дупі","позвонять мамачке"),
         new Question("Таня нас вибачить?", "ні", "ні", "ні", "КАНЄШНА ДА","хз"),
    
];

let correct_answers_given;
let total_answers_given;
let current_question_index = 0;

start_btn.addEventListener('click', function() {
    container_main.style.display = 'flex';
    container_start.style.display = 'none';
    
    correct_answers_given = 0;
    total_answers_given = 0;
    current_question_index = 0;

    displayCurrentQuestion();

    setTimeout(function() {
        container_main.style.display = 'none';
        container_start.style.display = 'flex';
        container_start_h3.innerHTML = `<h3>Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.</h3>`;
    }, 3000000);
});

for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML === questions[current_question_index].correct) {
            correct_answers_given += 1;
            answer_buttons[i].style.background = '#00FF00';
            anime({
                targets: answer_buttons[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            });
        } else {
            answer_buttons[i].style.background = '#FF0000';
            anime({
                targets: answer_buttons[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            });
        }
        total_answers_given += 1;

        current_question_index += 1;

        if (current_question_index < questions.length) {
            displayCurrentQuestion();
        } else {
            // End of quiz, hide the main container and show the result
            container_main.style.display = 'none';
            container_start.style.display = 'flex';
            container_start_h3.innerHTML = `<h3>Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.</h3>`;
        }
    });
}

function displayCurrentQuestion() {
    questions[current_question_index].display();
}
