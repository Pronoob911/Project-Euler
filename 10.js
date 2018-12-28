


var a = 0;

    function isPrime(n)
    {
        var i = 2;
        var b = true;
        while(i<=Math.sqrt(n) && b)
        {
            if(n%i===0)
            	{
            		return false;
            	}
            i++;
        }
        return true;
    }

    for(i=2;i<2000000;i++)
    {
        if(isPrime(i))
        {
            a+=i;
        }
    }
    console.log(a);



