import Cookies from "js-cookie";
import { post } from "./api-helpers";
import { STATUS_CODES } from "./enums";


export const isTokenValid = async () => {
  const res = await fetch(`https://auth.programmingbean.com/api/v1/check`);
  return res.status === STATUS_CODES.SUCCESS;
}

export const getNewToken = async (refreshToken: string | undefined, username: string | undefined) => {
  const body = {
    refresh: refreshToken,
    name: username
  };
  const res = await post(`https://auth.programmingbean.com/api/v1/refresh`, body);
  if (res.status === STATUS_CODES.SUCCESS) {
    return (await res.json())["token"];
  }
  throw new Error("New token could not be retrieved.");
}

export const authenticate = async (username: string | undefined, password: string | undefined) => {
  const body = {};
  const res = await post(`https://auth.programmingbean.com/api/v1/authenticate`, body, username, password);
  if (res.status === STATUS_CODES.SUCCESS) {
    const json = await res.json();
    Cookies.set('X-AUTH-TOKEN', json['token']);
    Cookies.set('X-AUTH-REFRESH', json['refresh']);
    Cookies.set('X-AUTH-USERNAME', json['name']);
    return;
  }
  throw new Error("New token could not be retrieved.");
}