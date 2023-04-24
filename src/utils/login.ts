import { toast } from "react-toastify";


export async function loginRequest({ username, password, route = 'login' }: { username: string, password: string, route: string }) {
    console.log(process.env.API_URL)
    const data = await fetch(`${process.env.API_URL}/api/auth/${route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
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
            hideProgressBar: false,
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

export function isUserLoggedIn(): boolean {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) return true
    return false
}
