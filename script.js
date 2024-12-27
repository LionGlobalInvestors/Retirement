class Quiz {
  constructor() {
    this.imagePatch = `pics`;
    // this.imagePatch = `public/images/quiz/`;
    // this.imagePatch = `public/images/`;

    this.QUIZ = [
      {
        image: `quiz-Q1.png`,
        transition: ``,
        question: `You begin your adventure at the Singapore Flyer, where you are greeted by the shimmering waters and city skyline. As you take in the sights from the top of the flyer, you see a single orchid in front of you.<br><br> Do you ...`,
        answers: {
          // Sensing: `Admire the orchid’s details and colours`,
          // Intuition: `Think about what the orchid symbolises`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q2.png`,
        transition: `Your choice illuminates a pathway of flowers that leads you to the Shilin Night Market in Taipei.`,
        question: `The scent of street food fills the air, blending with the lively buzz of vendors. <br><br> Do you ... `,
        answers: {
          // Introversion: `Prefer to explore the market quietly, soaking in the sights and sounds`,
          // Extroversion: `Engage with the vendors and make every interaction a part of the experience`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q3.png`,
        transition: `A lantern vendor hands you a magical lantern that lifts you into the sky, carrying you into the clouds.`,
        question: `Upon landing, you find yourself standing atop Victoria Peak in Hong Kong. The city lights sparkle like stars below you.<br><br> Do you ... `,
        answers: {
          // Thinking: `Examine the lantern and wonder how it works`,
          // Feeling: `Focus on the magical and emotional experience`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q4.png`,
        transition: `A mystical fog envelops you, and as it clears, you find yourself at the Amber Fort in Jaipur, a majestic fortress perched on a hilltop.`,
        question: `A peacock gracefully approaches, its vibrant feathers fanned out in a dazzling display. <br><br> Do you ... `,
        answers: {
          // Judging: `Avoid the peacock and stay cautious of your surroundings `,
          // Perceiving: `Observe the peacock’s behaviour and adapt to the unfolding situation`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q5.png`,
        transition: `A shimmering peacock feather floats into your hand. The moment you touch it, you’re whisked away to the Great Wall of China.`,
        question: `Suddenly, a tiny dragon appears before your eyes!<br><br> Do you ... `,
        answers: {
          // Sensing: `Find the size of the dragon amusing`,
          // Intuition: `Think about the significance of the dragon appearing now`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q6.png`,
        transition: `You stumble into a glowing portal and emerge at the Borobudur Temple in Indonesia.`,
        question: `The early morning mist swirls around the ancient Buddhist monument, creating a mystical atmosphere. <br><br> Do you ... `,
        answers: {
          // Introversion: `Find a quiet spot to relax and catch your breath`,
          // Extroversion: `Seek out other visitors in the area to learn more about the temple`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q7.png`,
        transition: `A gentle breeze carries the scent of incense. As you take a deep breath and close your eyes, a wave of calm washes over you. `,
        question: `When you open your eyes, you find yourself at the top Marina Bay Sands, by the infinity pool.<br><br> Do you ... `,
        answers: {
          // Thinking: `Assess your surroundings and wonder where everyone is`,
          // Feeling: `Relish the moment and enjoy the serene setting by the pool`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q8.png`,
        transition: `Water droplets start forming all around. `,
        question: `All at once, they splash to the ground and you find yourself at the Taroko Gorge in Taiwan, surrounded by marble cliffs and turquoise rivers. You also notice several groups of people around. <br><br> Do you ... `,
        answers: {
          // Judging: `Follow a planned route to visit the main attractions`,
          // Perceiving: `Wander the gorge freely, enjoying unexpected discoveries`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
        },
      },
      {
        image: `quiz-Q9.png`,
        transition: `You take two steps forward, and suddenly, the sky darkens.`,
        question: `You find yourself at the vibrant Temple Street Night Market in Hong Kong, surrounded by stalls brimming with trinkets, clothes and food.<br><br> Do you ... `,
        answers: {
          // Sensing: `Get drawn to the sights, sounds and smells`,
          // Intuition: `Wonder if night markets will always exist and what they represent`,
          Capital: `AAAAAAAAAAAA`,
          Wealth: `BBBBBBBBBBBB`,
          Income: `CCCCCCCC`,
          Legacy: `DDDDDDDDDD`,
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

      // e	n	t	p
      // i	s	f	j
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
      // console.log("T", countElements("T"));
      // console.log("F", countElements("F"));
      // console.log("----------------");
      // console.log("P", countElements("P"));
      // console.log("j", countElements("j"));
      console.log("----------------");

      // ALLOCATING TO EACH QUESTIONS' ANSWER TO RETIREMENT GOAL (PUT ALL HERE) !!CHECK
      let fistAnswerKey =
        countElements("E") > countElements("I")
          ? "E"
          : countElements("I") > countElements("E")
            ? "I"
            : "E";
      console.log({ fistAnswerKey });
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