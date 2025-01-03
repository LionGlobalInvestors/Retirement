class Quiz {
  constructor() {
    this.imagePatch = `pics`;
    // this.imagePatch = `public/images/quiz/`;
    // this.imagePatch = `public/images/`;

    this.QUIZ = [
      {
        image: `quiz-Q1.png`,
        transition: ``,
        question: `As you prepare to embark on a long journey, you pack your bag. <br> How do you pack?`,
        answers: {
          // Sensing: `Admire the orchid’s details and colours`,
          // Intuition: `Think about what the orchid symbolises`,
          Capital: `Pack everything you might need`,
          Wealth: `Bring the bare minimum`,
          Income: `Pack half and buy the rest there`,
          Legacy: `Pack half and wash there`,
        },
      },
      {
        image: `quiz-Q2.png`,
        transition: ``,
        question: `Who is accompanying you to see the Northern Lights?`,
        answers: {
          // Introversion: `Prefer to explore the market quietly, soaking in the sights and sounds`,
          // Extroversion: `Engage with the vendors and make every interaction a part of the experience`,
          Capital: `2 - 3 friends to split cost`,
          Wealth: `Traveling solo for adventure`,
          Income: `Join a tour group for convenience`,
          Legacy: `Bring the whole kampong`,
        },
      },
      {
        image: `quiz-Q3.png`,
        transition: ``,
        question: `It's time to head to the airport. <br> How early do you leave?`,
        answers: {
          // Thinking: `Examine the lantern and wonder how it works`,
          // Feeling: `Focus on the magical and emotional experience`,
          Capital: `Leave 3 hours early because kiasu`,
          Wealth: `Leave 1 hour before your flight`,
          Income: `Leave 2 hours before to be just right on time`,
          Legacy: `Leave 3 hours early to go shopping/eating`,
        },
      },
      {
        image: `quiz-Q4.png`,
        transition: ``,
        question: `While queuing to check in your luggage, someone tries to cut in front of you. <br> Do you:`,
        answers: {
          // Judging: `Avoid the peacock and stay cautious of your surroundings `,
          // Perceiving: `Observe the peacock’s behaviour and adapt to the unfolding situation`,
          Capital: `Let them cut in front of you hoping that someone else will speak up`,
          Wealth: `Speak loudly to get them to join the queue`,
          Income: `Let them cut in front of you to avoid creating a scene`,
          Legacy: `Ask them nicely to join the queue behind you`,
        },
      },
      {
        image: `quiz-Q5.png`,
        transition: ``,
        question: `At the check in counter, you're told that your flight is delayed. What do you do first?`,
        answers: {
          // Sensing: `Find the size of the dragon amusing`,
          // Intuition: `Think about the significance of the dragon appearing now`,
          Capital: `Wait for the delayed flight`,
          Wealth: `Create a ruckus`,
          Income: `Pay extra to get onto the next available flight`,
          Legacy: `Claim full compensation from insurance happily`,
        },
      },
      {
        image: `quiz-Q6.png`,
        transition: ``,
        question: `You still have 30 minutes before your flight and you're feeling hungry. What do you do?`,
        answers: {
          // Introversion: `Find a quiet spot to relax and catch your breath`,
          // Extroversion: `Seek out other visitors in the area to learn more about the temple`,
          Capital: `Wait for the in-flight meal`,
          Wealth: `Eat at a restaurant at the transit area`,
          Income: `Buy a takeaway at transit area and eat on the aircraft`,
          Legacy: `Get a snack at the convenience store`,
        },
      },
      {
        image: `quiz-Q7.png`,
        transition: ``,
        question: `Seated at the window seat, you're enjoying the view when you notice the person next to you is sleeping. What do you do?`,
        answers: {
          // Thinking: `Assess your surroundings and wonder where everyone is`,
          // Feeling: `Relish the moment and enjoy the serene setting by the pool`,
          Capital: `Lower the shade halfway so you can still enjoy the view`,
          Wealth: `Continue enjoying the view with the shade up`,
          Income: `Leave the shade up until they ask you to close it`,
          Legacy: `Pull down the window shade fully`,
        },
      },
      {
        image: `quiz-Q8.png`,
        transition: ` `,
        question: `At the baggage claim, you notice someone struggling to lift their luggage. Do you:`,
        answers: {
          // Judging: `Follow a planned route to visit the main attractions`,
          // Perceiving: `Wander the gorge freely, enjoying unexpected discoveries`,
          Capital: `Look around to see if anyone else is offering help`,
          Wealth: `Take their luggage for them`,
          Income: `Take your luggage and walk away`,
          Legacy: `Offer to help them`,
        },
      },
      { //only show when got tie-breaker
        image: `quiz-Q9.png`,
        transition: ``,
        question: `When you are at the Northern Lights, for your first picture, do you: `,
        answers: {
          // Sensing: `Get drawn to the sights, sounds and smells`,
          // Intuition: `Wonder if night markets will always exist and what they represent`,
          Capital: `Take a selfie`,
          Wealth: `Ask someone to take pictures of you`,
          Income: `Take pictures of the scenery`,
          Legacy: `Live in the moment and enjoy it without taking pictures`,
        },
      },
    ].map((v, i) => ({ ...v, id: i + 1 }));

    this.RESULT = [
      {
        url: "result-capital-preservation.html",
        format: "CAPITAL PRESERVATION",
      },
      {
        url: "result-wealth-accumulation.html",
        format: "WEALTH ACCUMULATION",
      },
      {
        url: "result-income-generation.html",
        format: "INCOME GENERATION",
      },
      {
        url: "result-legacy-planning.html",
        format: "LEGACY PLANNING",
      },
    ].map((v, i) => ({
      ...v,
      id: i + 1,
      formatCheck: v.format,
    }));

    this.currentQuizID = 1;
    this.userAnswers = new Array();
  }

  run() {
    if (this.QUIZ && this.QUIZ.length && this.RESULT && this.RESULT.length) {
      this.renderQuiz(this.currentQuizID);
    }
  }

  renderQuiz(quizID) {
    if (quizID && !isNaN(quizID)) {
      const quizData = this.QUIZ.find((v) => v.id === quizID);
      const isLastQuiz = quizID >= this.QUIZ.length;

      if (quizData) {
        document.title = `Retirement Quiz ${quizID} | LGI`;

        const quizRender = document.getElementById("quiz-render");

        if (quizRender) {
          quizRender.innerHTML = `
                    <div class="uk-card quiz-card" data-id="${quizData.id}">
                        <div class="ans-banner-container">
                            <img class="quiz-cover-image" src="${this.imagePatch}${quizData.image}" alt="Quiz Cover Image">
                            <img src="pics/logo.png" class="ans-overlay" alt="LGI Overlay Logo">
                        </div>
                        ${quizData.transition ? `
                        <div class="quiz-info">
                            <p class="quiz-transition" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">${quizData.transition}</p>
                        </div>` : ""}
                        <div class="quiz-info">
                            <p class="quiz-desc" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false; delay: 500">${quizData.question}</p>
                            <div class="quiz-options">
                                ${Object.entries(quizData.answers).map(([key, value]) => `
                                <div class="quiz-option" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true; delay: 600">
                                    <input id="quiz-${quizData.id}-${key}" type="radio" name="quiz-${quizData.id}" value="${key}">
                                    <label for="quiz-${quizData.id}-${key}">
                                        ${value}
                                    </label>
                                </div>`).join("")}
                            </div>
                        </div>
                    </div>`;

          const quizOptions = document.querySelectorAll(".quiz-option input");

          if (quizOptions.length > 0) {
            quizOptions.forEach((option) => {
              option.addEventListener("change", () => {
                quizOptions.forEach((el) => el.setAttribute("disabled", true));

                const selectedInput = document.querySelector(".quiz-option input:checked");

                if (selectedInput) {
                  const answer = selectedInput.value;
                  this.userAnswers.push({ quizID, answer });
                  console.log("renderQuiz => userAnswers -", this.userAnswers);

                  setTimeout(() => {
                    if (isLastQuiz) {
                      this.showResult();
                    } else {
                      this.renderQuiz(quizID + 1);
                    }
                  }, 500);
                }
              });
            });
          }
        }
      }
    }
  }






  showResult() {
    console.log("showResult => userAnswers -", this.userAnswers);
    if (this.userAnswers && this.userAnswers.length) {
      // const answerString = this.userAnswers
      //   .map((a) => a.answer.toLowerCase())
      //   .join(",");
      // // console.log( 'showResult => answerString -', answerString );
      // const resultData = this.RESULT.find(
      //   (r) => r.formatCheck === answerString
      // );
      // console.log("showResult => resultData -", resultData);

      // if (resultData) {
      //   location.href = resultData.url;
      // }

      let answerArray = this.userAnswers.map((item) => item.answer.charAt(0));
      function countElements(value) {
        return answerArray.filter((x) => x === value).length;
      }
      console.log("A", countElements("A"));
      console.log("----------------");
      console.log("B", countElements("B"));
      console.log("----------------");
      console.log("C", countElements("C"));
      console.log("----------------");
      console.log("D", countElements("D"));
      console.log("----------------");

      // ALLOCATING TO EACH QUESTIONS' ANSWER TO RETIREMENT GOAL (PUT ALL HERE) !!CHECK
      if (countElements("A") > countElements("B") && countElements("A") > countElements("C") && countElements("A") > countElements("D")){
          let fistAnswerKey = "A";
          console.log({ fistAnswerKey });
      }  
      else if (countElements("B") > countElements("A") && countElements("B") > countElements("C") && countElements("B") > countElements("D")){
        let secondAnswerKey = "B";
        console.log({ fistAnswerKey });
      }
      else if (countElements("C") > countElements("A") && countElements("C") > countElements("B") && countElements("C") > countElements("D")){
        let thridAnswerKey = "C";
        console.log({ fistAnswerKey });
      }
      else if (countElements("D") > countElements("A") && countElements("D") > countElements("B") && countElements("D") > countElements("C")){
        let fourthAnswerKey = "D";
        console.log({ fistAnswerKey });
      }
      
      // let fistAnswerKey =
      //   countElements("A") > countElements("B")
      //     ? "A"
      //     : countElements("I") > countElements("E")
      //       ? "I"
      //       : "E";

      // let secondAnswerKey =
      //   countElements("N") > countElements("S")
      //     ? "N"
      //     : countElements("S") > countElements("N")
      //       ? "S"
      //       : "N";
      // console.log({ secondAnswerKey });
      // let thridAnswerKey =
      //   countElements("T") > countElements("F")
      //     ? "T"
      //     : countElements("F") > countElements("T")
      //       ? "F"
      //       : "T";
      // console.log({ thridAnswerKey });
      // let fourthAnswerKey =
      //   countElements("P") > countElements("J")
      //     ? "P"
      //     : countElements("J") > countElements("P")
      //       ? "J"
      //       : "P";
      // console.log({ fourthAnswerKey });

      let answerString = [
        fistAnswerKey,
        // secondAnswerKey,
        // thridAnswerKey,
        // fourthAnswerKey,

      ].join("");
      console.log({ answerString });
      const resultData = this.RESULT.find(
        (r) => r.formatCheck === answerString
      );
      console.log({ resultData });
      if (resultData) {
        location.href = resultData.url;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const quiz = new Quiz();
  quiz.run();
});