import { NavBar } from "../components/NavBar";
import userProfileLayout from "../hoc/userProfileLayout";

import { Link, Navigate } from "react-router-dom";
import Header from "../common/header";
import '../assets/css/styleGrid.css';
import '../assets/css/mystyle.css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import './config.jsx';
import {URL_IP} from './config.jsx';
import React from "react";
function MesEncheres() {
    let { id } = useParams();

    const [list, setList] = useState(['ss']);
    const [photo, setPhoto] = useState("https://via.placeholder.com/150");
    const [load, setLoad] = useState(false);
    const employees = [
        { id: 1, name: 'Alice', country: 'Austria' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 3, name: 'Carl', country: 'Canada' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' },
        { id: 4, name: 'Jack', country: 'Ui' }
    ];
    const getListe= () => {
        let url = URL_IP()+"usersencheres/"+localStorage.getItem("id");
        console.log(url);
        fetch(url, {
            method: 'GET',
            // headers: {
            //     "userId": localStorage.getItem("userId"),a
            //     "hash": localStorage.getItem("hash")
            // },
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e)
            setList(e.data);
            setLoad(true);
            // setPhoto(e.data.photo);
            // console.log(e.data);
            console.log();
            // }
        }, (e) => {
            console.log(e);
        });
    }
    useEffect(() => {
        getListe();
    },[]);

    if (load == false) {
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
                                <h2>Keep waiting.....</h2><p>
                                    ETU001483-ETU001384-ETU1462-ETU001475
                                </p>
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
            

                    <div className="col-md-1">
                        </div>
                        
                    <div className="col-md-11">
                    <div class="grid-container">
                                {list.map((employee, index) => {
                                    let itbe = "https://via.placeholder.com/150";
                                    if (employee.photo != undefined) {
                                        let pt = employee.photo;
                                        //     console.log(pt.length);
                                        if (pt.length > 0) {
                                            // setPhoto(pt[0].photo);
                                            // console.log(pt[0].photo)
                                            itbe = pt[0].photo;
                                            // itbe = pt[0].photo;
                                            //  console.log(itbe);
                                        }
                                    }
                                    return (
                                        <div class="row"> <div class="col">
                                            <div class="card shadow-sm">
                                                <img src={itbe} width="100%" height="225" />

                                                <div class="card-body">
                                                    <p class="card-text">
                                                        {employee.id}</p>
                                                    <p class="card-text">
                                                        <h4><u>{employee.descriProduit}</u></h4></p>
                                                    <p>
                                                        <button type="button" class="btn btn-sm btn-primary">{employee.cat?.nom}</button>

                                                    </p>

                                                    <p>
                                                        <button type="button" class="btn btn-sm btn-secondary"><span className="bi bi-watch"></span>Dead line:{employee.dateFarany}</button>

                                                    </p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-outline-secondary">{employee.durer}Heure</button>

                                                        </div>
                                                        <small class="text-muted">
                                                            <NavLink to={"/detailCategorie/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                <button type="button" className="btn btn-danger">
                                                                    Voir les mouvements
                                                                </button>

                                                            </NavLink>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>

                                    )
                                })}</div>
                        </div>
                    </div>

            // </div>
        // </div >
    )
}
export default MesEncheres;
// export default userProfileLayout(ListeEnchere);

