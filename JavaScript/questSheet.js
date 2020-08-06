let modal = document.getElementById("quest-Accept-Model");
let btn = document.getElementById("button-Accept");
let accept = document.getElementById("Accept");

// accept.addEventListener("click", function () {
//   if (accept.innerHTML === "Accept Quest") {
//     document.getElementById("button-Accept").disabled = true;
//     modal.style.display = "block";
//     document.getElementById("Decline").innerHTML = "Forget Quest";
//     accept.innerHTML = "Complete Quest";
//     setTimeout(() => {
//       modal.style.display = "none";
//     }, 1500);
//   }
// });

accept.addEventListener("click", acceptQuest);

function acceptQuest() {
  modal.style.display = "flex";
  document.getElementById("Decline").innerHTML = "Forget Quest";
  accept.innerHTML = "Complete Quest";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
  accept.removeEventListener("click", acceptQuest);
  btn.disabled = true;
}
