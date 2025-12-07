const repeatString = function(text, numRep) {

    if(numRep >= 0)
    {
        let fullText = ""

        for(let i= 0; i< numRep; i++)
        {
            fullText += text;
        }

        return fullText;
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
