import {useNavigate}  from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/pagina-inicial')

    }
    return (
        <>
            <p>Login</p>   
            <button onClick={handleClick}>Página Inicial</button>            
        </>
    );
}