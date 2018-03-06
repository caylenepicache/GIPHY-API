var buttonArray = [];


function displayGiphy() {

    $(".addedDiv").empty();

    var searchInput = $(this).attr("data-name");
    var baseURL = "https://api.giphy.com/v1/gifs/search?q=";
    var limitSearch = "&limit=10"
    var rating = "&rating=pg"
    var apiKey = "&api_key=6R9PwozTQ3L4q3sJ8xGzLDT4FkWv4AEC"
    var queryURL = baseURL + searchInput + limitSearch + rating + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        console.log(response);
        var newDiv = $("<div>");
        newDiv.addClass("addedDiv");
        var container = $("#choices");
        container.append(newDiv);


        for (i = 0; i < 10; i++){
        var gifImage = JSON.stringify(response.data[i].images.downsized.url);
        console.log(gifImage);
        var gifRating = JSON.stringify(response.data[i].rating);
        console.log(gifRating);

        newDiv.append('<img src=' + gifImage + '> Rating:' + gifRating + '<br>');
        // MAKE A TABLE for gifs and for ratings etc
        console.log("image: " + response.data[i].images.downsized.url);
        };


        //var webtext = JSON.stringify(response);
        //newDiv.append(webtext); 
    }
    )
}

function displayButtons() {
    $("#buttonChoices").empty();

    for (var i = 0; i<buttonArray.length; i++) {
        
        var newButton = $("<button>");
        newButton.addClass("displayGif");
        newButton.attr("data-name", buttonArray[i]);
        newButton.append(buttonArray[i]);
        $("#buttonChoices").append(newButton);
    }
};


$("#addButton").on("click", function(event) {

event.preventDefault();

var addButton = $("#button-input").val().trim();

buttonArray.push(addButton);
console.log(buttonArray);


displayButtons();
});



$(document).on("click", ".displayGif", displayGiphy);

displayButtons();