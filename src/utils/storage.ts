import { User } from "@/types/subscription";

const TOKEN_KEY = "bf_auth_token";
const USER_KEY = "bf_user";

/* ================= AUTH STORAGE ================= */

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const saveUser = (user: User): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/* ✅ SAFE getUser (CRASH-PROOF) */
export const getUser = (): User | null => {
  try {
    const raw = localStorage.getItem(USER_KEY);

    // protects against: null, undefined, "undefined"
    if (!raw || raw === "undefined") {
      return null;
    }

    return JSON.parse(raw) as User;
  } catch (error) {
    console.error("❌ Invalid user data in localStorage", error);
    localStorage.removeItem(USER_KEY);
    return null;
  }
};

export const removeUser = (): void => {
  localStorage.removeItem(USER_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const logout = (): void => {
  removeToken();
  removeUser();
};
