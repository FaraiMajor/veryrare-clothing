import SignUpForm from '../../components/sign-up-form/signup-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

import "./authentication.scss"
const Authentication = () => {

    return (

        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication; 