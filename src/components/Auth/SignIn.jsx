import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import app from './firebase.init';
import LoginWithGoogle from './LoginWithGoogle';
import LoginWithGithub from './LoginWithGithub';
import { AppContext } from '../../Layouts/AuthContextProvider';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = getAuth(app);

    let location = useLocation();
    let navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const { setUserInfo } = React.useContext(AppContext);

    const onSubmit = data => {
        const { email, password } = data;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    toast.success("Your Registation Successfully", {
                        position: "bottom-left",
                    });
                    updateUserInfo(data);
                    setUserInfo(user);
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`, {
                    position: "bottom-left",
                });
            });
    };


    const updateUserInfo = (formData) => {
        updateProfile(auth.currentUser, {
            displayName: formData.name,
            photoURL: formData.photo
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            toast.error("There was a problem adding your name You can add a name later.", {
                position: "bottom-left",
            });
        });

    };

    return (
        <div>
            <div>
                <div className="container mx-auto py-10">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="grid grid-cols-7 justify-center">
                            <div className="p-10 border md:col-span-5 col-span-7">
                                <div className="text-center">
                                    <h1 className="text-3xl font-bold mb-2">Sign In to Continue Access</h1>
                                    <p className="text-sm text-gray-600 mb-2">Login using social networks</p>
                                    <div className="flex gap-4 py-3  justify-center">
                                        <LoginWithGoogle />
                                        <LoginWithGithub />
                                    </div>
                                    <div className="inline-flex items-center justify-center w-full gap-5">
                                        <hr className="border w-5/6"></hr>
                                        <div className="">or</div>
                                        <hr className="border w-5/6"></hr>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="md:flex gap-5">
                                        <div className="w-full">
                                            <input type="text" {...register("name", { required: true })} placeholder='Your Name' id="name" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                            {errors.name && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className="w-full">
                                            <input type="text" {...register("photo", { required: true })} placeholder='Photo Url' id="name" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                            {errors.photo && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="">
                                            <input type="email" {...register("email", { required: true })} placeholder='Email' id="email" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                            {errors.email && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className="">
                                            <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder='Password' id="password" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                            {errors.password && <span className='text-red-500'>This field is required & The password is less than 6 characters</span>}
                                        </div>
                                        <div className="text-center">
                                            <button type='submit' className="border w-3/5 rounded-2xl bg-primary font-bold text-light px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary">Create Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="p-10   md:col-span-2 col-span-7 flex items-center bg-[url('../../assets/images/page-title-main.jpg')] w-full bg-cover bg-start bg-fixed  text-light">
                                <div className="text-center">
                                    <h2 className="text-4xl font-extrabold mb-5">Alredy a User?</h2>
                                    <p className="text-base font-semibold mb-3 text-light">To keep connected with us please login with your personal information</p>
                                    <Link to="/auth/login" state={{ route: "Log In", page: "Auth" }}>
                                        <button className="border w-full rounded-2xl bg-primary font-bold text-light px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary">Log In</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;