const reverseString = function(text) {
    let revText= "";
    for(let i=text.length-1; i>=0; i--)
    {
        revText += text.at(i);
    }
    return revText;
};

// Do not edit below this line
module.exports = reverseString;
