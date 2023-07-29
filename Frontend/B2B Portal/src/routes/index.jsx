import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import HomePage from '../pages/HomePage'
import SuppliersPage from '../pages/SuppliersPage'
import CustomersPage from '../pages/CustomersPage'
import Layout from '../pages/Layout'

const router = createBrowserRouter([
    {
        element : <Layout />,
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(!token) throw redirect ('/login')
            return null
        },
        children : [
            {
                path : "/",
                element : <HomePage/>
            },
            {
                path : "/home",
                element : <HomePage/>
            },
            {
                path : "/suppliers",
                element : <SuppliersPage/>
            },
            {
                path : "/customers",
                element : <CustomersPage/>
            }
        ]
    },
    {
        path : '/login',
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(token) throw redirect ('/home')
            return null
        },
        element : <LoginPage />
    },
    {
        path : "/register",
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(token) throw redirect ('/home')
            return null
        },
        element : <RegisterPage />
    },
    {
        path : "/forgot-password",
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(token) throw redirect ('/home')
            return null
        },
        element : <ForgotPasswordPage />
    }
])

export default router;