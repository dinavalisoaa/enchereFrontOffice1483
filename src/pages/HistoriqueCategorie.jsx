import React from "react";
import Header from "../common/header";
import {URL_IP} from './config.jsx';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MyLogin from "./Login";
import { useNavigate } from "react-router-dom";
import '../assets/css/styleGrid.css';
import { useParams } from "react-router-dom";
function HistoriqueCategorie() {
    const [ListeEnchere, setListeEnchere] = useState([]);
    // const[error,setError]=useState();
    const [exp, setExp] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();

    const [load, setLoad] = useState(true);
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
    // const checkToken = () => {

    const getListeEnchere = () => {
        const url = URL_IP()+"users/" + localStorage.getItem("id") + "/categories/" + id + "/encheres";
        fetch(url, {
            method: 'GET',
        }).then((result) => {
            return result.json();
        }).then((e) => {

            console.log(url);
            console.log(e.data);
            // console.log(e.error);

            if (e.error !== undefined) {
                if (e.error.message == "loginerror") {
                    setExp(true);
                    console.log(e.error);

                }
                // setError(true);
            } else {
                setListeEnchere(e.data);
                setLoad(false);
            }
        }, (e) => {
            console.log(e);
        });
    }
    useEffect(() => {
        getListeEnchere();
    }, []);

    if (exp == true) {
        localStorage.clear();
        navigate(0);
    }
    if (localStorage.getItem("token") == null) {
        // localStorage.clear();
        return (
            <MyLogin url={"/HistoriqueCategorie"} />
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
    function Val() {
        if (ListeEnchere.length == 0) {
            <div>
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">
                            Pas de Encheres
                        </p>
                    </div>
                </div>
            </div>
        }
        return (<>
            {ListeEnchere.map((employee, index) => {
                let itbe = "https://via.placeholder.com/150";
                if (employee.photo != undefined) {
                    let pt = employee.photo;
                    //     console.log(pt.length);
                    if (pt.length > 0) {
                        // setPhoto(pt[0].photo);
                        // console.log(pt[0].photo)
                        itbe =  pt[0].photo ;
                        // itbe = pt[0].photo;
                        // console.log(itbe);
                    }
                }
                // require('../assets/art.png')
                return (
                    <div>
                        <div class="card shadow-sm">
                            <img alt="Alt content" width={"300px"} height={"140px"} src={itbe} />

                            <div class="card-body">
                                <p class="card-text">
                                    <h3>
                                        {employee.descriProduit}
                                    </h3>
                                    <p>Categorie:{employee.cat?.nom}</p>
                                    {/* <GenIcon key={}></GenIcon> */}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">

                                    </div>
                                    <small class="text-muted">
                                        <NavLink to={"/detailCategorie/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
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
            })}</>

        )
    }
    return (
        <div className="container">
            <Header />
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

                                <Val />
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}
// export default adminLayout(HistoriqueCategorie);
export default HistoriqueCategorie;