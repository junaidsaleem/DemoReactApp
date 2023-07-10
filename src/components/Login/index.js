import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => {
                let user = {
                    name: "Saleem",
                    userName:"junaidsaleem",
                    email: "junaidsaleem@gmail.com"
                    
                }
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/signup')
            }} >SignUp</button>
        </div>
    )
}
export default Login;