import React, { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import TopNav from './TopNav';
import Footer from './Footer';


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <TopNav />
        <div className="container mx-auto p-4">
            {user ? (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                value={user.username}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={user.email}
                                readOnly
                            />
                        </div>
                    </form>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <Footer className="bg-gray-800 text-white text-center py-4" />
        </>
    );
};

export default UserProfile;
