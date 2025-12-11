const sumAll = function(a, b) {

    if(typeof a === "number" & typeof b === "number")
    {
        if(a > -1 & b > -1)
        {
            if(Number.isInteger(a) & Number.isInteger(b))
            {
                let total= 0;

                let start = a > b? b : a;
                let end = a > b? a : b;

                for(let i= start; i<=end; i++)
                {
                    total += i;
                }

                return total;
            }
            else
            {
                return "ERROR";
            }
        }
        else
        {
            return "ERROR";
        }
    }
    else
    {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
