import React from 'react';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import app from './firebase.init';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginWithGoogle from './LoginWithGoogle';
import LoginWithGithub from './LoginWithGithub';
import { AppContext } from '../../Layouts/AuthContextProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let location = useLocation();
    let navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const auth = getAuth(app);
    const { userInfo, setUserInfo } = React.useContext(AppContext);

    const onSubmit = async data => {
        const { email, password } = data;

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setUserInfo(user);
                    navigate(from, { replace: true });
                    toast.success("Your Login Successfully", {
                        position: "bottom-left",
                    });

                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (error) {
                    toast.error(`${errorMessage}`, {
                        position: "bottom-left",
                    });
                }
            });
    };

    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-7 justify-center">
                        <div className="p-10 border md:col-span-5 col-span-7">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold mb-2">Login to your account</h1>
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
                                <div className="mb-5 text-center">
                                    <input type="email" {...register("email", { required: true })} placeholder='Email' id="email" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}

                                    <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder='Password' id="password" className="border w-full rounded-2xl bg-primary bg-opacity-20 px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary" />
                                    {errors.password && <span className='text-red-500'>This field is required & The password is less than 6 characters</span>}

                                    <button type='submit' className="border w-3/5 rounded-2xl bg-primary font-bold text-light px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="p-10   md:col-span-2 col-span-7 flex items-center bg-[url('../../assets/images/page-title-main.jpg')] w-full bg-cover bg-start bg-fixed  text-light">
                            <div className="text-center">
                                <h2 className="text-4xl font-extrabold mb-5">New Here?</h2>
                                <p className="text-base font-semibold mb-3 text-light">Create an account to get all features</p>
                                <Link to="/auth/signin" state={{ route: "Sign In", page: "Auth" }}>
                                    <button className="border w-full rounded-2xl bg-primary font-bold text-light px-4 p-1.5 my-2 outline-none border-transparent focus:border-transparent focus:ring-2 ring-primary">Create Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;