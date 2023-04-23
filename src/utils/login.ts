import axios from "axios";
import { toast } from "react-toastify";


export async function loginRequest({ username, password, route = 'login' }: { username: string, password: string, route: string }) {
    const data = await axios
        .post(`http://${process.env.NEXT_PUBLIC_API_URL}/api/auth/${route}`, { username, password })
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => console.log(error));
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
