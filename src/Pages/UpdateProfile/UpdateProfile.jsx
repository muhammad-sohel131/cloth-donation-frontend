import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({
                displayName: name,
                photoURL: photoURL,
            });
            // Navigate to dashboard
            navigate('/dashbord');
        } catch (err) {
            setError('Failed to update profile. Try again later.');
        }
    };

    return (
        <div className="mx-container w-max[550px] mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
            <form onSubmit={handleUpdate} className="bg-white shadow-md p-6 rounded-md">
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Photo URL Field */}
                <div className="mb-4">
                    <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-2">
                        Photo URL:
                    </label>
                    <input
                        type="text"
                        id="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Error Message */}
                {error && <p className="text-red-600 mb-4">{error}</p>}

                {/* Update Button */}
                <button
                    type="submit"
                    className="bg-[#f86011] text-white py-2 px-4 rounded-lg"
                >
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
