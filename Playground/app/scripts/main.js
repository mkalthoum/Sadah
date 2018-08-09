console.log('\'Allo \'Allo!');

var animationInObj = {
    width: "100%",
    opacity: 0.4,
    fontSize: "3em",
};
var animationOutObj = {
    width: "60%",
    opacity: 1,
    fontSize: "inherit",
};

$('.hero-unit').animate(animationInObj, 1500, function() { $(this).animate(animationOutObj, 1500) });