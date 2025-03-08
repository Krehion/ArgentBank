const API_URL = "http://localhost:3001/api/v1/user/login";

export const login = async (email, password) => {
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Login failed");
		}

		localStorage.setItem("token", data.body.token);
		return data;
	} catch (error) {
		console.error("Login error:", error);
		throw error;
	}
};
