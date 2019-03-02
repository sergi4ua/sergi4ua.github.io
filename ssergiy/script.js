CHANNEL_NEWS = new Array(10);

CHANNEL_NEWS[0] = "<p><b>02.03.2019 ssErgiyArchive webpage is live :)</b></p><p><br>I'm currently looking for ways to make some original content, because OSTs... well they will not get me anywhere.</p>";

for(let i = 0; i < CHANNEL_NEWS.length; i++) 
{
    if(CHANNEL_NEWS[i] != undefined)
        document.getElementById('newsEntry').innerHTML += "<div id='newsEntry'>" + CHANNEL_NEWS[i] + "</div>";
}
function getJSONData(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    try {
        Httpreq.open("GET", yourUrl, false);
        Httpreq.send(null);
    }
    catch (ex) {
        alert(ex.message);
    }
    return Httpreq.responseText;
}

function showVideoList(username, writediv, maxnumbervideos, apikey) {
   // try {
        document.getElementById(writediv).innerHTML = "";
        var keyinfo = JSON.parse(getJSONData("https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=" + username + "&key=" + apikey));
        var userid = keyinfo.items[0].id;
        var channeltitle = keyinfo.items[0].snippet.title;
        var channeldescription = keyinfo.items[0].snippet.description;
        var channelthumbnail = keyinfo.items[0].snippet.thumbnails.default.url;
        var videoinfo = JSON.parse(getJSONData("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" + userid + "&maxResults=" + maxnumbervideos + "&key=" + apikey));
        var videos = videoinfo.items;
        var videocount = videoinfo.pageInfo.totalResults;
        for (var i = 0; i < videos.length; i++) {
            var videoid = videos[i].id.videoId;
            var videotitle = videos[i].snippet.title;
            var videodescription = videos[i].snippet.description;
            var videodate = videos[i].snippet.publishedAt; 
            var videothumbnail = videos[i].snippet.thumbnails.high.url;
            document.getElementById(writediv).innerHTML += "<div id='video'>"+"<a href='https://youtube.com/watch?v="+videoid+"'><img src='" + videothumbnail + "'></a></div>"
        }
    }
  //  catch (ex) {
  //      alert(ex.message);
  //  }

showVideoList("SerheySmaida", "videos", 27, "AIzaSyAyDXKZLc3mRY5vcrxXZPQN-LcdYW-qVaM");