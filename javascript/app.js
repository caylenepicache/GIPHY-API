var buttonArray = [];

function displayButtons() {
    $("#buttonChoices").empty();

    for (var i = 0; i<buttonArray.length; i++) {
        
        var newButton = $("<button>");
        //newButton.addclass("")
        newButton.append(buttonArray[i]);
        $("#buttonChoices").append(newButton)
    }
};

$("#addButton").on("click", function(event) {

event.preventDefault();

var addButton = $("#button-input").val().trim();
//.trim can remove white space by not trusting user input

buttonArray.push(addButton);
console.log(buttonArray);


displayButtons();
});