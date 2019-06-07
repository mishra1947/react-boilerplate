import NumAbbr from 'number-abbreviate';
import { regexPatterns } from './regex';

const numAbbr = new NumAbbr([' K', ' M', ' B', ' T']);

export function largeNumber(number) {
  return numAbbr.abbreviate(number, 1);
}

export function percent(number) {
  return `${number}%`;
}

export function intoSeconds(value) {
  return `${value}`;
}

export function timeConversion(millisec, unit = 'ms', runit = '') {
  // runit s,m,h,d
  switch (unit) {
    case 's':
      millisec = millisec * 1000;
      break;
    case 'm':
      millisec = millisec * 1000 * 60;
      break;
    case 'h':
      millisec = millisec * 1000 * 60 * 60;
      break;
    default:
  }
  const seconds = (millisec / 1000).toFixed(1);

  const minutes = (millisec / (1000 * 60)).toFixed(1);

  const hours = (millisec / (1000 * 60 * 60)).toFixed(1);

  const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

  if (runit) {
    switch (runit) {
      case 's':
        return `${seconds} Sec`;
      case 'm':
        return `${minutes} Min`;
      case 'h':
        return `${hours} Hrs`;
      case 'd':
        return `${days} Days`;
      case 'h:m':
        let h = parseInt(minutes / 60);
        let m = parseInt(minutes % 60);
        return `${h > 9 ? h : '0' + h} Hrs ${m > 9 ? m : '0' + m} Min`;
      default:
        return `${seconds} Sec`;
    }
  }
  if (seconds < 60) {
    return `${seconds} Sec`;
  } else if (minutes < 60) {
    return `${minutes} Min`;
  } else if (hours < 24) {
    return `${hours} Hrs`;
  } else {
    return `${days} Days`;
  }
}

export function filterSelectedItem(data) {
  return data.filter(item => item.selected === true);
}

export function humanFileSize(bytes, si) {
  bytes = bytes || 0;
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
}

export function ago(datetime = 0, full = false) {
  let now = new Date().getTime();
  let millisec = Math.abs(now - datetime);
  const seconds = (millisec / 1000).toFixed(1);
  if (seconds < 1) {
    return 'just now';
  }
  const minutes = (millisec / (1000 * 60)).toFixed(1);
  const hours = (millisec / (1000 * 60 * 60)).toFixed(1);
  const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
  const week = (millisec / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
  const month = (millisec / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
  const year = (millisec / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  if (seconds < 60) {
    return `${seconds} Sec${seconds > 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
    return `${minutes} Min${minutes > 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} Hr${hours > 1 ? 's' : ''} ago`;
  } else if (days < 7) {
    return `${Math.round(days)} Day${days > 1 ? 's' : ''} ago`;
  } else if (week < 4) {
    return `${Math.round(week)} Week${week > 1 ? 's' : ''} ago`;
  } else if (month < 12) {
    return `${Math.round(month)} Month${month > 1 ? 's' : ''} ago`;
  } else {
    return `${Math.round(year)} Year${year > 1 ? 's' : ''} ago`;
  }
}

export function timestampToDate(
  timestamp,
  delimiter = '/',
  format = 'DD/MM/YYYY',
  time = false
) {
  let d = timestamp ? new Date(timestamp) : new Date();
  let day = d.getDate(),
    m = d.getMonth() + 1,
    y = d.getFullYear(),
    hr = d.getHours() > 9 ? d.getHours() : '0' + d.getHours(),
    min = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes(),
    s;
  m = m > 9 ? m : '0' + m;
  day = day > 9 ? day : '0' + day;
  switch (format) {
    case 'DD/MM/YYYY':
      s = day + delimiter + m + delimiter + y;
      break;
    case 'YYYY/MM/DD':
      s = y + delimiter + m + delimiter + day;
      break;
    case 'MM/YYYY/DD':
      s = m + delimiter + y + delimiter + day;
      break;
    default:
      s = day + delimiter + m + delimiter + y;
  }
  if (time) {
    s += ' ' + hr + ':' + min;
  }
  return s;
}

export function getValue(model, key, dval = '') {
  return model[key] ? model[key] : dval;
}

export function getMediaPath(uuid = '') {
  if (uuid) {
    return uuid.slice(2, 4) + '/' + uuid.slice(4, 6) + '/' + uuid;
  }
}

export function getCalenderDate(date) {
  if (date) {
    let d = date.split(' ');
    return d[0];
  }
  return '';
}

export function getRandomByte() {
  // http://caniuse.com/#feat=getrandomvalues
  if (window.crypto && window.crypto.getRandomValues) {
    var result = new Uint8Array(1);
    window.crypto.getRandomValues(result);
    return result[0];
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    result = new Uint8Array(1);
    window.msCrypto.getRandomValues(result);
    return result[0];
  } else {
    return Math.floor(Math.random() * 256);
  }
}

export function getnewString(length) {
  return Array.apply(null, { length: length })
    .map(function() {
      var result;
      while (true) {
        result = String.fromCharCode(getRandomByte());
        if (regexPatterns.password.test(result)) {
          return result;
        }
      }
    }, this)
    .join('');
}

export default {
  largeNumber,
  percent,
  intoSeconds,
  filterSelectedItem,
  value: value => value
};
