const answers = ["a", "c", "c", "c", "a", "a", "c", "a", "c", "b"];
const solve = () => {
  const answerLength = answers.length;
  let i = 0;
  let score = 0;

  const userAnswers = [];
  for (i = 1; i <= answerLength; i++) {
    const selectedOption = document.querySelector(
      'input[name="q' + i + '"]:checked'
    );
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
      if (selectedOption.value === answers[i - 1]) {
        score++;
      }
    }
  }

  const bodyContent = document.getElementById("bodyId");
  bodyContent.innerHTML = `<div class="backgroundSubmit">   <div class="submit">       <img src="./tick.png" alt="">       <h1>Thank You! You got ${score} out of ${answerLength} marks</h1></div></div>`;
};
const formhandle = document.getElementById("questionform");
formhandle.addEventListener("submit", (e) => {
  e.preventDefault();
  solve();
});
const timer = document.getElementById('timer')
let time =0;

setInterval(changeTime,1000)
function changeTime (){
    time++
    timer.innerText =`Time Remaining ${time} out of 120 seconds`
    if(time===120){
        solve()
    }
}
