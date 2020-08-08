// localStorage.clear();

let currentExp1;
if (localStorage.getItem("currentExp1")) {
  currentExp1 = JSON.parse(localStorage.getItem("currentExp1"));
} else {
  currentExp1 = 0;
}
let neededExp1;
if (localStorage.getItem("neededExp1")) {
  neededExp1 = JSON.parse(localStorage.getItem("neededExp1"));
} else {
  neededExp1 = 100;
}
let expPercent1;
if (localStorage.getItem("expPercent1")) {
  expPercent1 = JSON.parse(localStorage.getItem("expPercent1"));
} else {
  expPercent1 = 0;
}
let skillLevel1;
if (localStorage.getItem("skillLevel1")) {
  skillLevel1 = JSON.parse(localStorage.getItem("skillLevel1"));
} else {
  skillLevel1 = 1;
}
let totalExp1;
if (localStorage.getItem("totalExp1")) {
  totalExp1 = JSON.parse(localStorage.getItem("totalExp1"));
} else {
  totalExp1 = 0;
}
let expAdded = 50;
let expMultiplierPerLevel = 1.5;
let getExpBar1;

localStorage.setItem("totalExp1", JSON.stringify(currentExp1));
localStorage.getItem("totalExp1");

document.getElementById("skill-level-1").innerHTML = skillLevel1;
getExpBar = document.querySelector(".exp-bar");
getExpBar.style.backgroundSize = expPercent1 + "% 100%";
document.getElementById("expButton").innerHTML =
  "+" + expAdded + " Experience ";

document.getElementById("expButton").addEventListener("click", function () {
  currentExp1 += expAdded;
  localStorage.setItem("currentExp1", JSON.stringify(currentExp1));
  totalExp1 = totalExp1 + expAdded;
  localStorage.setItem("totalExp1", JSON.stringify(totalExp1));
  expPercent1 = (currentExp1 / neededExp1) * 100;
  localStorage.setItem("expPercent1", JSON.stringify(expPercent1));
  while (currentExp1 > neededExp1) {
    skillLevel1++;
    localStorage.setItem("skillLevel1", JSON.stringify(skillLevel1));
    currentExp1 -= neededExp1;
    localStorage.setItem("currentExp1", JSON.stringify(currentExp1));
    neededExp1 *= expMultiplierPerLevel;
    localStorage.setItem("neededExp1", JSON.stringify(neededExp1));
    expPercent1 = (currentExp1 / neededExp1) * 100;
    expPercent1 = Math.round(expPercent1);
    localStorage.setItem("expPercent1", JSON.stringify(expPercent1));
    neededExp1 = Math.round(neededExp1);
    localStorage.setItem("expPercent1", JSON.stringify(expPercent1));
  }
  document.getElementById("skill-level-1").innerHTML = skillLevel1;
  getExpBar = document.querySelector(".exp-bar");
  getExpBar.style.backgroundSize = expPercent1 + "% 100%";
  // console.log(expPercent1 + "%");
  console.log(neededExp1 + " Exp Needed");
  // console.log(totalExp1 + " Total Exp");
  // console.log(localStorage.getItem("currentExp1") + " Current Exp");
  // console.log(localStorage.getItem("totalExp1"));
  // console.log(localStorage.getItem("totalExp1"));
});

document
  .getElementById("clearDataButton")
  .addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
