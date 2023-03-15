let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'Mos.jpg',
        name : 'Mostei Kizu',
        artist : 'Seto',
        music : 'Mostei Kizu.mp3'
    },
    {
        img : '3.jpg',
        name : 'Hairiin Klub',
        artist : 'Kizu',
        music : 'Hairiin Klub.mp3'
    },
    {
        img : 'maxresdefault.jpg',
        name : 'Yes To Heaven',
        artist : 'lan del ray',
        music : 'Yes To Heaven.mp3'
    },
    {
        img : 's.jpg',
        name : 'Uunees Tsaash Ugui',
        artist : 'Seto',
        music : 'Uunees Tsaash Ugui.mp3'
    },
    {
    img : 'jq6coV.png',
    name : 'Tamhilah Zuur',
    artist : 'Seto',
    music : 'Tamhilah Zuur.mp3'
    },
    {
        img : 'g.jpg',
        name : 'Tsanii Ohin',
        artist : 'Eemzi Chok',
        music : 'Eemzi Chok - Tsasnii ohin.mp3'
    },
    {
        img : 'Sash.jpg',
        name : 'Goo',
        artist : 'Sash',
        music : 'Goo.mp3'
    },
    {
        img : 'thenasa.jpg',
        name : 'ibuprofen denk.',
        artist : 'thenasa.',
        music : 'thenasa. - ibuprofen denk.mp3'
    },
    {
        img : 'a.jpg',
        name : 'Бяцхан Үлгэр',
        artist : 'Enkhe x Erkhem (Eshli-s Favorite ❤️)',
        music : 'Бяцхан Үлгэр.mp3'
    },
    {
        img : 'm.jpg',
        name : 'Haraad Suuna',
        artist : 'Enkhe x Erkhem',
        music : 'Enkhe x Erkhem _ Haraad suuna _ lyric _Хараад сууна_.mp3'
    },
    {
        img : 'hsvr.jpg',
        name : 'Hiisver',
        artist : '9SUULT',
        music : 'Hiisver.mp3'
    },
    {
        img : 'dur.jpg',
        name : 'Durlaagui Baisan Bol',
        artist : 'Gvne & Xmo',
        music : 'durl.mp3'
    },
    {
        img : 'uhlee.jpg',
        name : 'Uhlee Huleene',
        artist : 'Indigo Lemox & Xmo & Enkhe X Erkhem',
        music : 'Indigo Lemon x Xmo x Enkhe “Үхлээ хүлээнэ” (uhlee huleene) lyrics.mp3'
    },
    {
        img : 'hamgiin.jpg',
        name : 'Хамгийн сайхан нь',
        artist : 'OPOZIT',
        music : 'OPOZIT - HAMGIIN SAIHAN N OST (LYRIC VIDEO).mp3'
    },
    {
        img : 'down.jpg',
        name : 'Down',
        artist : 'Seto',
        music : 'SETO -  DOWN.mp3'
    },
    {
        img : 'monstar.jpg',
        name : 'Huuhdeeree Boy',
        artist : 'Vande',
        music : 'Vande - Huuhdeeree Boy _Monstar Live_.mp3'
    },
    {
        img : 'haraal.jpg',
        name : 'Nadad Itgeerei',
        artist : 'Vande ft. FLA',
        music : 'Vande - Nadad Itgeerei ft. FLA (Official Music Video).mp3'
    },
    {
        img : 'shunu.jpg',
        name : 'shunujin',
        artist : 'SASH',
        music : 'sash. - shunujin.mp3'
    },
    {
        img : 'side.jpg',
        name : 'SIDE EFFECT',
        artist : 'Morningstar ft. THE C',
        music : 'Morningstar - SIDE EFFECTS ft The C (Official Music Video).mp3'
    },
    {
        img : 'zone.jpg',
        name : 'ZONE',
        artist : 'OG.MOB ft. Vandebo',
        music : 'O.G MOB x Vandebo - Zone (Official Music Video).mp3'
    },
    {
        img : 'evde.jpg',
        name : 'SETO - Quarantine Cover',
        artist : 'SETO',
        music : 'SETO - Quarantine Cover (Rokitbay - Evderhii hun).mp3'
    },
    {
        img : 'hus.jpg',
        name : 'Husne',
        artist : 'Enkhe X Erkhem',
        music : 'Enkhe x Erhem- Husne (Lyrics).mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}