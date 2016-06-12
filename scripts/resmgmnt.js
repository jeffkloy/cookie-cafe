var money = 20,
  numOfCookies = 0,
  price = 1,
  batchPrice = 20,
  profit = 0,
  revenue = 0,
  cookiesLeft = 0,
  moneySpent = 0,
  customerSatisfaction = 0;
var finalPrice = 1;

function buyBatch(num) {
  if (num * batchPrice > money) {
    $(".batchError").text("Whoa! You don't have enough money to buy that many.");
  } else {
    money -= num * batchPrice;
    $(".batchError").text("Your batch quantity is reasonable!");
  }
  console.log(numOfCookies);
  numOfCookies += num * 24;
  moneySpent += num * batchPrice;
}

function setPrice(val) {
  if (val > 4) {
    $(".priceEror").text("Whoa! That's a little expensive for a cookie.");
  }
  if (val < 1) {
    $(".priceEror").text("No way you can make a profit at those prices!");
  } else {
    price = val;
    $(".priceEror").text("Your price is reasonable!");
  }
}

function sellCookies() {
  finalPrice = parseInt(finalPrice);
  if (finalPrice === 4) {
    cookiesLeft += numOfCookies - Math.ceil(numOfCookies * 0.50);
  }
  if (finalPrice === 3) {
    cookiesLeft += numOfCookies - Math.ceil(numOfCookies * 0.75);
  }
  if (finalPrice <= 2) {
    cookiesLeft += 0;
  }
  getProfit(numOfCookies - cookiesLeft);

  $("#moneySpent").text(moneySpent);
  $("#revenue").text(revenue);
  $("#profit").text(profit);
  $("#cookiesLeft").text(cookiesLeft);
  $("#customerSatisfaction").text(customerSatisfaction);
  $(".summary-content").show();
  $(".user-settings").hide();
}


function getProfit(sold) {
  revenue = (numOfCookies - cookiesLeft) * price;
  profit = revenue - moneySpent;
}

function addBatchNum() {
  var batchNumVal = $(".batchNum").text();
  batchNumVal = parseInt(batchNumVal);
  batchNumVal++;
  $(".batchNum").text(batchNumVal);
}

function minusBatchNum() {
  var batchNumVal = $(".batchNum").text();
  batchNumVal = parseInt(batchNumVal);
  if (batchNumVal <= 1) {
    return;
  }
  batchNumVal--;
  $(".batchNum").text(batchNumVal);
}

function addPriceNum() {
  var priceNumVal = $(".priceNum").text();
  priceNumVal = parseInt(priceNumVal);
  priceNumVal++;
  $(".priceNum").text(priceNumVal);
}

function minusPriceNum() {
  var priceNumVal = $(".priceNum").text();
  priceNumVal = parseInt(priceNumVal);
  if (priceNumVal === 1) {
    priceNumFinal = priceNumVal;
    return;
  }
  priceNumVal--;
  $(".priceNum").text(priceNumVal);
}

$(document).ready(function() {
  $(".playBtn").load("");
  $(".sellBtn").disabled = true;
  $(".batchBtn").click(function() {
    buyBatch($(".batchNum").text());
  });
  $("#batchNumPlus").click(function() {
    addBatchNum();
  });
  $("#batchNumMinus").click(function() {
    minusBatchNum();
  });
  $("#priceNumPlus").click(function() {
    addPriceNum();
  });
  $("#priceNumMinus").click(function() {
    minusPriceNum();
  });
  $(".priceBtn").click(function() {
    setPrice($(".priceNum").text());
  });
  $("#save-summary-info").click(function() {
    finalPrice = $(".priceNum").text();
    console.log(finalPrice);
    sellCookies();
  });
  if (price < 4 && price > 1) {
    $(".sellBtn").disabled = false;
  }
  $(".sellBtn").load("");

  $(".summary-content").hide();

});
