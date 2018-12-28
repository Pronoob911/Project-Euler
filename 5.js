
//first method is more optimal
	
	lcm(20);
	function lcm(number)
	{
		var a=1;
		for(var i=1;i<=number;i++)
		{
			a=(a*i)/(gcd(a,i));
		}
		console.log(a);
	}

	function gcd(b,c)
	{
		if(b%c!=0)
		{
			return gcd(c,b%c);
		}
		else
		{
			return c;
		}
	}







//alternate method

function isDivisible(number)
{
	for(var i=11;i<21;i++)
	{
		if((number%i)!=0)
		{
			return false;
		}

	}
	return true;
}

var number =2520;
while(true)
{
	if(isDivisible(number))
	{
		break;
	}
	number++;
}
//console.log(number);




