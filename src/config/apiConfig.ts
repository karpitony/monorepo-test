import axios from 'axios';

const getApiBaseUrl = () => {
  // 개발 모드이거나(로컬호스트등 vite가 알아서 인식) dev.로 시작하는 도메인이면 개발 서버 주소로 설정
  const hostname = window.location.hostname;

  if (import.meta.env.MODE === 'development' || hostname.startsWith('dev.')) {
    return import.meta.env.VITE_BASE_DEV_URL; // 개발 서버
  } else {
    return import.meta.env.VITE_BASE_URL; // 운영 서버
  }
};

const API_BASE_URL = getApiBaseUrl();

const apiConfig = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 요청 타임아웃 5초
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiConfig;