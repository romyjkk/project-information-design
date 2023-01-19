/* first page */

const startButton = document.getElementById("#startbutton");


/* form */

function checkAnswers() {
    const question1 = document.querySelector('input[name="q1"]:checked').value;
    const question2 = document.querySelector('input[name="q2"]:checked').value;
    const question3 = document.querySelector('input[name="q3"]:checked').value;
    const question4 = document.querySelector('input[name="q4"]:checked').value;

    let image;

    switch (question1 + question2 + question3 + question4) {
        case 'answer1answer1answer1answer1':
            image = "/images/1.png";
            break;
        case 'answer2answer1answer1answer1':
            image = "/images/2.png";
            break;
        case 'answer2answer2answer1answer1':
            image = "/images/3.png";
            break;
        case 'answer2answer2answer2answer1':
            image = "/images/4.png";
            break;
        case 'answer2answer2answer2answer2':
            image = "/images/5.png";
            break;
        case 'answer1answer2answer1answer1':
            image = "/images/6.png";
            break;
        case 'answer1answer2answer2answer1':
            image = "/images/7.png";
            break;
        case 'answer1answer2answer2answer2':
            image = "/images/8.png";
            break;
        case 'answer1answer1answer2answer1':
            image = "/images/9.png";
            break;
        case 'answer1answer1answer2answer2':
            image = "/images/10.png";
            break;
        case 'answer1answer1answer1answer2':
            image = "/images/11.png";
            break;
        case 'answer2answer1answer2answer2':
            image = "/images/12.png";
            break;
        case 'answer2answer1answer2answer1':
            image = "/images/13.png";
            break;
        case 'answer2answer1answer1answer2':
            image = "/images/14.png";
            break;
        case 'answer2answer2answer1answer2':
            image = "/images/15.png";
            break;
        case 'answer1answer2answer1answer2':
            image = "/images/16.png";
            break;
        default:
            image = "/images/1.png";
    }
    changeImage(image);
}

function changeImage(image) {
    document.getElementById("myImage").src = image;
}