/* first page start button */

document.getElementById("startbutton").addEventListener("click", function() {
    document.querySelector(".introduction").scrollIntoView({ behavior: "smooth"});
});

/* second page button */

document.getElementById("challengebutton").addEventListener("click", function() {
    document.querySelector("main section:nth-of-type(3)").scrollIntoView({ behavior: "smooth"});
});

/* third page button */

document.getElementById("challenge-uitleg-button").addEventListener("click", function() {
    document.querySelector(".challenge").scrollIntoView({ behavior: "smooth"});
});

/* fourth page back button */

document.getElementById("terug").addEventListener("click", function() {
    document.querySelector(".introduction").scrollIntoView({ behavior: "smooth"});
});

/* fpurth page next button */

document.getElementById("verder").addEventListener("click", function() {
    document.querySelector(".simulatie").scrollIntoView({ behavior: "smooth"});
});

/* fifth page go to results button */

document.getElementById("startsimulation").addEventListener("click", function() {
    document.querySelector(".results").scrollIntoView({ behavior: "smooth"});
});

/* sixth page try again button */

document.getElementById("opnieuw").addEventListener("click", function() {
    document.querySelector(".challenge").scrollIntoView({ behavior: "smooth"});
});


/* sixth page go to explanation button */

document.getElementById("uitleg").addEventListener("click", function() {
    document.querySelector(".explanation").scrollIntoView({ behavior: "smooth"});
});

/* seventh page go to explanation button */

document.getElementById("nogeens").addEventListener("click", function() {
    document.querySelector(".challenge").scrollIntoView({ behavior: "smooth"});
});


/* form */

const inputElements = document.querySelectorAll('input[type="radio"]');
inputElements.forEach(inputElement => {
    inputElement.addEventListener("click", checkAnswers);
});

function checkAnswers() {
    const question1 = document.querySelector('input[name="q1"]:checked').value;
    const question2 = document.querySelector('input[name="q2"]:checked').value;
    const question3 = document.querySelector('input[name="q3"]:checked').value;
    const question4 = document.querySelector('input[name="q4"]:checked').value;

    let image;
    let video = document.getElementById("simulation");

    switch (question1 + question2 + question3 + question4) {
        case 'answer1answer1answer1answer1':
            image = "/images/1.png";
            document.querySelector("#simulation-image").src=""
            document.querySelector("#simulation").style.display = "block"
            video.src= "/videos/scenario1.mp4";
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer2answer1answer1answer1':
            image = "/images/2.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation2.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer2answer2answer1answer1':
            image = "/images/3.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation3.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer2answer2answer2answer1':
            image = "/images/4.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation4.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Je hebt het bijna gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Je kunt voor nog minder filterbubbels zorgen!";
            break;
        case 'answer2answer2answer2answer2':
            image = "/images/5.png";
            video.src= "/videos/scenario2.mp4";
            document.querySelector("#simulation-image").src=""
            document.querySelector("#simulation").style.display = "block"
            document.querySelector(".resultatentext").innerHTML = "Gefeliciteerd! Je hebt de challenge gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Op deze manier vormen zich de minste filterbubbels!";
            break;
        case 'answer1answer2answer1answer1':
            image = "/images/6.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation6.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer1answer2answer2answer1':
            image = "/images/7.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation7.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Je hebt het bijna gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Je kunt voor nog minder filterbubbels zorgen!";
            break;
        case 'answer1answer2answer2answer2':
            image = "/images/8.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation8.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Gefeliciteerd! Je hebt de challenge gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Op deze manier vormen zich de minste filterbubbels!";
            break;
        case 'answer1answer1answer2answer1':
            image = "/images/9.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation9.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer1answer1answer2answer2':
            image = "/images/10.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation10.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Je hebt het bijna gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Je kunt voor nog minder filterbubbels zorgen!";
            break;
        case 'answer1answer1answer1answer2':
            image = "/images/11.png";
            video.src= "/videos/scenario3.mp4";
            document.querySelector("#simulation-image").src=""
            document.querySelector("#simulation").style.display = "block"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer2answer1answer2answer2':
            image = "/images/12.png";
            video.src= "/videos/scenario4.mp4";
            document.querySelector("#simulation").style.display = "block"
            document.querySelector(".resultatentext").innerHTML = "Je hebt het bijna gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Je kunt voor nog minder filterbubbels zorgen!";
            break;
        case 'answer2answer1answer2answer1':
            image = "/images/13.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation13.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Je hebt het bijna gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Je kunt voor nog minder filterbubbels zorgen!";
            break;
        case 'answer2answer1answer1answer2':
            image = "/images/14.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation14.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Helaas... je hebt de challenge niet gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Er vormen zich nogsteeds filterbubbels.";
            break;
        case 'answer2answer2answer1answer2':
            image = "/images/15.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation15.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Gefeliciteerd! Je hebt de challenge gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Op deze manier vormen zich de minste filterbubbels!";
            break;
        case 'answer1answer2answer1answer2':
            image = "/images/16.png";
            document.querySelector("#simulation-image").src="/images/simulatie/simulation16.png"
            document.querySelector("#simulation").style.display = "none"
            document.querySelector(".resultatentext").innerHTML = "Gefeliciteerd! Je hebt de challenge gehaald!";
            document.querySelector(".resultatentext2").innerHTML = "Op deze manier vormen zich de minste filterbubbels!";
            break;
        default:
            image = "/images/1.png";
    }
    changeImage(image);
}

function changeImage(image) {
    document.getElementById("myImage").src = image;
}

/* making the video play only when you're on the section it's in */

let video = document.getElementById("simulation");
let observer = new IntersectionObserver(onIntersection);
observer.observe(video);

function onIntersection(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            video.play();
        } else {
            video.pause();
        }
    });
}
video.addEventListener("ended", function() {
    video.play();
})

/* creating expandable text */

// var to keep track of which expandable text is currently open

let currentOpenText = null;

function expandText(expandableId) {
    const expandableText = document.getElementById(expandableId);
    const hiddenText = expandableText.getElementsByClassName("hidden")[0];

    if (currentOpenText && currentOpenText !== expandableId) {
        document.getElementById(currentOpenText)
        .getElementsByClassName("hidden")[0]
        .classList.remove("visible");
    }

    currentOpenText = expandableId;

    hiddenText.classList.toggle("visible");
}