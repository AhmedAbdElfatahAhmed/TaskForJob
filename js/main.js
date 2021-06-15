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

// let ul = document.createElement("ul");

clickedSpan.forEach((item) => {
let ul = document.createElement("ul");
  item.appendChild(ul);
  for (let i = 0; i < numbers.length; i++) {
    let textli=document.createTextNode(numbers[i])
    let li = document.createElement("li");
    ul.appendChild(li);
    li.append(textli)
    ul.className="ul-style"
    li.className="li-style"
  }

item.onclick=(e)=>
{   
  ul.classList.toggle("ul-style");
  const listItems = ul.children;
  const listArray = Array.from(listItems);
  listArray.forEach(list=>
    {
      list.onclick=(e)=>
      {
   console.log(e.target.innerHTML)
      }
    })
    
}


});



/** loading page */


$("document").ready(function(){

  $(".loader-cover").fadeOut(1000)
  
  });


















// Start preloader fadeOutEffect function
function fadeOutEffect() {
  var fadeTarget = document.querySelector(".loader-cover");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 100);
}

// End preloader fadeOutEffect function



// fadeOutEffect() ;
