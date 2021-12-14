import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { BlogDashboard, BlogPost, AddNewPost, EditUserProfile } from '../../../pages/prepage'
import { UserProfile, Tables } from '../../../containers/prepage'

import { Errors } from '../../common/'

import './style.scss'

const Body = () => {


    return (
        <div className="main-content-container">
            <Routes>

                <Route exact path="/" element={<BlogDashboard />} />
                <Route path="/blog-dashboard" element={<BlogDashboard />} />

                <Route path="/blog-post" element={<BlogPost />} />
                <Route path="/add-new-post" element={<AddNewPost />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/user-profile">
                    <Route index element={<UserProfile />}/>
                    <Route path="edit" element={<EditUserProfile />}/>
                </Route>

                <Route path="*" element={<Errors />} />

            </Routes>
        </div>
    )
}

export default Body