class Quiz {
  constructor() {
    this.audio = null;
    this.QUIZ = [
      {
        image: `quiz-Q1.jpg`,
        question: `As you prepare to embark on a 14 days trip, you pack your bag. <br> How much clothing do you pack?`,
        answers: {
          Wealth: `Bring 2 - 3 sets of clothes only`,
          Capital: `Pack extra clothing in case of weather changes`,
          Legacy: `Pack an outfit for each day`,
          Income: `Pack half and buy the rest there`,
        },
      },
      {
        image: `quiz-Q2.jpg`,
        question: `Who is coming with you on your trip?`,
        answers: {
          Capital: `2 - 3 friends to split cost`,
          Legacy: `Bring the whole kampong of family and / or friends`,
          Wealth: `Traveling solo for adventure`,
          Income: `Join a tour group for convenience`,
        },
      },
      {
        image: `quiz-Q3.jpg`,
        question: `It's time to head to the airport. <br> When do you reach the airport?`,
        answers: {
          Legacy: `3 hours early to go shopping/eating`,
          Capital: `3 hours early because kiasu`,
          Income: `2 hours before to be just right on time`,
          Wealth: `1 hour before your flight`,
        },
      },
      {
        image: `quiz-Q4.jpg`,
        question: `You're told that your flight will be delayed overnight. <br> What do you do first?`,
        answers: {
          Income: `Pay extra to get onto the next available flight`,
          Wealth: `Request for accommodation and meal allowance from the airline company`,
          Capital: `Wait for the delayed flight patiently`,
          Legacy: `Start checking how much can be claimed from travel insurance`,
        },
      },
      {
        image: `quiz-Q5.jpg`,
        question: `Your flight has started boarding and you're feeling hungry. <br> What do you do?`,
        answers: {
          Wealth: `Eat at a restaurant at the transit area believing you can finish eating in 15 minutes`,
          Capital: `Wait for the in-flight meal`,
          Legacy: `Get a snack at the convenience store and eat while waiting to board the plane`,
          Income: `Queue to buy a takeaway at transit area and eat on the aircraft once you board`,
        },
      },
      {
        image: `transition_1.jpg`,
        isTransition1: true,
        question: ``,
        answers: {
        },
      },
      { // plane departure
        image: `departure.gif`,
        isTransition2: true,
        question: ``,
        answers: {
        },
      },
      {
        isTransition2: false,
        image: `quiz-Q6.jpg`,
        question: `How do you keep yourself entertained on the flight?`,
        answers: {
          Wealth: `Binge-watch a whole season of a show`,
          Legacy: `Listen to music`,
          Capital: `Read a book`,
          Income: `Sleep throughout the whole flight`,
        },
      },
      // landing gif
      {
        image: `landing.gif`,
        isTransition3: true,
        question: ``,
        answers: {
        },
      },
      {
        image: `quiz-Q7.jpg`,
        question: `The plane has landed, and everyone is rushing to get out. What do you do?`,
        answers: {
          Wealth: `Stand up quickly to get ahead of the line`,
          Legacy: `Wait for everyone to get out before you do`,
          Capital: `Stay seated and wait for the line to move before joining`,
          Income: `Join the crowd but move at a steady pace`,
        },
      },
      {
        image: `quiz-Q8.jpg`,
        question: `At the baggage claim, you notice someone struggling to lift their luggage. <br> Do you:`,
        answers: {
          Legacy: `Offer to help them`,
          Income: `Take your luggage and walk away`,
          Capital: `Look around to see if anyone else is offering help`,
          Wealth: `Take their luggage for them`,
        },
      },
      { //only show when got tie-breaker
        image: `quiz-Q9.jpg`,
        question: `You are at the end of your trip, what souvenirs do you bring home? `,
        answers: {
          Capital: `Just the photos/memories`,
          Wealth: `Unique collectibles / local crafts`,
          Income: `Popular local specialties purchased during the tour`,
          Legacy: `Local snacks for family and friends`,
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
      this.playMusic();
      this.renderQuiz(this.currentQuizID);
    }
  }

  renderQuiz(quizID) {

    console.log(quizID + ", " + this.currentQuizID)
    if (quizID && !isNaN(quizID)) {
      const quizData = this.QUIZ.find((v) => v.id === quizID);
      const isLastQuiz = quizID >= this.QUIZ.length-1;

      if (quizData) {
        document.title = `Retirement Quiz | Lion Global Investors`;

        const quizRender = document.getElementById("quiz-render");

        if (quizRender) {
          quizRender.innerHTML = `
                    <div class="uk-card quiz-card" data-id="${quizData.id}">
                        <div class="ans-banner-container">
                            <img class="quiz-cover-image" src="pic/${quizData.image}" alt="Quiz Cover Image">
                        </div>
                        <div class="quiz-info">
                            
                            <div class="quiz-options">
                                ${Object.entries(quizData.answers).map(([key, value]) => `
                                <div class="quiz-option">
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
                      this.currentQuizID = quizID + 1;
                    }
                  }, 500);
                }
              });
            });
          }
          if (quizData.isTransition1) {
            this.slideUpBoardingPass();
          }
          else if (quizData.isTransition2) {
            this.pulsingPlaneButton1();
          }
          else if (quizData.isTransition3) {
            this.pulsingPlaneButton2();
          }
        }
      }
    }
  }

  playMusic() {
    if (!this.audio) {
      this.audio = new Audio('audio/bgm.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.7;
      this.audio.play().catch(err => {
        console.warn("Autoplay blocked, waiting for user interaction.");
          const playOnUserInteraction = () => {
          this.audio.play().catch(err => console.error("Audio play still blocked:", err));
          document.removeEventListener("click", playOnUserInteraction);
        };
  
        document.addEventListener("click", playOnUserInteraction);
      });
    }
  }
  
  slideUpBoardingPass() {
    const boardingPassImage = document.createElement("img");
    const quizRender = document.getElementById("quiz-render");
    quizRender.appendChild(boardingPassImage);
    // give it animate class that is in styles.css
    setTimeout(() => {
      boardingPassImage.classList.add("animate");
    }, 100);
    setTimeout(() => {
      // destroy the boardingPass + move on after 3500ms/3.5s
      boardingPassImage.remove();
      this.renderQuiz(this.currentQuizID + 1);
      this.currentQuizID += 1
    }, 3500);
  }

  pulsingPlaneButton1() {
    const nextQuiz = () => {
      this.renderQuiz(this.currentQuizID + 1);
      this.currentQuizID += 1;
      document.removeEventListener("click", nextQuiz);
    };
    document.addEventListener("click", nextQuiz);

    const audio = new Audio('audio/takeoff_edit.mp3');
    audio.loop = false;
    audio.volume = 0.5;
    

    audio.play();

  }

  pulsingPlaneButton2() {
    const nextQuiz = () => {
      this.renderQuiz(this.currentQuizID + 1);
      this.currentQuizID += 1;
      document.removeEventListener("click", nextQuiz);
    };
    document.addEventListener("click", nextQuiz);

    const audio = new Audio('audio/landing_edit.mp3');
    audio.loop = false;
    audio.volume = 0.5;
    

    audio.play();
  }

  showResult() {
    console.log("showResult => userAnswers -", this.userAnswers);
  
    if (this.userAnswers && this.userAnswers.length) {
      const counts = this.userAnswers.reduce((acc, { answer }) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
      }, {});
  
      const maxCount = Math.max(...Object.values(counts));
      const dominantCategories = Object.keys(counts).filter(
        (key) => counts[key] === maxCount
      );
  
      console.log("Dominant Categories:", dominantCategories);
  
      let dominantCategory;
  
      if (dominantCategories.length > 1) {
        console.log("Tie detected, initiating tiebreaker...");
  
        const quizRender = document.getElementById("quiz-render");
  
        if (quizRender) {
          const tiebreakerQuiz = this.QUIZ.find(
            (quiz) =>
              quiz.question ===
              "You are at the end of your trip, what souvenirs do you bring home? "
          );
  
          if (tiebreakerQuiz) {
            const filteredAnswers = Object.fromEntries(
              Object.entries(tiebreakerQuiz.answers).filter(([key]) =>
                dominantCategories.includes(key)
              )
            );
            quizRender.innerHTML = `
              <div class="uk-card quiz-card">
              <div class="ans-banner-container">
                <img class="quiz-cover-image" src="pic/${tiebreakerQuiz.image}" alt="Tiebreaker Question">
              </div>
              <div class="quiz-info">
                <p class="quiz-desc">
                
                </p>
                <div class="quiz-options">
                  ${Object.entries(filteredAnswers)
                    .map(
                      ([key, value]) => `
                        <div class="quiz-option">
                          <input id="tiebreaker-${key}" type="radio" name="tiebreaker" value="${key}">
                          <label for="tiebreaker-${key}">
                            ${value}
                          </label>
                        </div>`
                    )
                    .join("")}
                </div>
              </div>
            </div>`;
            const tiebreakerOptions = document.querySelectorAll(".quiz-option input");
  
            if (tiebreakerOptions.length > 0) {
              tiebreakerOptions.forEach((option) => {
                option.addEventListener("change", () => {
                  tiebreakerOptions.forEach((el) => el.setAttribute("disabled", true));
  
                  const selectedInput = document.querySelector(".quiz-option input:checked");
  
                  if (selectedInput) {
                    dominantCategory = selectedInput.value;
                    console.log("Tiebreaker Winner:", dominantCategory);
  
                    this.processResult(dominantCategory);
                  }
                });
              });
            }
          } else {
            console.error("Tiebreaker question not found in QUIZ data.");
          }
        }
      } else {
        dominantCategory = dominantCategories[0];
        console.log("Dominant Category:", dominantCategory);
  
        const resultData = this.RESULT.find(
          (r) => r.format.toLowerCase().includes(dominantCategory.toLowerCase())
        );
  
        console.log("Result Data:", resultData);
  
        if (resultData) {
          location.href = resultData.url;
        } else {
          console.error("No matching result found.");
        }
      }
    }
  }  
  
  processResult(dominantCategory) {
    if (!dominantCategory) {
      console.error("No dominant category provided to processResult.");
      return;
    }

    const resultData = this.RESULT.find(
      (r) => r.format.toLowerCase().includes(dominantCategory.toLowerCase())
    );

    if (resultData) {
      console.log("Processing Result:", resultData);
      location.href = resultData.url;
    } else {
      console.error("No matching result found for the category:", dominantCategory);
    }
  }

}

function prefetchImages(folderPath, fileNames) {
  const baseURL = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');

  fileNames.forEach(fileName => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `${baseURL}${folderPath}${fileName}`;
      document.head.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const imageFiles = [
    "answers.png",
    "boarding_pass.png",
    "capital.jpg",
    "departure.gif",
    "income.jpg",
    "landing.gif",
    "legacy.jpg",
    "pilot.jpg",
    "quiz-Q1.jpg",
    "quiz-Q2.jpg",
    "quiz-Q3.jpg",
    "quiz-Q4.jpg",
    "quiz-Q5.jpg",
    "quiz-Q6.jpg",
    "quiz-Q7.jpg",
    "quiz-Q8.jpg",
    "quiz-Q9.jpg",
    "results-anim.gif",
    "Retirement Map.png",
    "start.jpg",
    "transition_1.jpg",
    "transition_2.jpg",
    "wealth.jpg"
  ];
  prefetchImages('/pic/', imageFiles);
  const quiz = new Quiz();
  quiz.run();
});