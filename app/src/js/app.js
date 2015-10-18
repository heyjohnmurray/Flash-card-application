// since we can't work with the "actual" Date Object we need to create an instance of it (a copy)
// fill the variable now with the current date — now is a snap-shot of the Date Information
var now = new Date();

// getDay() returns the day of the week as an integer from 0 (Sunday) to 6 (Saturday).
// by using &&, logical operator, we're checking to see if both parts are true

if (now.getDay() > 0 && now.getDay() < 6) {
     document.write("Sorry, it's a weekday.");
     alert('hello world!');
}
else {
     document.write("Hooray, it's a weekend!");
}
