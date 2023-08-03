/* 
컴포넌트에 쿠키를 설정하고 쿠키를 쉽게 가져오기 위해서 유틸함수로 따로 관리하고 import하는 방식으로 사용
 */

import { Cookies } from "react-cookie";

const cookies = new Cookies();

//* 쿠키에 값 저장
export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

//* 쿠키에 저장된 값을 꺼내 쓰기
export const getCookie = (name) => {
  return cookies.get(name);
};

//* 쿠키를 삭제하기
export const removeCookie = (name) => {
  return cookies.remove(name);
};
