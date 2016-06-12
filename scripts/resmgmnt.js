var money = 20, numOfCookies = 0, price = 1, batchPrice = 20;

function buyBatch(num){
	money -= num*batchPrice;
	numOfCookies *= num*24;
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


$(document).ready(function(){

	$(".sellBtn").disabled = true;
	buyBatch((".batchNum").text());
	setPrice((".priceNum").text());
	if (price > 4 && price < 1){
		$(".sellBtn").disabled = false;
	}
	$(".sellBtn").load("");

	

});
