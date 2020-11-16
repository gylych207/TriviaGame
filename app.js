const username = document.getElementById('username');
const userContainer = document.querySelector('.user-container');
let mainContainer = document.querySelector('.main-container');
const greeting = document.querySelector('#greeting');
const name = document.getElementById('name');
const btnStart = document.querySelector('.btnStart');
const select = document.querySelector('select');



const question = document.querySelector('#question');
const answers = document.querySelector('#answers');
const ans1 = document.querySelector('.answer1');
const ans2 = document.querySelector('.answer2');
const ans3 = document.querySelector('.answer3');
const ans4 = document.querySelector('.answer4');
let truAns = document.querySelector('#true');
let btnAdd = document.querySelector('.addSeconds');


// Add seconds
btnAdd.addEventListener('click', function () {
  if (btnAdd.className === 'addSeconds') {
    countDown = countDown + 5;
    btnAdd.className = 'addSecondsActive';
  }
})

//skip button
let skip = document.querySelector('.skip');
skip.addEventListener('click', function () {
  if (skip.className === 'skip') {
    answers.innerHTML = '';
    skip.className = 'skipActive';
    getData();
    
  }
  // else {
  //   alert('YOU HAVE DONE WITH THIS BONUS');
  // }
});

// temporary hold, comment the section to switch full version of the game
// let body = document.querySelector('body');
// body.onload = () => {
//   userContainer.style.display = 'none';
//   mainContainer.classList.remove('ka');
// }


let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', (event) => {
  // event.preventDefault();
  userContainer.style.display = 'none';
  mainContainer.classList.remove('ka');
  name.textContent = `Hi ${username.value}! Keep Tight.`;

})


let interval;
let countDown;
const getData = async () => {

  try {
    const url = `https://opentdb.com/api.php?amount=50&&category=${select.selectedIndex+9}`;
    let response = await axios.get(url);
    console.log(response);
    let questionText = response.data.results[1].question;
    let correct_answer = response.data.results[1].correct_answer;
     incorrect_answer = response.data.results[1].incorrect_answers;
    let allAnswers = incorrect_answer.concat(correct_answer);
    // shuffle the array of answers to get random answer
    allAnswers = allAnswers.sort();
    
    question.textContent = questionText;

    // clock
    
    function clock() {
      let clock = document.getElementById('clock');
      clock.textContent='';
      clearInterval(interval);
       countDown = 15;
      function count() {
        clock.textContent = countDown;
      
        if (countDown === 0) {
          clearInterval(interval);
        }
        return countDown--;
      }
      interval = setInterval(count, 1000);
    }
    clock();

   

    

    //Create DIV, ANS, QUESTIONS
    
    function questionBuilder() {
      for (let i = 0; i < allAnswers.length;i++){
        if (allAnswers[i] === correct_answer) {
          let div = document.createElement('div');
          div.textContent = allAnswers[i];
          div.className = 'answer';
          div.setAttribute('type','true');
        answers.append(div);
        }
        else {
          let div = document.createElement('div');
          div.textContent = allAnswers[i];
          div.className = 'answer';
          div.setAttribute('type','false');
        answers.append(div);
        }
      }
    }
    questionBuilder();
    
    //Remove Bonus;
    let removeBonus = document.querySelector('.removeBonus');
    removeBonus.addEventListener('click', function () {
      if (removeBonus.className === 'removeBonus') {
        removeBonus.classList.add('removeBonusActive');
        let ff = document.querySelectorAll('[type="false"]');
        ff[1].style.display = 'none';
        ff[2].style.display = 'none';  
      }
     
    })
    
   
  
   
    
    // Create Event Listener for each answer. Green and Red.
    let answer = document.querySelectorAll('.answer');
    let trueAns = document.getElementById('true');
    let falseAns = document.getElementById('false');
    let trueNumber = parseInt(trueAns.innerHTML);
    let falseNumber = parseInt(falseAns.innerHTML);
    answer.forEach((item) => {
      item.addEventListener('click', function () {
        let clock = document.getElementById('clock');
       
        if (clock.textContent > 0) {

          if (item.getAttribute('type') === 'true') {
            trueNumber++;
           
            trueAns.innerHTML = trueNumber;
            item.style.backgroundColor = 'green';
            function remove() {
              answers.innerHTML = '';
            }
            setTimeout(remove, '1000');
            setTimeout(getData,'1200');
          }
          else {
            falseNumber++;
            falseAns.innerHTML = falseNumber;
          
            item.style.backgroundColor = 'red';
            let a = document.querySelector('[type="true"]');
            a.style.backgroundColor = 'green';
            function remove() {
              answers.innerHTML = '';
            }
            setTimeout(remove, '1000');
            setTimeout(getData,'1200');
          }
        }
        else {
          clock.textContent = 'YOU LOST';

        }
        

      });
    });

  } catch (error) {
    console.log(error);
  }
}


btnStart.addEventListener('click', function () {
  if (btnStart.className === 'btnStart') {
    getData();
    btnStart.className = 'btnStartActive';
    setTimeout(btnRemove,2000);
  }
});

function btnRemove() {
  btnStart.remove();
}
// function setIntervalX(callback, delay, repetitions) {
//   var x = 0;
//   var intervalID = window.setInterval(function () {

//      callback();

//      if (++x === repetitions) {
//          window.clearInterval(intervalID);
//      }
//   }, delay);
// }
// setIntervalX(function () {
//   // Your logic here
// }, 1000, 5);