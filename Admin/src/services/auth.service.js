import api from "./api";

export const loginAdmin = (data) =>
  api.post("/auth/login", data);

export const logoutAdmin = () =>
  api.post("/auth/logout");

export const checkAuth = () =>
  api.get("/auth/check");
