import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const user = localStorage.getItem("user");
        setUserData(JSON.parse(user));
    }, []);


    return (
        <div>
            <h1>Signup</h1>
            <h2>{userData?.name}</h2>
            <button onClick={() => {
                localStorage.removeItem("user");
                navigate('/login')
            }} >SignUp</button>
        </div>
    );
}
export default Signup;