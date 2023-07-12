import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AsyncDispatch } from 'Data/Utils/Redux';
import { loginUserAsync, registerUserAsync } from 'Data/Actions/User';
import { ILoginUserPayload, IRegisterUserPayload } from 'Data/Interfaces';
import { SetActivePage } from 'Data/Actions/Navigation';
import 'Components/Login/Login.less';
import { Pages } from 'Data/Objects/State';

export default function LoginPage() {
    const dispatch: AsyncDispatch = useDispatch();
    const [showRegister, setShowRegister] = useState(false);

    const attemptLoginUser = (payload: ILoginUserPayload) => dispatch(loginUserAsync(payload));
    const attemptRegisterUser = (payload: IRegisterUserPayload) => dispatch(registerUserAsync(payload));

    const chageCurrentPage = () => dispatch(SetActivePage(Pages.HOME));

    const handleLoginUser = (event) => {
        const data = event?.target;
        event.preventDefault();

        const username = data?.username.value;
        const password = data?.password.value;

        attemptLoginUser({ username, password })
            .then(() => {
                chageCurrentPage();
            })
    }

    const handleRegister = (event) => {
        const data = event?.target;
        event.preventDefault();

        const username = data?.username.value;
        const email = data?.email.value;
        const password = data?.password.value;

        attemptRegisterUser({ username, email, password })
            .then(() => {
                chageCurrentPage();
            })
    }

    const renderLoginForm = () => {
        return (<>
            <h1>Login</h1>
            <form id="loginForm" onSubmit={ handleLoginUser }>
                <input id="username" type="text" placeholder='Username' />
                <input id="password" type="password" placeholder='Password' />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span onClick={ () => setShowRegister(true) }>Register</span> </p>
        </>)
    }

    const renderResisterForm = () => {
        return (<>
            <h1>Register</h1>
            <form id="loginForm" onSubmit={ handleRegister }>
                <input id="username" type="text" placeholder='Username' />
                <input id="email" type="text" placeholder='Email' />
                <input id="password" type="password" placeholder='Password' />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <span onClick={ () => setShowRegister(false) }>Login</span> </p>
        </>)
    }

    const renderContent = () => {
        if(showRegister) {
            return renderResisterForm()
        }
        
        return renderLoginForm()
    }

    return (
        <div className="loginPage">
            { renderContent() }
        </div>
    )
}