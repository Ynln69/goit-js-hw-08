import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function currentTime(data) {
  localStorage.getItem(STORAGE_KEY, data.seconds);
}

function getDataLS() {
  const dataFromLS = localStorage.getItem(STORAGE_KEY);

  if (dataFromLS) {
    return dataFromLS;
  }
  return 0;
}
player.setCurrentTarget(getDataLS());
player.on('timeupdate', throttle(currentTime, 1000));
