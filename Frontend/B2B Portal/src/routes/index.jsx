import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Layout from '../pages/Layout'
import HomePage from '../pages/HomePage'
import SuppliersCookingPage from '../pages/SuppliersCookingPage'
import SuppliersCoolingPage from '../pages/SuppliersCooklingPage'
import SuppliersCleaningPage from '../pages/SuppliersCleaningPage'
import ConfigAdminsPage from '../pages/ConfigAdmins'
import ConfigUsersPage from '../pages/ConfigUsers'
import CustomersCookingPage from '../pages/CustomersCookingPage'
import CustomersCoolingPage from '../pages/CustomersCoolingPage'
import CustomersCleaningPage from '../pages/CustomersCleaningPage'

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
                path : "/suppliers/cooking",
                element : <SuppliersCookingPage/>
            },
            {
                path : "/suppliers/cooling",
                element : <SuppliersCoolingPage/>
            },
            {
                path : "/suppliers/cleaning",
                element : <SuppliersCleaningPage/>
            },
            {
                path : "/customers/cooking",
                element : <CustomersCookingPage/>
            },
            {
                path : "/customers/cooling",
                element : <CustomersCoolingPage/>
            },
            {
                path : "/customers/cleaning",
                element : <CustomersCleaningPage/>
            },
            {
                path : "/config/administrators",
                element : <ConfigAdminsPage/>
            },
            {
                path : "/config/users",
                element : <ConfigUsersPage />
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