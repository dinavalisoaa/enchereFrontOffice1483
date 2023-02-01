import React from "react";
import adminLayout from "../hoc/adminLayout";
import Header from "../common/header";
import { Link, Navigate } from "react-router-dom";

import ModalComponent from "../components/ModalComponent";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MyLogin from "./Login";
import { useNavigate } from "react-router-dom";
import '../assets/css/styleGrid.css';
import {URL_IP} from './config.jsx';

function Historique() {
    

    const [Categorie, setCategorie] = useState([]);
    // const[error,setError]=useState();
    const [exp, setExp] = useState(false);
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    const getCategorie = () => {
        const url = URL_IP()+"categories/users/" + localStorage.getItem("id");
        fetch(url, {
            method: 'GET',
        }).then((result) => {
            return result.json();
        }).then((e) => {

            console.log(url);
            // console.log(e.data);
            // console.log(e.error);

            if (e.error !== undefined) {
                if (e.error.message == "loginerror") {
                    setExp(true);
                    console.log(e.error);

                }
                // setError(true);
            } else {
                setCategorie(e.data);
                setLoad(false);
            }
        }, (e) => {
            console.log(e);
        });
    }
    useEffect(() => {
        getCategorie();
    }, []);

    if (exp == true) {
        localStorage.clear();
        navigate(0);
    }
    if (localStorage.getItem("token") == null) {
        // localStorage.clear();
        return (
            <MyLogin url={"/historique"} />
        )

    }
    if (load == true) {
        // navigate(0);
        return (
            <div className="container">
                <Header />
                <div className="row profile">
                    <div>

                        <div className="container">
                            <div>
                                <h1>Liste des demandes</h1>
                                <div className="col-md-9">
                                    <div className="profile-content">
                                    </div>
                                </div>


                                <div class="grid-container"></div>
                                <h1>Keep waiting.....</h1>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        );
    }
    return (
        <div className="container">
            <Header />
            <div class="container " >
                <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                    <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      
                        <li class="nav-item">
                            <Link tag="a" className="nav-link" to="/historique">
                                <button className="btn btn-primary">
                                Par categorie</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="a" className="nav-link" to="/mesencheres">
                                <button className="btn btn-primary">
                            Global</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            {/* <button class="btn btn-info d-block btn-user w-100" onClick={(e) => { miser() }} type="button">Miser</button> */}
                        </li>
                    </ul>
                </div>
                    </div>
                </nav>
            </div>
            <div className="row profile">
                <div>

                    <div className="container">
                        <div>
                            <div className="col-md-9">
                                {/* <div className="profile-content"> */}
                                <div className="flex-container">
                                    <div>

                                        <h3><u>Vos encheres</u></h3>

                                    </div>
                                    <div>
                                        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                                            {/* <div class="container-fluid"> */}
                                            <div class="collapse navbar-collapse" id="navbarsExample09">
                                                <h1>randriamifidydina@u.com</h1>                                             </div>
                                            {/* </div> */}
                                        </nav>
                                    </div>
                                    <div>
                                    </div>

                                </div>

                                {/* </div> */}
                            </div>
                            <div class="grid-container">

                                {Categorie.map((employee, index) => {
                                    let itbe = "https://via.placeholder.com/150";
                                   
                                    return (
                                        <div>
                                            <div class="card shadow-sm">
                                                <img alt="Alt content" src={require('../assets/art.png')} />

                                                <div class="card-body">
                                                    <p class="card-text">
                                                        <h3>
                                                            {employee.nom}
                                                        </h3>
                                                        {/* <p>Categorie:{employee.cat?.nom}</p> */}
                                                    </p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="btn-group">

                                                        </div>
                                                        <small class="text-muted">
                                                            <NavLink to={"/historiqueCategorie/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                <button type="button" className="btn btn-danger btn-sm">
                                                                    Detail+
                                                                </button>

                                                            </NavLink>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}
// export default adminLayout(Historique);
export default Historique;