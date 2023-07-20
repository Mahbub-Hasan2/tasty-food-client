import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from './firebase.init';
import { toast } from 'react-toastify';
import { AppContext } from '../../Layouts/AuthContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const provider = new GithubAuthProvider();

const LoginWithGithub = () => {

    let location = useLocation();
    let navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const auth = getAuth(app);
    const { setUserInfo } = React.useContext(AppContext);

    const signinWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log(user);

            if (user) {
                setUserInfo(user);
                navigate(from, { replace: true });
                toast.success("Your Registation Successfully", {
                    position: "bottom-left",
                });
            }
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                // Prompt the user to sign in with the credential that is associated with their account.
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
                // You can also use linkWithCredential() to link the accounts if the user wants to.
                // See https://firebase.google.com/docs/auth/web/account-linking for more information.
                if (error) {
                    toast.error(`${errorMessage}!!!`, {
                        position: "bottom-left",
                    });
                }
            } else {
                if (error) {
                    toast.error(`${errorMessage}!!!`, {
                        position: "bottom-left",
                    });
                }
                console.log(errorMessage);
            }
        }
    }

    return (
        <button onClick={signinWithGithub} className="">
            <BsGithub className="text-2xl text-primary" />
        </button>
    );
};

export default LoginWithGithub;
