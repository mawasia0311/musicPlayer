let musics = [
    {
        image : "musicplayer/hymfortheweekend.jpeg",
        title : "Hymn For The Weekend",
        artist: "ColdPlay",
        audio: "musicplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/paradise.jpeg",
        title : "Paradise",
        artist: "ColdPlay",
        audio: "musiplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/summerHIgh.jpeg",
        title : "Summer High",
        artist: "Ap Dhillon",
        audio: "musicplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/thatsmyname.jpeg",
        title : "Thats My Name",
        artist: "Akcent",
        audio: "musicplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/middleofthenight.jpeg",
        title : "MIDDLE OF THE NIGHT",
        artist: "Elley Duhé",
        audio: "musicplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/123.jpeg",
        title : "Sofia Reyes - 1, 2, 3",
        artist: "Sofia Reyes",
        audio: "musicplayer/videoplayback.mp4"
    },
    {
        image : "musicplayer/download.jpeg",
        title : "Magenta Riddim",
        artist: "Dj Snake",
        audio: "musicplayer/videoplayback.mp4"
    },
]

//----------------------------------------

let currunt = 0;

let songImg = document.getElementById('songImg');
songImg.src = musics[currunt].image;

let songTitle = document.getElementById('songTitle');
songTitle.innerText = musics[currunt].title;

let artistName = document.getElementById('artistName');
artistName.innerText = musics[currunt].artist;

let audioSource = document.getElementById('source');
audioSource.src = musics[currunt].audio;

function playNext(){

    if(currunt < musics.length-1){
        currunt++;

        songImg.src = musics[currunt].image;
        songTitle.innerText = musics[currunt].title;
        artistName.innerText = musics[currunt].artist;
        audioSource.src = musics[currunt].audio;
        identifyCurrunt();
    }
}

function playPrev(){

    if(currunt > 0){
        currunt--;

        songImg.src = musics[currunt].image;
        songTitle.innerText = musics[currunt].title;
        artistName.innerText = musics[currunt].artist;
        audioSource.src = musics[currunt].audio;
        identifyCurrunt();
    }
}

// ------------ side panal

let sidePanal = document.getElementById("sidePanal").innerHTML;

for(let i = 0; i< musics.length; i++){
    sidePanal += `<div class = 'playlistItem' id = 'item${i}' onclick="changeItem(this)"> 
      
    <img src="${musics[i].image}" alt="" class="itemImg">
    <div>
    <h4 class = "itemTitle">${musics[i].title}</h4>
    <p class = "itemArtist"> ${musics[i].artist} </p>
    </div>

    </div>` 
}

document.getElementById("sidePanal").innerHTML = sidePanal;

// click on side panal items to change music

function changeItem(event){
    currunt = parseInt(event.id[4]);
    identifyCurrunt();

    songImg.src = musics[currunt].image;
    songTitle.innerText = musics[currunt].title;
    artistName.innerText = musics[currunt].artist;
    audioSource.src = musics[currunt].audio;
}

// identify the currunt sond
function identifyCurrunt(){

totalMusics = document.getElementsByClassName('itemTitle');
playlistItems = document.getElementsByClassName('playlistItem');
let curruntElement;
// console.log(playlistItems);

for(let i = 0; i < totalMusics.length; i++){
    if(totalMusics[i].innerText == musics[currunt].title){
        curruntElement = playlistItems[i];
        curruntElement.style.backgroundColor = "red"; 
    }
}

console.log(currunt);
changeCurruntBgColor();
}

function changeCurruntBgColor(){
let playlistItems = document.getElementsByClassName('playlistItem');
let curruntElement; 
for(let i = 0 ; i < musics.length; i++){
        if(currunt == i){

        }else{
            curruntElement = playlistItems[i];
            curruntElement.style.backgroundColor = "white"; 
        }
    }
}