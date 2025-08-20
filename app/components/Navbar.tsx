import React from 'react';
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
    const navigate = useNavigate();
    const { auth } = usePuterStore();

    const handleLogout = async () => {
        try {
            await auth.signOut(); // use Zustand store method
            navigate("/auth");    // redirect to login/auth page
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="navbar flex justify-between items-center p-4">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMATE</p>
            </Link>

            <div className="flex gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>

                {auth.isAuthenticated && (
                    <button
                        onClick={handleLogout}
                        className="primary-button w-fit bg-red-500 hover:bg-red-600"
                    >
                        Log Out
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
