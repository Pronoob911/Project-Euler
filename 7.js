

	function checkPrime(a)
	{
		for(var i=2;i<(a/2);i++)
		{
      		if(a%i==0)
      		{

        		return 0;
        	}
   		}

      return 1;

	}
	


	var flag=0, prime, n=2;
	while(flag<=10001)
	{
		if(checkPrime(n)==1)
		{
			flag++;
			prime=n;

		}
		n++;
	}
	console.log(prime);
