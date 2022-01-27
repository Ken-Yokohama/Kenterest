import React from 'react';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';    //This is just a google Logo
import logo from '../assets/logowhite.png';
import favLogoWhite from '../assets/favicon-transparent-white.png';

import {client} from '../client'

function Login(props){
    const navigate = useNavigate();

    const responseGoogle=(response)=>{
        localStorage.setItem('user', JSON.stringify(response.profileObj));

        const {name, googleId, imageUrl} = response.profileObj;

        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name, 
            image: imageUrl
        }

        client.createIfNotExists(doc)
            .then(()=>{
                navigate('/', {replace: true})
            })
    }

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <div className="absolute flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-orange-500">
                {/* Container */}
                    <div className="flex bg-white h-96 m-10 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
                        {/* Content1 */}
                        <div className="flex flex-col border-2 border-white bg-red-700 justify-center items-center basis-full rounded-3xl">
                            <div className="p-0 ">
                                <img src={favLogoWhite} width="40px" alt="logo" />
                            </div>
                            <div className="p-5">
                                <img src={logo} width="230px" alt="logo" />
                            </div>

                            <div className="shadow-2xl">
                                <GoogleLogin 
                                    clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                                    render={(renderProps)=>(
                                        <button
                                            type="button"
                                            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            <FcGoogle className="mr-4" /> Sign in with Google
                                        </button>
                                    )}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy="single_host_origin"
                                />
                            </div>
                        </div>
                        {/* Content2 */}
                        <div className="hidden md:flex flex-col justify-center items-center basis-full text-red-700 font-sans text-center">
                            <h1 className="font-bold text-6xl pb-4">Hello, There!</h1>
                            <p className="w-3/4">Kenterest is a clone of the popular website Pinterest. Please sign in with Google to authenticate your account and Enjoy!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;