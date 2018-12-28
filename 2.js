
var a=1, b=2;
	var sum=2;

	while(a+b<4000000)
	{
		var c=a+b;
		if(c%2==0)
		{
			sum+=c;
		}

		a=b;
		b=c;
	}

	console.log(sum);
	
