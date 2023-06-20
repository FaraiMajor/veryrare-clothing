import SignUpForm from '../../components/sign-up-form/signup-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import Footer from '../../components/footer/footer';

import { AuthenticationContainer } from './authentication.styles';
const Authentication = () => {

    return (
        <>
            <AuthenticationContainer>
                <SignInForm />
                <SignUpForm />
            </AuthenticationContainer>
            <Footer />
        </>
    )
}

export default Authentication; 