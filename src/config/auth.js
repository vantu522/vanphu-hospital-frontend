import jwtDecode from 'jwt-decode';

export function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwtDecode(token); // { id, role, exp }
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

import jwtDecode from "jwt-decode";

export function getRole() {
  const token = localStorage.getItem("token");
  if (!token) return "guest"; // chưa login
  try {
    const decoded = jwtDecode(token);
    return decoded.role || "guest";
  } catch {
    return "guest";
  }
}
