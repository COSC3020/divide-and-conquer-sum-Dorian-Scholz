
function divideAndConquerSum(a) 

{
    
    function helper(arr) 
    {
        
        if (arr.length === 0) return 0;
        if (arr.length === 1) return arr[0];

        
        const third = Math.ceil(arr.length / 3);
        const firstPart = arr.slice(0, third);
        const secondPart = arr.slice(third, 2 * third);
        const thirdPart = arr.slice(2 * third);

        
        return helper(firstPart) + helper(secondPart) + helper(thirdPart);
    }

   
    return helper(a);
}

module.exports = { divideAndConquerSum };
