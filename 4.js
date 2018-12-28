


	function getHighestPalindrome(high, low) {
  var highest = 0;
  for(var i=high; i>=low; i--) 
  {
	   for(var j = high; j >= low; j--) 
     {
        sum =i * j;
        if(sum <= highest)
        {
          break;
	      }
        if(is_palindrome(sum.toString()))
        {
            highest = max(highest, sum);
	      }
     }
  }
  return highest;
}

function reverse(string) {
  var array = string.split('').reverse();
  var out   = '';
  for(key in array) 
  {
	   out += array[key];
  }
  return out;
}

function max(a,b) {
  if(a > b) {
	return a;
  }
  return b;
}

function is_palindrome(string) {
  return string == reverse(string);
}

console.log(getHighestPalindrome(999, 100));
	
