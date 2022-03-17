// select all elements
const start = document.getElementById("start");
const title = document.getElementById("title");
const name = document.getElementById("name");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qNum = document.getElementById("qNum");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeBar = document.getElementById("timeBar");
const progress = document.getElementById("progress");
const quizEnd = document.getElementById("quizEnd");
const coolThing = document.createElement("div");
const node = document.createTextNode("Click me (a lot)");
const congrats = document.createTextNode("Congrats!!");
 
// create questions
let questions = [
    {
        question : "We'll start off easy with 3 choices. What's the best football team?(Try to remember the answers)",
        qNum : "1",
        choiceA : "The Bears.",
        choiceB : "Aaron Rodgers.",
        choiceC : "The Jets.",
        choiceD : "The Bulls",
        correct : "A"

    },{
        question : "Click the smallest answer.",
        qNum : "2",
        choiceA : "-100",
        choiceB : "Ant",
        choiceC : "Atom",
        choiceD : "Paperclip",
        correct : "B"
    },{
        question : "Remember this: even hopeless has the word hope in it, and if you rearrange the letters it spells peeslosh.",
        qNum : "3",
        choiceA : "why",
        choiceB : "lol",
        choiceC : "O.k",
        choiceD : "peeslosh",
        correct : "C"
      },{
        question : "What is the question?",
        qNum : "4",
        choiceA : "?",
        choiceB : "question?",
        choiceC : "how?",
        choiceD : "o.k",
        correct : "N/A"
      },{
        question : ".SDRAWKCAB NOITSEUQ SIHT REWSNA",
        qNum : "5",
        choiceA : "WHAT?",
        choiceB : "Weenus",
        choiceC : "gskjbdfhjkbshjd",
        choiceD : "K.O",
        correct : "D"
      },{
        question:  "What was the answer to question 2?",
        qNum : "6",
        choiceA : "That one?➞",
        choiceB : "This one↓",
        choiceC : "I think it was this one.↑",
        choiceD : "I don't remember",
        correct : "A"
      },{
        question:  "What time should class start?",
        qNum : "7",
        choiceA : "11:30pm",
        choiceB : "Whenever, lectures are recorded apperently and i just found this out.",
        choiceC : "11:30am",
        choiceD : "1:11",
        correct : "D"
      },{
        question:  "What's cooler than being cool?",
        qNum : "8",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        choiceD : "",
        correct : "A"
      },{
        question:  "Duck Duck Duck...?",
        qNum : "9",
        choiceA : "Duck",
        choiceB : "Goose",
        choiceC : "Quak",
        choiceD : "Watch out!",
        correct : "C"
      },{
        question:  "What has to be broken before you can use it?",
        qNum : "10",
        choiceA : "Glowstick",
        choiceB : "Egg",
        choiceC : "Muscle Tissue",
        choiceD : "You can't break me.",
        correct : "C"
    },{
        question:  "How many letters are in the alphabet?",
        qNum : "11",
        choiceA : "21",
        choiceB : "25",
        choiceC : "26",
        choiceD : "27",
        correct : "qNum"
    },{
        question:  "Whats 9 + 10?",
        qNum : "12",
        choiceA : "21",
        choiceB : "10+9",
        choiceC : "90",
        choiceD : "19",
        correct : "A"
    },{
        question:  "Can a match box?",
        qNum : "13",
        choiceA : "Yes",
        choiceB : "Maybe",
        choiceC : "No but a tin can",
        choiceD : "How can a match box?",
        correct : "C"
    },{
        question:  "How many licks does it take to get to the center of a tootsie pop?",
        qNum : "14",
        choiceA : "1000",
        choiceB : "Its all relative",
        choiceC : "Just chew it",
        choiceD : "The world may never know",
        correct : "D"
    },{
        question:  "rect(10,20,30) error |fix the code|",
        qNum : "15",
        choiceA : ";",
        choiceB : "I don't know how to code",
        choiceC : "Rectangles are stupid",
        choiceD : "add another parameter for height maybe?",
        correct : "A"
    },{
        question:  "When you have to repeate lines of code what can you use?",
        qNum : "16",
        choiceA : "4 loop",
        choiceB : "for loop",
        choiceC : "fruit loop",
        choiceD : "copy and paste",
        correct : "B"
    },{
        question : "What happpens when you grow a forest?",
        qNum : "3",
        choiceA : "Forest fires",
        choiceB : "Mother Nature will love you.",
        choiceC : "Treeeeeeeeeees?",
        choiceD : "How do you grow a forest?",
        correct : "A"
    },{
        question:  "Will you complete this quiz",
        qNum : "18",
        choiceA : "idk man",
        choiceB : "if this is the answer",
        choiceC : "Of course",
        choiceD : "I hope",
        correct : "B"
    },{
        question:  "Did you remember",
        qNum : "19",
        choiceA : "sloshpee",
        choiceB : "peeslushie",
        choiceC : "no :( ",
        choiceD : "peeslosh",
        correct : "D"
    },{
        question:  "What question is this?",
        qNum : "(*)",
        choiceA : "19",
        choiceB : "20",
        choiceC : "21",
        choiceD : "22",
        correct : "B"
    },{
        question:  "What question is this?",
        qNum : "20",
        choiceA : "19",
        choiceB : "20",
        choiceC : "21",
        choiceD : "22",
        correct : "B"
    }
];

// create some variables

const lastQ = questions.length-1 ;
let currentQ = 0;
let count = 0;
const questionTime = 15; // 
const barWidth = 150; // 150px
const barUnit = barWidth / questionTime;
let timer;
let clickCount = 0;

// load a question
function loadQuestion(){
    let q = questions[currentQ];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qNum.innerHTML = "<p>"+ q.qNum +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  
   specialQuestion4();
  normalAgain1();
  specialQuestion8();
  specialQuestion11();
  normalAgain3();
  clickCountReset();
 
  // normalAgain2();
}

 start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
  
    currentQ=0;
    start.style.display = "none";
    title.style.display = "none";
    name.style.display = "none";
    loadQuestion();
    quiz.style.display = "block";
  
    loadProgress();
    loadCounter();
    timer = setInterval(loadCounter,1000); // 1000ms = 1s
  
}

// load progress
function loadProgress(){
    for (let i = 0; i < lastQ; i++){
        progress.innerHTML += "<div class='prog' id="+ i +"></div>";
    }
  
}

//counter load

function loadCounter(){

    if(count <= questionTime){
        counter.innerHTML = count;
        timeBar.style.width = count * barUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
      
        if(currentQ < lastQ){
          
          
            loadQuestion();
          
        }else{
            // end quiz 
            clearInterval(timer);
            complete();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer === questions[currentQ].correct){
        // answer is correct
        
      
      
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        
        answerIsWrong();
    }
    count = 0;
    if(currentQ < lastQ){
            
          
           
        }else{
            // end the quiz and show the score
            clearInterval(timer);
            complete();
        }
}

// answer is correct
function answerIsCorrect(){
  
  document.getElementById(currentQ).style.backgroundColor = "#0f0";
  currentQ++;
  loadQuestion();
  
}

// answer is Wrong
function answerIsWrong(){    
  
  currentQ = 0;
  const wrong = document.createElement("div");
  wrong.appendChild(node);
  wrong.innerHTML = "Wrong";
  loadQuestion();
  
}

// congrats box
function complete(){
  
  quizEnd.style.display = "block";
  quizEnd.appendChild(congrats);
  quizEnd.style.color = "purple";
  quizEnd.style.height = "100px";
  quizEnd.style.width = "100px";
  quizEnd.style.top = "100px";
  
}

// answer is the question
function specialQuestion4(){
  
 if (currentQ === 3 ) {
   
    question.addEventListener("click",answerIsCorrect);
    question.style.cursor = "pointer";
   
 }
  
}
// take away question clicking
function normalAgain1(){
  
  if (currentQ === 4) {
    
    question.removeEventListener("click", answerIsCorrect);
    question.style.cursor = "not-allowed";
    
  }
  
}

//fix clickCount bug
function clickCountReset(){
  if (currentQ === 6){
    
    clickCount = 0;
  
  }
  
}
  // spam click question
    function specialQuestion8(){
      if (currentQ === 7 ) {
        
        choiceA.parentNode.removeChild(choiceA);
        choiceB.parentNode.removeChild(choiceB);
        choiceC.parentNode.removeChild(choiceC);
        choiceD.parentNode.removeChild(choiceD);
        coolThing.appendChild(node);
        const nodeA = document.getElementById("Click me(a lot)");
        const element = document.getElementById("choices");
        element.appendChild(coolThing);
        element.style.color = "blue";
        element.style.cursor = "pointer";
        coolThing.addEventListener("click",q8Button);
    
   }
      
 }
// if click past 7 wrong
function q8Button(){
  const element = document.getElementById("choices");
  const coolerThing = document.createElement("div");
  const node2 = document.createTextNode("Ice Cold");
  coolerThing.appendChild(node2);
  element.appendChild(coolerThing);
  clickCount++;
    
  if (clickCount === 7){
    
    const coolestThing = document.createElement("div");
    const node3 = document.createTextNode("Frozen");
    coolestThing.appendChild(node3);
    element.appendChild(coolestThing);
    console.log(coolerThing.childElementCount);
    a = setTimeout(normalAgain2,2000);
    b = setTimeout(answerIsCorrect, 2000);
    
  }
  
  if (clickCount > 7){
    clearTimeout(a);
    clearTimeout(b);
    setTimeout(answerIsWrong, 1500);
    setTimeout(normalAgain2,1500);
    
  }
  
}

// fix layout
function normalAgain2(){
  
  const element = document.getElementById("choices");
  const coolerThing = document.getElementById("coolerThing");
  const coolestThing = document.getElementById("coolestThing");
  const node3 = document.getElementById("Frozen");
  
  while (coolThing.firstChild){
    
    coolThing.removeChild(coolThing.firstChild);
    
  }
  while (element.firstChild) {
    
    element.removeChild(element.firstChild);
    console.log("sadi")
}
  
   
 
  
    element.appendChild(choiceA);
    element.appendChild(choiceB);
    element.appendChild(choiceC);
    element.appendChild(choiceD);
}

function specialQuestion11(){
  
 if (currentQ === 10 ) {
   
  
    qNum.addEventListener("click",answerIsCorrect);
    qNum.style.cursor = "pointer";
   
 }
  
}

function normalAgain3(){
 
  if (currentQ === 11) {
     qNum.removeEventListener("click", answerIsCorrect);
     qNum.style.cursor = "not-allowed";
  }
}



