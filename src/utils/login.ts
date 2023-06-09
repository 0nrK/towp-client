import { toast } from "react-toastify";

export async function loginRequest({ email, username, password, route = 'login' }:
    { email?: string, username: string, password: string, route: string }) {
    const data = await fetch(`${process.env.API_URL}/api/auth/${route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email })
    })
        .then(async (res: any) => {
            const jsonized = await res.json()
            return jsonized
        })
        .catch((error) => console.log('Error: ', error));
    if (data.token && data.user) {
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.user));
        toast.success("Login successfull", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "dark",
            autoClose: 1000,
            pauseOnFocusLoss: false,
            hideProgressBar: true,
        });
    } else {
        toast.warning("Login failed", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "dark",
            autoClose: 1000,
            pauseOnFocusLoss: false,
            hideProgressBar: false,
        });
    }
}

export async function logoutRequest() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successfull", {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        hideProgressBar: false,
    });
}
