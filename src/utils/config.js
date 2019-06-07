const CONFIG = {
  'klugcms.in:3000': {
    HOST: 'klugcms.in:3000',
    API_BASE_PATH: 'http://api.klugcms.in:97',
    PLAY_BASE_URL: 'http://13.233.59.77:93/slikely_dev_vod/',
    IMG_BASE_URL: 'http://13.233.59.77:93/slikely_dev_img/',
    VIDEO_IMG_BASE_URL: 'http://video.klugcms.in:3001/',
    APP_USER_IMG_BASE: 'http://13.233.59.77:85/uimg/',
    SOCKET_URL: '10.150.212.17:99'
  },
  'dev.klugcms.in:3000': {
    HOST: 'dev.klugcms.in:3000',
    API_BASE_PATH: 'http://api.klugcms.in:99',
    PLAY_BASE_URL: 'http://13.233.59.77:93/slikely_dev_vod/',
    IMG_BASE_URL: 'http://13.233.59.77:93/slikely_dev_img/',
    APP_USER_IMG_BASE: 'http://13.233.59.77:85/uimg/',
    SOCKET_URL: '10.150.212.17:99'
  },
  'qc.klugcms.in:3000': {
    HOST: 'qc.klugcms.in:3000',
    API_BASE_PATH: 'http://api.klugcms.in:99',
    PLAY_BASE_URL: 'http://13.233.59.77:93/slikely_dev_vod/',
    IMG_BASE_URL: 'http://13.233.59.77:93/slikely_dev_img/',
    APP_USER_IMG_BASE: 'http://13.233.59.77:85/uimg/',
    SOCKET_URL: '10.150.212.17:99'
  },
  'aphrocms.slike.in': {
    HOST: 'aphrocms.slike.in',
    API_BASE_PATH: 'http://aphrocms.slike.in:88',
    PLAY_BASE_URL: 'http://aphrocms.slike.in:93/slikely_dev_vod/',
    VIDEO_IMG_BASE_URL: 'http://aphrocms.slike.in:93/',
    RTMP_PLAY_URL: 'rtmp://223.165.27.225/play/',
    IMG_BASE_URL: 'http://172.29.72.41:93/slikely_dev_img/',
    APP_USER_IMG_BASE: 'http://172.29.72.41:93/uimg/',
    SOCKET_URL: '172.29.72.43:89'
  }
};

export function getHostConfig(key = '') {
  let host = window.location.host;
  return key ? CONFIG[host][key] : CONFIG[host];
}
