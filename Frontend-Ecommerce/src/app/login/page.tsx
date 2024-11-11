"use server";

import React from "react";
import { handleLogin } from "./actions";

export default async function Login() {
    return (
        <form action={handleLogin} className="w-[40%] mx-auto p-4 bg-white shadow-md rounded-lg space-y-6">
            <div>
                <label>Email</label>
                <input name='email' type='email' ></input>
            </div>
            <div>
                <label>Password</label>
                <input name='password' type='password' ></input>
            </div>
            <button 
            className="w-full text-slate-100 font-semibold bg-slate-500 py-2 rounded-md transition duration-200 hover:bg-slate-700">
                Iniciar Sesion</button>
        </form>
    )
}