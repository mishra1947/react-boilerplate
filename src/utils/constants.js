import { getHostConfig } from './config';


export const ErrorCode = {
  SOMETHING_WRONG: 999
};

export const Endpoint = {
  LOGIN_API: '/api/user/login',
  LOGIN_CHECK: '/api/user/login',
  FETCH_MEDIA_LIST: '/videos',
  FETCH_APP_LIST: '/apps',
  FETCH_DASHBOARD: '/dashboard',
  USERS: '/adminusers',
  APP_USERS: '/users',
  USER_LOGIN: '/login',
  RESET_PASSWORD: '/login/resetpassword',
  APIKEY: '/apikey',
  BANNERS_LIST: '/banners',
  SOUNDS: '/sounds',
  TAGS: '/tags',
  CONTENT: '/content',
  NOTIFICATION: '/notification',
  GENERS: '/geners',
  VIDEO_REPORT: '/videoreporttype',
  HELPDESK: '/tickets',
  JOBS: '/jobs'
};

export const NOT_FOUND_PAGE = '/407';

export const NOT_ACCESSIBLE_PAGE = '/login';

export const cookieExpiry = 365;
export const cookieName = 'token';

export const MobileMinWidth = 320;
export const MobileMaxWidth = 767;

export const TabletMinWidth = 768;
export const TabletMaxWidth = 1023;

export const DesktopMinWidth = 1024;

export const Messages = {
  API_BROKEN: 'Api call is broken, fix the Api service',
  INVALID_FORM_VALUES: 'Invalid Form Fields',
  LOGIN_FAILED: 'Login Failed',
  DELETE_REPORT_FAILED: 'Report did not delete successfully',
  DELETE_REPORT_SUCCESS: 'Report deleted successfully!',
  REPORT_SAVE_SUCCESS: 'Report saved successfully!',
  REPORT_SAVE_FAILED: 'Report did not save successfully!'
};

// http://aphrocms.slike.in:88 //http://api.klugcms.in:99
//export const HOST_CONFIG = getHostConfig();
export const API_BASE_PATH = 'http://api.klugcms.in:99';
