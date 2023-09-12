import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const {logOut} = useContext(AuthContext);

    const handleLogOut = (event) => {
        event.preventDefault();

        logOut()
        .then(() => {})
        .then(() => {})
    }
    return (
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Profile;