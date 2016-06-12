var money = 20, numOfCookies = 0, price = 1, batchPrice = 20, profit = 0, revenue = 0, cookiesLeft = 0, moneySpent = 0,
customerSatisfaction = 0;

function buyBatch(num){
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


$(document).ready(function(){

	$(".playBtn").load("");

	$(".sellBtn").disabled = true;
	$(".batchBtn").click(buyBatch((".batchNum").text()));
	$(".priceBtn").click(setPrice((".priceNum").text()));
	if (price < 4 && price > 1){
		$(".sellBtn").disabled = false;
	}
	$(".sellBtn").load("");

});
