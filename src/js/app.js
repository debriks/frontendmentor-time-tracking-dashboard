let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 83,
        previous: 98,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll(".menu__options--btn");

const activateClickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

const clearActivities = () => {
  const activities = document.querySelectorAll(".activity");
  activities.forEach((a) => a.remove());
};

const renderCards = (clickedOption) => {
  clearActivities();
  const dashBoard = document.querySelector("main.dashboard");

  const calcTimeFrame = (option) => {
    if (option === "daily") {
      return "Yesterday";
    } else if (option === "weekly") {
      return "Last Week";
    } else if (option === "monthly") {
      return "Last Month";
    }
  };

  data.forEach((activity) => {
    const name = activity.title;
    const nameClass = activity.title.toLowerCase().replace(" ", "-");
    const activityClass = name.toLowerCase().replace(" ", "-");
    const timeFrameData = activity.timeframes[clickedOption];
    const previousTimeFrame = calcTimeFrame(clickedOption);
    const section = document.createElement("section");
    section.classList.add("activity", activityClass);
    const stringToInject = ` 
         <div class="activity__bg ${nameClass}">
          <img src="/images/icon-${activityClass}.svg" alt="${activityClass} icon" />
        </div>
        <div class="activity__infos">
          <div class="activity__infos--header">
            <h2>${name}</h2>
            <div>
              <img src="/images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
          </div>
          <div class="activity__time">
            <h3 class="time__current">${timeFrameData.current}hrs</h3>
            <div class="activity__time--previous">
              <p class="previous__timeframe">${previousTimeFrame}</p>
              <p>&nbsp; -&nbsp;</p>
              <p class="timeframe__data">${timeFrameData.previous}hrs</p>
            </div>
          </div>
        </div>`;

    section.innerHTML = stringToInject;
    dashBoard.append(section);
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    activateClickedButton(button);
    const clickedOption = button.dataset.option; // to access the info we set in the index.html 'data-option' field
    renderCards(clickedOption);
  });
});

buttons[1].click(); //JS clicks on this button for us

// Big Thanks to Seer Studio for an amazing tutorial, if you want to check it out:
// https://www.youtube.com/watch?v=l9Qw8y3LfCY&t=271s&ab_channel=SeerStudio%28GrizhlieCodes%29
