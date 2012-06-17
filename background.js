var hasSetRain = false,isPlay = false,player = document.getElementById('player');

function togglePlay(){
    if(isPlay){
        isPlay = false;
        player.pause();
        chrome.browserAction.setIcon({path: 'assets/sun.png'});
        chrome.browserAction.setTitle({title:'Raining makes everything better!'});
    }else{
        isPlay = true;
        player.play();
        chrome.browserAction.setIcon({path: 'assets/rain.png'});
        chrome.browserAction.setTitle({title:"Listen it's raining!"});
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if(!hasSetRain){
        player.setAttribute('src','http://174.36.223.28/audio2/RainyMood.m4a');
        hasSetRain = true;
    }
    togglePlay();
});
