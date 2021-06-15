// Start preloader fadeOut function
function fadeOut(elem, ms) {
  if (!elem) return;

  if (ms) {
    let opacity = 1;
    let timer = setInterval(function () {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}

fadeOut(document.querySelector(".loader-cover"), 1000);

// End preloader fadeOut function

// initialize the Green Audio Player
new GreenAudioPlayer(".toAnswer-audio");
// methods for initializing several Green Audio Players:
GreenAudioPlayer.init({
  selector: ".player",
  stopOthersOnPlay: true,
});

// Start play listen and number audio
const audioIcon = document.querySelector(".caption #audio-icon");
audioIcon.onclick = () => {
  document.querySelector("audio#listenAndNumber").play();
};
// End play listen and number audio

// declar a five numbers
let numbers = [1, 2, 3, 4, 5];
let itemsContent = document.querySelectorAll(".border-container .content");
let clickedSpan = document.querySelectorAll(".border-container .content span");
clickedSpan.forEach((item) => {
  let ul = document.createElement("ul");
  item.appendChild(ul);
  for (let i = 0; i < numbers.length; i++) {
    let textli = document.createTextNode(numbers[i]);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.append(textli);
    ul.className = "ul-style";
    li.className = "li-style";
  }
  const listItems = ul.children;
  const listArray = Array.from(listItems);
  item.onclick = (e) => {
    ul.classList.toggle("ul-style");

    listArray.forEach((list) => {
      list.onclick = (e) => {
        if (e.target.innerHTML == item.dataset.answer) {
          correctAnwer();
          document.getElementById("correct").play();
        } else {
          wrongAnwer();
          document.getElementById("wrong").play();
        }
      };
    });
  };

  // function to correct Answer
  function correctAnwer() {
    item.style.setProperty("--check-answer", "#0fa0c5");
    item.parentElement.classList.add("disabled");
    item.style.border = "2px solid rgb(163, 207, 98)";
  }
  // function to wrong Answer
  function wrongAnwer() {
    // Add red border when answer is wrong
    item.classList.add("redBorder");
    setInterval(function () {
      item.classList.remove("redBorder");
    }, 1000);
  }
  let replayToAns = document.getElementById("replay-icon");
  let showAns = document.getElementById("showAns-icon");
  let spanElement = Array.from(clickedSpan);

  // show anwer when clicked on showAns icon
  showAns.onclick = () => {
    for (let i = 0; i < spanElement.length; i++) {
      spanElement[i].style.setProperty("--check-answer", "#0fa0c5");
      spanElement[i].parentElement.classList.add("disabled");
      spanElement[i].style.border = "2px solid rgb(163, 207, 98)";
    }
  };

  // replay to anwer when clicked on replay icon
  replayToAns.onclick = () => {
    for (let i = 0; i < spanElement.length; i++) {
      spanElement[i].style.setProperty("--check-answer", "transparent");
      spanElement[i].parentElement.classList.remove("disabled");
      spanElement[i].style.border = "2px solid rgb(0, 0, 0)";
    }
  };
});
