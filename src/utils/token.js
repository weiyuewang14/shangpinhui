//用来处理token
//设置本地存储的token
export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};
//获取本地存储的token
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};
//清除本地存储的token
export const removeToken = () => {
  localStorage.removeItem("TOKEN")
};
