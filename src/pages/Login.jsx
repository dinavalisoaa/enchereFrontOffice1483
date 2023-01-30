import React from "react";
import "../assets/css/profile.css"
import Header from "../common/header";
import userProfileLayout from "../hoc/userProfileLayout";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import '../assets/css/styleGrid.css';
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import './config.jsx';
import {URL_IP} from './config.jsx';
function MyLogin(props) {
    const navigate = useNavigate()
    const { id } = useParams();
    const [login, setLogin] = useState('ramanga@u.com');
    const [password, setPassword] = useState('ramanga');
    const [error, setError] = useState("");
    const  [redirect,setRedirect]=useState(false);
    function log() {
        var fors = new FormData();
        fors.append("logins", login);
        fors.append("pwds", password);
        fetch(URL_IP()+"login", {
            method: 'POST',
            body: fors
        }).then((result) => {
            return result.json();

        }).then((e) => {
            // console.log(e.datas);
            if (e.datas.name != undefined) {
                localStorage.setItem("token", e.datas.name);
                localStorage.setItem("id", e.datas.id);
               setRedirect(true);
            } else {
                setError(e.datas.message);
            }
        }, (e) => {
        });
    
    }
    if(redirect){
        navigate(props.url);
        setRedirect(false);
        navigate(0);
    }
    return <>
        <div className="container">

            <div>
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                        </form>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow">
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow">
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow">
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow">
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow" title="Logout">
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="row profile">
                <div>

                    <div class="grid-container">
                        <div></div>
                        <div>
                            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h3 className="border-bottom pb-2 mb-0 mb-3">Authentification</h3>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <h4 htmlFor="exampleInputEmail1" className="form-label">Username</h4>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control form-control-user" onChange={(e) => { setLogin(e.target.value) }} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={login} name="email" required />
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                            </div>
                                            <h4 htmlFor="exampleInputEmail1" className="form-label">Email address</h4>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control form-control-user" onChange={(e) => { setPassword(e.target.value) }} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={password} name="email" required />
                                                <span className="input-group-text" id="basic-addon2">@</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary d-block btn-user w-100" onClick={(e) => { log() }} type="button">Login</button>
                                    

                                </form>
                                <button type="button" className="btn btn-success">S'insrire</button>
        <h4>{error}</h4>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>  </div>
                    </div>

                </div>
            </div></div>
    </>

}

export default MyLogin;