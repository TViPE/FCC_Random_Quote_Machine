var currentQuote = "";
var currentAuthor = "";
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function getQuote() {
	$.ajax ({
		headers: {
			"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
			Accept: "application/json",
  			"Content-Type": "application/x-www-form-urlencoded"
  		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
		success: function(response) {
			var r = JSON.parse(response);
			currentQuote = r.quote;
			currentAuthor = r.author;
			$(".text").html(currentQuote);
			$(".author").html(currentAuthor);


			// Change color of elements
			var color = Math.floor(Math.random() * colors.length);
			//console.log(color);
			$(".container-fluid").animate({
				backgroundColor: colors[color],
				color: colors[color]
			});
		}
	})
}

$(function(){
	getQuote();
	$("#new-quote").on('click', getQuote);
});