
//first method is more optimal

	var sumOfSquares;
	var squareOfSum;

	squareOfSum=Math.pow((100*(100+1))/2,2);
	sumOfSquares=(100*(100+1)*(200+1))/6;
	console.log(squareOfSum-sumOfSquares);



	//alternate method without direct formula
	var n=100;
	var sum1=0;
	var sum2=0;
		for (var i=1;i<=n;i++)
		 {
			sum1 +=i;
			sum2 +=i * i;
		}
//console.log(sum1*sum1-sum2);



