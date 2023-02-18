import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

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
iframePlayer.setCurrentTarget(getDataLS());
iframePlayer.on('timeupdate', throttle(currentTime, 1000));
