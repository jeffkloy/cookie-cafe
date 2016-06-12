var money = 20, numOfCookies = 0, price = 1, batchPrice = 20, profit = 0, revenue = 0, cookiesLeft = 0, moneySpent = 0,
customerSatisfaction = 0;
var priceNumFinal = 0;

function buyBatch(num){
	console.log("this is buyBatch " + num);
	if(num*batchPrice > money){
		$(".batchError").text("Woah! You don't have enough money to buy that many.");
	}else{
		money -= num*batchPrice;
	}
	numOfCookies *= num*24;
	moneySpent += num*batchPrice;
}

function setPrice(val){
	if (val > 4){
		$(".priceEror").text("Woah! That's a little expensive for a cookie.");
	}
	if(val > 1){
		$(".priceEror").text("No way you can make a profit at those prices!");
	}else{
		price = val;
	}

}

function sellCookies(){
	if(price === 4){
		cookiesLeft += numOfCookies - Math.ceil(numOfCookies * 0.50);
	}
	if(price === 3){
		cookiesLeft += numOfCookies - Math.ceil(numOfCookies * 0.75);
	}
	if(price > 2){
		cookiesLeft += 0;
	}
	getProfit(numOfCookies - cookiesLeft);
}


function getProfit(sold){
	revenue = (numOfCookies-cookiesLeft)*price;
	profit = revenue - moneySpent;
}

function addBatchNum(){
	var batchNumVal = $(".batchNum").text();
	batchNumVal = parseInt(batchNumVal);
	batchNumVal++;
	$(".batchNum").text(batchNumVal);
}

function minusBatchNum(){
	var batchNumVal = $(".batchNum").text();
	batchNumVal = parseInt(batchNumVal);
	if(batchNumVal <= 1){
		return;
	}
	batchNumVal--;
	$(".batchNum").text(batchNumVal);
}

function addPriceNum(){
	var priceNumVal = $(".priceNum").text();
	priceNumVal = parseInt(priceNumVal);
	priceNumVal++;
	$(".priceNum").text(priceNumVal);
	priceNumFinal += priceNumVal;
}

function minusPriceNum(){
	priceNumVal = parseInt(priceNumVal);
	if(priceNumVal === 1){
		priceNumFinal = priceNumVal;
		return;
	}
	priceNumVal--;
	$(".priceNum").text(priceNumVal);
}


$(document).ready(function(){
	$(".playBtn").load("");
	$(".sellBtn").disabled = true;
	$(".batchBtn").click(function(){
		console.log($(".batchNum").text());
		buyBatch($(".batchNum").text());
	});
	$("#batchNumPlus").click(function(){
		addBatchNum();
	});
	$("#batchNumMinus").click(function(){
		minusBatchNum();
	});
	$("#priceNumPlus").click(function(){
		addPriceNum();
	});
	$("#priceNumMinus").click(function(){
		minusPriceNum();
	});
	$(".priceBtn").click(function(){setPrice($(".priceNum").text())});
	if (price < 4 && price > 1){
		$(".sellBtn").disabled = false;
	}
	$(".sellBtn").load("");

	console.log(priceNumFinal + " this is priceNumFinal");
});
