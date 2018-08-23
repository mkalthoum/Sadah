console.log('\'Allo \'Allo!');

var animationInObj = {
    width: "90%",
    opacity: 0.4,
    fontSize: "1.5em",
};
var animationOutObj = {
    width: "60%",
    opacity: 1,
    fontSize: "inherit",
};

$('.hero-unit').animate(animationInObj, 1500, function() { $(this).animate(animationOutObj, 1500) });
