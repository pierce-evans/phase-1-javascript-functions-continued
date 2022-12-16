// code your solution here
function saturdayFun(someWhere="roller-skate") {
    return `This Saturday, I want to ${someWhere}!`;
    }
    saturdayFun()
let mondayWork= function( willDo= "go to the office") {
    return`This Monday, I will ${willDo}.`;
}
function wrapAdjective(flair="*") {
    return function(string = "special") {
        return `You are ${flair}${string}${flair}!`;
    }
}