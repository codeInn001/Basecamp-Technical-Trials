 function palindrome(word) {
    
        var array = [];
        for (var i = 0, len = word.length; i <= len; i++)
         array.push(word.charAt(len - i));
         return array.join('');
      
 }

 console.log(palindrome('nurses run'))
//  let str = word.toLowerCase;
//  for(let i = 0; i < Math.round(str.length/2); i++) {
//     if(str[i] !== str[str.length - 1 - i]) {
//         return 'no'
//     }
//  }
 
//  return 'ma'