import api from "@/lib/api";

/* =========================
   Types
========================= */

export interface SignupPayload {
  name?: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    _id: string;
    name?: string;
    email: string;
  };
}

/* =========================
   API Calls
========================= */

// Signup
export const signup = (data: SignupPayload) =>
  api.post<AuthResponse>("/auth/signup", data);

// Login
export const login = (data: LoginPayload) =>
  api.post<AuthResponse>("/auth/login", data);

// Logout (frontend only)
export const logout = () => {
  localStorage.removeItem("token");
};
