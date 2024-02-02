'use client'

import { AuthContext } from "@/context/auth-context";
import { Button, Grid, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Login = () => {
    const { userInfo } = useContext(AuthContext)  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    useEffect(() => {
        if (userInfo) {
            router.push('/dashboard')
        }
    })

    const handleLogIn = async () => {
        const res = await axios.post('https://reqres.in/api/login', { email: email, password: password })
        console.log(res);
        
    }

    return (
        <div className="bg-white w-[600px]">
        <Grid container className="flex align-center justify-center">
            <Grid item xs={3}>
                <Typography className="text-black">Email</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={3}>
                <Typography className="text-black">Password</Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
            </Grid>
        </Grid><Button className="flex justify-end" onClick={handleLogIn}>Login</Button>
        </div>
    )
}

export default Login;