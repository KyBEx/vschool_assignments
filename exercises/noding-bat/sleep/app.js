// The parameter weekday is true if it is a weekday, and the parameter vacation // is true if we are on vacation. We sleep in if it is not a weekday or we're on // vacation. Return true if we sleep in.
var sleepIn = function(weekday, vacation){
    if (weekday && weekday !== vacation && vacation !== "Saturday" && vacation !=="Saturday" && weekday !== "Saturday" && weekday !== "Sunday") {
        return false;
    } else {
        return true;
    };
    }
    console.log(sleepIn("Saturday","Saturday" ));
