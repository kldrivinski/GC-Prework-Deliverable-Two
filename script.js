var question = "Are you going to a Casual, Semi-formal or Formal event?";


var eventType = prompt(question, "Casual, Semi-formal, Formal");

alert(eventType);


var temperature = "What is the temperature (in Fahrenheit)";




var tempFahr = prompt(temperature);

alert(tempFahr);

var message = " ";

if (eventType === "casual" && tempFahr < 54) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a coat";
} else if (eventType === "casual" && tempFahr >= 54 && tempFahr <= 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a jacket";
} else if (eventType === "casual" && tempFahr > 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and no jacket";
} else if (eventType === "semi-formal" && tempFahr < 54) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a coat";
} else if (eventType === "semi-formal" && tempFahr >= 54 && tempFahr <= 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a jacket";
} else if (eventType === "semi-formal" && tempFahr > 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and no jacket";
} else if (eventType === "formal" && tempFahr < 54) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a coat";
} else if (eventType === "formal" && tempFahr >= 54 && tempFahr <= 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a jacket";
} else if (eventType === "formal" && tempFahr > 70) {
    var message = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and no jacket";
}

alert(message);
