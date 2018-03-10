var buttonArray = ["The Office", "Parks and Recreation", "How I Met Your Mother", "Friends", "3rd Rock from the Sun", "The Big Bang Theory", "Community", "New Girl", "Scrubs", "That 70s Show",   ];


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
        //var gifActive = JSON.stringify(response.data[i].images.downsized.url);
        //console.log(gifActive);
        var gifRating = response.data[i].rating;
        //var gifStill = JSON.stringify(response.data[i].images.downsized_still.url)

        var gifRating = JSON.stringify(response.data[i].rating);

        var giphyImg = $('<img>');
        giphyImg.attr("src", response.data[i].images.downsized_still.url);
        giphyImg.attr("data-still", response.data[i].images.downsized_still.url);
        giphyImg.attr("data-animate", response.data[i].images.downsized.url );
        giphyImg.attr("data-stage", "still");
        giphyImg.addClass("image");
        newDiv.append(giphyImg);
        newDiv.append("<br>Rating: " + gifRating + "<p>");

        $("#choices").prepend(newDiv);




        //newDiv.append('<img src=' + gifStill + '>' );
        // MAKE A TABLE for gifs and for ratings etc
        console.log("image active: " + response.data[i].images.downsized.url);
        console.log("image still: " + response.data[i].images.downsized_still.url);
    
    };



    
        //var webtext = JSON.stringify(response);
        //newDiv.append(webtext); 
    });

};


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

//event listener
$(document).on("click", ".image", function(){

    var state = $(this).attr("data-state");

    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }


}); 