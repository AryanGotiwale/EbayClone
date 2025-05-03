


import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  
    console.log("✅ AuthProvider is rendering...");

    const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setIsLogged(true);
                setUserName(parsedUser?.name || "Unknown User");
            } catch (error) {
                console.error("❌ Error parsing user data:", error);
                localStorage.removeItem("user");
                setIsLogged(false);
                setUserName("");
            }
        } else {
            setIsLogged(false);
            setUserName("");
        }
    }, []);

    // ✅ Login function to update state and store data
    const login = (token, user) => {
        console.log("🔹 Logging in user:", user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLogged(true);
        setUserName(user?.name || "Unknown User");
    };

    // ✅ Logout function to clear state
    const handleLogout = () => {
        console.log("🔹 Logging out user...");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLogged(false);
        setUserName("");
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ isLogged, userName, login, handleLogout }}>
            {console.log("✅ Rendering children:", children)}
            {children} 
        </AuthContext.Provider>
    );
};

// ✅ Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
