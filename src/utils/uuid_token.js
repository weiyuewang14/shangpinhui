import {v4 as uuidv4} from "uuid";
// 生成一个随机字符串，且每次执行不发生变化
export const getUUID = () => {
  let uuid_token = localStorage.getItem("UUIDTOKEN");
  //如果没有生成，则生成
  if (!uuid_token) {
    uuid_token = uuidv4();
    //本对存储一次
    localStorage.setItem("UUIDTOKEN", uuid_token);
  }
  return uuid_token
};