import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/signup-form';
import GoogleButton from 'react-google-button'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user)
        console.log(userDocRef)

    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <GoogleButton onClick={logGoogleUser} />
            {/* </GoogleButton> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn