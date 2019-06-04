$(document).ready(function(){
    $.ajax({
        url: 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&api-key=Eo5DUhuaw)xWf8TWsajbyg((',
        type: 'GET',
        dataType: 'JSON'
    })
    .done(function(data){
        var result = '';
        for (let i = 0; i < data.items.length; i++) {
            result += '<div class="post">';
            result += '<h2>Title: ' + data.items[i].title + '</h2>';
            result += '<h3>Username: ' + data.items[i].owner.display_name + '</h3>';
            var myDate = new Date(data.items[i].creation_date*1000);
            result += '<p>' + myDate.toLocaleString() + '</p>';
            result += '<a href="' + data.items[i].link + '">Link to Post</a>';
            result += '<h3>Tags:</h3>';
            result += '<ul>';
            for (let j = 0; j < data.items[i].tags.length; j++) {
                result += '<li>' + data.items[i].tags[j] + '</li>';
            }
            result += '</ul>';
            result += '<p>Views: ' + data.items[i].view_count + '</p>';
            result += '<p>Answer Count: ' + data.items[i].answer_count + '</p>';
            result += '<p>Score: ' + data.items[i].score + '</p>';
            result += '</div>';
        }
        $('#result').html(result);
    })
    .fail(function(){
        console.log('Error loading API');
    });
});