import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/hero-1.svg" className="max-w-md" />
                <div>
                    <h1 className="text-5xl font-bold">Discover Unique Products & Exclusive Deals!</h1>
                    <p className="py-6">Enjoy seamless shopping with fast shipping, secure checkout, and exceptional customer service. Start exploring today and uncover treasures that you won't find anywhere else!</p>
                    <Link to="/signup" className="btn btn-primary">Create Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;