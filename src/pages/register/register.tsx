import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/contexts/userContext";

function Register() {
    const navigate = useNavigate();
    const {handleRegister} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div>
            <input placeholder="Name" type="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => handleRegister(name, email, password)}>Next</button>
        </div>
    )
}

export default Register;