import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { BlogDashboard, EditUserProfile } from '../../../pages/prepage'
import { UserProfile, Tables, AddNewPost, BlogPost } from '../../../containers/prepage'

import { Errors } from '../../common/'

import './style.scss'

const Body = () => {


    return (
        <div className="main-content-container">
            <Routes>

                <Route path="/">
                    <Route index element={<BlogDashboard />} />
                    <Route path="blog-dashboard" element={<BlogDashboard />} />
                    <Route path=":userId" element={<UserProfile />} />
                </Route>

                <Route path="/blog-post" element={<BlogPost />} />
                <Route path="/add-new-post" element={<AddNewPost />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/user-profile">
                    <Route index element={<UserProfile />} />
                    <Route path="edit" element={<EditUserProfile />} />
                </Route>

            </Routes>
        </div>
    )
}

export default Body