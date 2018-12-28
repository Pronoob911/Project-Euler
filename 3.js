
	var n=600851475143;
	for(var i=2;i<n;i++)
	{
		if(n%i==0)
		{
			n=n/i;
			i--;
		}
		
	}
	console.log(i);
