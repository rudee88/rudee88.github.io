const video = document.getElementById('myVideo');

const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', function () {
  video.play();
});

const pauseBtn = document.getElementById('pauseBtn');
pauseBtn.addEventListener('click', function () {
  video.pause();
});

let freezeeBtn = document.getElementById('freezeBtn');
freezeeBtn.addEventListener('mousedown', function () {
  video.pause();
});
freezeeBtn.addEventListener('mouseup', function () {
  video.play();
});

const seekBar = document.getElementById('seekBar');
seekBar.addEventListener('change', function () {
    const time = video.duration * (seekBar.value/100);
    video.currentTime = time
});

video.addEventListener('timeupdate', function() {
    let value = (100/video.duration) * video.currentTime;
    seekBar.value = value;
    // console.log(video.currentTime);
});

const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('change', function() {
    video.volume = volumeControl.value;
})
