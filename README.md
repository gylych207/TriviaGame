

### STEP 1: Read the Directions


### STEP 2: Pitch Your Project

- **App Title**: QuizMate
- **App Description**: The Application generates multiple choice questions in different categories. The category and the difficulty are can be changed manually. The App keep track of the score and shows the result
- **API**: https://opentdb.com/api_config.php
- **API Snippet**:results: [
{
category: "History",
type: "multiple",
difficulty: "hard",
question: "What year was Canada founded in?",
correct_answer: "1867",
incorrect_answers: [
"1798",
"1859",
"1668"
]
},
- **Wireframes**:   https://www.figma.com/file/VnSWU03dhi8kkpaPuQVyaBay/Untitled?node-id=0%3A1


- **MVP**: A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
* Html and Css structure of the App.
* Dynamically changed html and css. 
* getting data (questions) to the dom from one APi.
* Keep track of score.

- **Post-MVP**: A list of additional/advanced features you would like to include in your app after you have met MVP.
* User selects the category of questions.
* Cound Down timer for each question.
* Adding some helper bonuses .. adding some extra time, eleminate 2 wrong answers etc..

- **Goals**: 


| Days | Pieces      |        |
|---------------------------|---       |---         |
| Day 1:  | I want to do my mvp section  |  |
| Day 2:  | choose categories. difficulties will be added  |  |
| Day 3:  | Code bonus section  |  |
| Day 4:  | Code bonus section  |  |
| Day 5:  | css styles for coundown timer and true/false questions.plus some music effects  |  |
| Day 6:  | wrapping up the project.  |  |
| Day 7:  | ready to present  



- **Priority Matrix**: https://www.figma.com/file/WOhAS1DfpQxyQvEGVJDdTj9K/Untitled?node-id=0%3A1

- **Timeframes**: 


| Pieces | Planned      | Spend       |
|---------------------------|---       |---         |
| Basic Html & Css::  | 1.5:Hour   | N/A |
| CSS transition:  | 2:Hour   | N/A |
| Creating Coundown Timer with style:          | 2:Hour  | N/A |
| Getting/populating data from API :        | 1.5:Hour  | N/A |
| Filtering The data for categories etc    | 3:Hour   | N/A |
| Applying JS for Bonuses:    | 3:Hour   | N/A |
| Applying CSS for True/False answers:    |  2:Hour    | N/A |
| Saving the data in local storage:    |  2:Hour   | N/A |
| Total:    |  17:Hour   | N/A |




### STEP 3: Make a New Repo
1. [Make a new **personal** GitHub repo for your project](https://help.github.com/articles/create-a-repo/). **DO NOT FORK THIS REPO.** 
2. This new repo should be under your **personal** Github, NOT your General Assembly Github account.
2. Make sure your new repo is set to "Public" and initialize it with a README.md file. **This will be your project worksheet.**
3. Send a link for your repository to your Squad Leader.
4. After your have been approved, clone this new repository down to your machine.
5. CD into the project directory and touch ```index.html```, ```style.css``` and ```script.js``` files.
6. Test a commit and push it to make sure everything is connected with ```git commit -m "My Garnet Project 1!"```.

Note: Your repository should **not** be called `project-1`! Think of a name for your application, and then name your repository after your application. 

### STEP 4: &#x1F534; Build Your Project MVP — Mandatory To Pass

* Html and Css structure of the App.
* getting data (questions) to the dom from one APi.
* Dynamically changed html and css.
* Keep track of score.
#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Styled using `Flexbox` or `Grid`.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  1. Fulfill the build requirements you have specified in your MVP.
  1. Deployed site to a hosting service like [Github Pages](https://pages.github.com/).
  1. Make commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

#### 📋 List of APIs

Below is a non-exhaustive list of some free APIs you can use. There are _many_ APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

  1. Weather: https://openweathermap.org/api
  1. News: https://newsapi.org/
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. NYC Open Data: https://opendata.cityofnewyork.us/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  
[This site](https://github.com/toddmotto/public-apis) lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We **highly suggest** using a free API for your first project dealing with one.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design.

### STEP 6: Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be no longer than 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Your presentation should **NOT**:
* Focus on what you didn't accomplish.

You will be sharing your project and your code.  Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write `git commit -m "My Garnet Project 1"` instead of `git commit -m "first commit"` for your first commit.

### Step 7: Help and Support

1. Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between students - there is no secondary market for tokens.**

1. Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your `issue` ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates. 

1. [Project approval sign up form](https://docs.google.com/forms/d/e/1FAIpQLSeZ2sjTXCI3w5NDsLt8rDnJlZs79Indj6abNdYBBaynLdCefw/viewform)

1. [Sign up here for help with your squad lead.](https://docs.google.com/forms/d/e/1FAIpQLSei27kMlH6M0TsgPN_aUf4rOIFjM53KJsmtq8UEGEBUxfFx_Q/viewform)

### Step 8: Grading

#### Hard Requirements

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed to GitHub Pages or a custom domain
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit. 

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential. 

An example of the gist can be found here: [Secret Gist](https://gist.git.generalassemb.ly/SteveVW/6b49d9b08d1edcd203609d843eb8b97f)

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader. 

### Incomplete Projects

Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission.  **Note that you are allowed one extension on only one of the four projects.**

<br>

## PLAGIARISM

Remember. We have a **zero-tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://gist.git.generalassemb.ly/SteveVW/7b780310c82d10df98a4e620abbfbfec).
