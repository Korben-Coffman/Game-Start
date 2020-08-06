let currentExp1 = 0;
let neededExp1 = 100;
let expPercent1 = 0;
let getExpBar1 = 0;
let skillLevel1 = 1;
let totalExp1 = 0;
let expAdded = 50;
let expMultiplierPerLevel = 1.2;

document.getElementById("skill-level-1").innerHTML = skillLevel1;
getExpBar = document.querySelector(".exp-bar");
getExpBar.style.backgroundSize = expPercent1 + "% 100%";
document.getElementById("expButton").innerHTML =
  "+" + expAdded + " Experience ";

document.getElementById("expButton").addEventListener("click", function () {
  currentExp1 = currentExp1 + expAdded;
  totalExp1 = totalExp1 + expAdded;
  expPercent1 = (currentExp1 / neededExp1) * 100;
  while (currentExp1 > neededExp1) {
    skillLevel1++;
    currentExp1 -= neededExp1;
    neededExp1 *= expMultiplierPerLevel;
    expPercent1 = (currentExp1 / neededExp1) * 100;
    expPercent1 = Math.round(expPercent1);
    neededExp1 = Math.round(neededExp1);
  }
  document.getElementById("skill-level-1").innerHTML = skillLevel1;
  getExpBar = document.querySelector(".exp-bar");
  getExpBar.style.backgroundSize = expPercent1 + "% 100%";
  console.log(expPercent1 + "%");
  console.log(neededExp1 + " Exp Needed");
  console.log(totalExp1 + " Total Exp");
});
