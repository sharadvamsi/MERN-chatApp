import React from 'react';

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Signup <span className="text-blue-300">avvu dude</span></h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">FullName</span>
                        </label>
                        <input type="text" placeholder="Enter fullname" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">confirm Password</span>
                        </label>
                        <input type="password" placeholder="confirm password" className="w-full input input-bordered h-10" />
                    </div>

                    <div className='flex'>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Male</span>
                                <input type="checkbox" className='checkbox border-zinc-300' />
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Female</span>
                                <input type="checkbox" className='checkbox border-zinc-300' />
                            </label>
                        </div>
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Signup</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signup;


//starter code for this component

/*
const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Signup <span className="text-blue-300">avvu dude</span></h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">FullName</span>
                        </label>
                        <input type="text" placeholder="Enter fullname" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">confirm Password</span>
                        </label>
                        <input type="password" placeholder="confirm password" className="w-full input input-bordered h-10" />
                    </div>

                    <div className='flex'>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Male</span>
                                <input type="checkbox" className='checkbox border-zinc-300' />
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Female</span>
                                <input type="checkbox" className='checkbox border-zinc-300' />
                            </label>
                        </div>
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Signup</button>
                    </div>
                </form>
            </div>

        </div>
    );
};
*/