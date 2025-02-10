import axios from 'axios';

const apiConfig = axios.create({
  // API 기본 URL
  // 첫 설정이 .env.example 보면서 .env 만들어주기
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000, // 요청 타임아웃 5초
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (JWT 토큰 추가)
apiConfig.interceptors.request.use(
  (config) => {
    // 로컬스토리지에서 'accesstoken' 꺼내오는 거로 설정
    // 추후 httpOnly 쿠키로 변경
    const token = localStorage.getItem('accesstoken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default apiConfig;