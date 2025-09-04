import instance from "./axios";

export const fetchKakaoToken = async (code) => {
  const res = await instance.post("/login/kakao", {
    code,
  });

  return res.data;
};

export const login = async (code) => {
  console.log("👉 axios 보낼 코드 값:", code);
  console.log("👉 요청 URL:", instance.defaults.baseURL + "/login/kakao");
  const res = await instance.post("/login/kakao", {
    code,
  });
  return res.data;
};
