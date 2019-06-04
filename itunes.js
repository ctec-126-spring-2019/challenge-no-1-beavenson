$('#searchBtn').on('click', function(){
    var artist = $('#artist').val().toLowerCase();
    artist = artist.split(' ');
    artist = artist.join('+');
    console.log(artist);
    var url = 'https://itunes.apple.com/search?term=' + artist + '&entity=album';
     $.ajax({
         url: url,
         type: 'GET',
         dataType: 'JSON'
     })
     .done(function(data){
        if(data.results.length == 0){
            $('#result').html('Artist Not Found');
        }else{
        var result = '<h2>Results for ' + data.results[0].artistName + '</h2>';
        for (let i = 0; i < data.results.length; i++) {
            result += '<div class="post">'
            result += '<h3>Album Name: ' + data.results[i].collectionName + '</h3>';
            result += '<p>Price: $' + data.results[i].collectionPrice + '</p>'; 
            result += '<p>Track Count: ' + data.results[i].trackCount + '</p>';
            result += '<img src="' + data.results[i].artworkUrl100 + '">';
            result += '</div>';
        }
        $('#result').html(result);
    }
     })
     .fail(function(){
         $('#result').html('Artist Not Found');
     });
});