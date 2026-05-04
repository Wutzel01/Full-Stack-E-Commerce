const API_BASE_URL = "http://localhost:3000";

async function request(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        credentials: "include",
        ...options,
    });

    let data = null;

    try {
        data = await response.json();
    } catch (_) {
        data = null;
    }

    if (!response.ok) {
        throw new Error(data?.error || "Die Anfrage ist fehlgeschlagen.");
    }

    return data;
}

export function signup(email, password) {
    return request("/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export function login(email, password) {
    return request("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export function validateSession() {
    return request("/validate", {
        method: "GET",
    });
}