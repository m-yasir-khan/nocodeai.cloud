import React from 'react';
// import Form from '../Components/Form';
import {paths} from './paths';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesCreated = () => {
    return (
        <BrowserRouter>
            <Routes>
                {paths?.map((get) => {
                    if(get.path) {
                        return <Route key={get.id} path={get.path} element={<get.component />} />
                    }
                })}
                {/* <Route path="/" element={<App/>} />
                <Route path="form" element={<Form />} />
                <Route path="usecase-bpm" element={<App />} />
                <Route path="workflow" element={<App />} />
                <Route path="security" element={<App />} />
                <Route path="organization" element={<App />} />
                <Route path="users" element={<App />} />
                <Route path="database" element={<App />} />
                <Route path="integrations" element={<App />} />
                <Route path="reports-dashboard" element={<App />} />
                <Route path="devops" element={<App />} />
                <Route path="iot" element={<App />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export {RoutesCreated}