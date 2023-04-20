import { useNavigate } from 'react-router-dom';
import './styles/main.css';
import './styles/util.css';
import imageGoogle from "../Login/images/icons/icon-google.png";
import { useState } from 'react';
export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleEntrar = ()=>{
        console.log(email)


    }


    return (
        <div className="limiter">
            <div className="container-login100 image-login">
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-53">
                            Login
                        </span>

                        <a href="#" className="btn-face m-b-20">
                            <i className="fa fa-facebook-official"></i>
                            Facebook
                        </a>

                        <a href="#" className="btn-google m-b-20">
                            <img src={imageGoogle} alt="GOOGLE" />
                            Google
                        </a>

                        <div className="p-t-31 p-b-9">
                            <span className="txt1">
                                Email
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                            <input 
                                className="input100" 
                                type="text" 
                                value={email}  
                                onChange={e => setEmail(e.target.value)} 
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="p-t-13 p-b-9">
                            <span className="txt1">
                                Senha
                            </span>

                            <a href="#" className="txt2 bo1 m-l-5">
                                Lembrar senha?
                            </a>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input 
                                className="input100" 
                                type="password" 
                                value={senha}  
                                onChange={e => setSenha(e.target.value)} 
                                name="pass" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button type='button' onClick={handleEntrar} className="login100-form-btn">
                                Entrar
                            </button>
                        </div>

                        <div className="w-full text-center p-t-55">
                            <span className="txt2">
                                Não é cadastrado?
                            </span>

                            <a href="#" className="txt2 bo1">
                                Cadastre-se
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}