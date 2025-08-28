import { jwtDecode } from "jwt-decode";

export function createToken(user, ttlSeconds = 300) {
  const header = { alg: "none", typ: "JWT" };
  const payload = {
    sub: user.email,
    name: user.name,
    email: user.email,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const base64Url = (obj) => btoa(JSON.stringify(obj)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  return `${base64Url(header)}.${base64Url(payload)}.`; // no signature (demo only)
}

export function decodeToken(token) {
  try { return jwtDecode(token); } catch { return null; }
}

export function isTokenExpired(token) {
  const payload = decodeToken(token);
  return !payload || Date.now() / 1000 >= payload.exp;
}
