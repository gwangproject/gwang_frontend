import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const REST_API_KEY = "백엔드한테 달라하자1";
  const REDIRECT_URI = "백엔드한테 달라하자2";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div>
      <button type="button" onClick={loginHandler}>
        로그인 하기
      </button>
    </div>
  );
};
