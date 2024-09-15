console.log("test");

// store 2 global values: cookie count and cookies per second

let cookieCount = 0;
let cookiesPerSecond = 1;

const myButton = document.querySelector("button");
console.log(myButton);

function handleClick() {
  console.log("clicked!");
  cookieCount++;
  document.getElementById(
    "cookie-count"
  ).textContent = `cookie count ${cookieCount}`;
}

myButton.addEventListener("click", handleClick);

const myCountingButton = document.getElementById("cookie-button");

let clicks = 0;

function handleCounting() {
  clicks = clicks + 1;
  console.log(clicks);
  myCountingButton.textContent = `clicked ${clicks}`;
}
myCountingButton.addEventListener("click", handleCounting);

let shopUpgrades = [];

async function getShopUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const upgrades = await response.json();
  console.log(upgrades);
  return upgrades;
}
getShopUpgrades();

const shopUpgradesContainer = document.getElementById(
  "shop-upgrades-container"
);

function createUpgradeDivs() {
  const newDiv = document.createElement("div");
  newDiv.className = "upgrade-item";
  return newDiv;
}

function createUpgrades(name, cost, increase) {
  const newDiv = createUpgradeDivs();
  const amount = document.createElement("div");
  const upgradeName = document.createElement("div");
  const upgradeCost = document.createElement("div");
  const upgradeIncrease = document.createElement("div");
  const buyButton = document.createElement("button");
}

function handlecookieClicker() {
  console.log("You have clicked the button!");
}

//addEventListener("click", handleCookieClick);

//we need a timer that increases the cookieCount persecond value by 1 every second

setInterval(function () {
  cookieCount = cookieCount + cookiesPerSecond;
  console.log("I repeat myself every second");
  document.getElementById(
    "cookie-count"
  ).textContent = `cookie count ${cookieCount}`;
  document.getElementById(
    "cookies-per-second"
  ).textContent = `cookiesPerSecond ${cookiesPerSecond}`;
}, 1000);

function buyCookie() {
  cookiesPerSecond++;
  console.log("cookiesPerSecond");
}

const upgrade1 = document.getElementById("upgrade1");
upgrade1.addEventListener("click", buyCookie);

function buyCookie2() {
  cookiesPerSecond = cookiesPerSecond + 10;
  console.log("cookiesPerSecond");
}

const upgrade2 = document.getElementById("upgrade2");
upgrade2.addEventListener("click", buyCookie2);

function buyCookie3() {
  cookiesPerSecond = cookiesPerSecond + 20;
  console.log("cookiesPerSecond");
}

const upgrade3 = document.getElementById("upgrade3");
upgrade3.addEventListener("click", buyCookie3);

function buyCookie4() {
  cookiesPerSecond = cookiesPerSecond + 100;
  console.log("cookiesPerSecond");
}

const upgrade4 = document.getElementById("upgrade4");
upgrade4.addEventListener("click", buyCookie4);

function resetButton() {
  cookieCount = 0;
  cookiesPerSecond = 1;
  document.getElementById(
    "cookie-count"
  ).textContent = `cookie count ${cookieCount}`;
  document.getElementById(
    "cookies-per-second"
  ).textContent = `cookiesPerSecond ${cookiesPerSecond}`;
}

const rButton = document.getElementById("Reset");
rButton.addEventListener("click", resetButton);
