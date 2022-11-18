
let vid = document.getElementById('videoplayer');


window.addEventListener('load', function(){
    vid.preload = 'auto';
});

const playButton = document.getElementById('play');
playButton.addEventListener('click', function() {
    vid.play();
});

const pause = document.getElementById('pause');
pause.addEventListener('click', function() {
    vid.pause();
});

const slow = document.getElementById('slower');
slow.addEventListener('click', function() {
    if (vid.playbackRate === 0.5) {
        window.alert("Video is already at slowest speed!");
    } else {
        vid.playbackRate = vid.playbackRate / 2;
    }
});

const fast = document.getElementById('faster');
fast.addEventListener('click', function() {
    if (vid.playbackRate === 2.0) {
        window.alert("Video is already at fastest speed!");
    } else {
        vid.playbackRate = vid.playbackRate * 2;
    }
});

const skip = document.getElementById('skip');
skip.addEventListener('click', function() {
    if (vid.currentTime > vid.duration) {
        vid.currentTime = 0;
    } else {
        vid.currentTime += 15;
    }
});

const mute = document.getElementById('mute');
mute.addEventListener('click', function() {
    if (mute.innerHTML == 'Unmute') {
        vid.muted = false;
        mute.innerHTML = 'Mute';
    } else {
        vid.muted = true;
        mute.innerHTML = 'Unmute';
    }
});

let volumeSet = document.getElementById('slider');
let text = document.getElementById('volume');
volumeSet.oninput = function() {
    vid.volume = this.value / 100;
    text.innerHTML = `${this.value}%`;
};