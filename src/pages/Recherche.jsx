// import React from "react";
// import "../assets/css/profile.css"
import {URL_IP} from './config.jsx';
import Header from "../common/header";
import '../assets/css/styleGrid.css';
import '../assets/css/mystyle.css';
import MyLogin from "./Login";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
function Recherche() {
    let { id } = useParams();


    const [ListeEnchere, setListeEnchere] = useState(['dina', 'dinda', 'faly']);
    const [ListeCategorie, setListeCategorie] = useState([]);
    const [photo, setPhoto] = useState("https://via.placeholder.com/150");
    const [load, setLoad] = useState(false);
    const searchParams = new URLSearchParams(document.location.search);
    const [keyWord, setKeyWord] = useState("");
    const [categorieId, setCategorieId] = useState(null);
    const [prixMin, setPrixMin] = useState(null);
    const [state, setState] = useState(null);
    const [dateDebut, setDateDebut] = useState(null);
    function sub() {
        getListeEnchere();
        setLoad(false)
    }
    const getListeCategorie = () => {
        var fors = new FormData();
        // searchParams.get('search')
        fors.append("cle", keyWord);
        let url = URL_IP()+"categories";
        fetch(url, {
            method: 'GET'
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e)
            setListeCategorie(e.data);
            setLoad(true);
        }, (e) => {
            console.log(e);
        });
    }
    
    useEffect(() => {
        getListeEnchere();
        getListeCategorie();
    }, []);
    const getListeEnchere = () => {
        var fors = new FormData();
        // searchParams.get('search')
        if (prixMin != null) {
            fors.append("prixmin", prixMin);
        }
        if (prixMin != null) {
            fors.append("prixmin", prixMin);
        }
        if (categorieId != null) {
            console.log("<---->" + categorieId);
            fors.append("categorieId", categorieId);
        }
        if (dateDebut != null) {
            fors.append("dateDebut", dateDebut);
        }
        fors.append("cle", keyWord);
        let url = URL_IP()+"users/" + localStorage.getItem("id") + "/encheressearch";
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                "token": localStorage.getItem("token")
            },
            body: fors
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e)
            setListeEnchere(e.data);
            setLoad(true);
        }, (e) => {
            console.log(e);
        });
    }
    if (localStorage.getItem("token") == null) {
        // localStorage.clear();
        return (
            <MyLogin url={"/Recherche"} />
        );
    }

    if (load == false) {
        return (
            <div className="container">
                <Header />
                <div className="row profile">
                    <div>

                        <div className="container">
                            <div>
                                <h1>Liste des demandes
                                </h1>
                                <div className="col-md-9">
                                    <div className="profile-content">
                                    </div>
                                </div>
                                <div class="grid-container"></div>
                                <h2>Keep waiting.....</h2><p>
                                    ETU001483-ETU001384-ETU1462
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
            <div class="container " >
                <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarsExample09">
                            {/* <form> */}
                            <table border={"1"} class="table table-hover" style={{ "width": "900px" }}>
                                <tr>
                                    <th>Mot Cle</th>
                                    <th>prix minimum</th>
                                    <th>date debut</th>
                                    <th>State</th>
                                    <th>prix max</th>
                                    <th>date fin</th>

                                </tr>
                                <tbody>
                                    <tr>
                                        <td><input class="form-control" type="text" value={keyWord} onChange={(e) => { setKeyWord(e.target.value) }} width={"450px"} placeholder="Search" aria-label="Search" /></td>
                                        <td>

                                            <input class="form-control" type="text" value={prixMin} onChange={(e) => { setPrixMin(e.target.value) }} placeholder="Search" aria-label="Search" />

                                        </td>
                                        <td>
                                            <input class="form-control" type="text" value={dateDebut} onChange={(e) => { setDateDebut(e.target.value) }} placeholder="Search" aria-label="Search" />

                                        </td>
                                        <td>
                                            <select name="CategorieId" value={categorieId} placeholder="Categorie" onChange={(e) => { setCategorieId((e.target.value)); }}>
                                                {/* <option value={null}>Choix categorie</option> */}
                                                {ListeCategorie.map((element, index) => (
                                                    <option value={element.id}>{element.nom}</option>

                                                ))}
                                            </select>
                                        </td>
                                        <td>

                                            <button class="primary" onClick={(e) => { sub(); }}>RECHERCHE</button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        
                    </div>
                    {/* <div className="col-md-1"></div> */}
                    <div className="col-md-9" style={{ "float": "right" }}>
                        {/* <div className="profile-content"> */}
                        {/* <div className="container"> */}
                        <div>

                            <section id="work" class="portfolio-mf sect-pt4 route">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="title-box text-center">
                                                <h3 class="title">
                                                    Encheres Dispo
                                                    {/* {ListeEnchere.length} */}
                                                </h3>
                                                <p class="subtitle-a">
                                                </p>
                                                <div class="line-mf"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>

                            <div class="grid-container">
                                {ListeEnchere.map((employee, index) => {
                                    let itbe = "https://via.placeholder.com/150";
                                    if (employee.photo != undefined) {
                                        let pt = employee.photo;
                                        //     console.log(pt.length);
                                        if (pt.length > 0) {
                                            // setPhoto(pt[0].photo);
                                            // console.log(pt[0].photo)
                                            itbe = pt[0].photo;
                                            // itbe = pt[0].photo;
                                            // console.log(itbe);
                                        }
                                    }
                                    return (
                                        <div> <div class="col">
                                            <div class="card shadow-sm">
                                                <img src={itbe} width="100%" height="225" />

                                                <div class="card-body">
                                                    <p class="card-text">
                                                        {employee.id}</p>

                                                    <p class="card-text">
                                                        {employee.descriProduit}</p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-outline-secondary">{employee.durer}Heure</button>
                                                            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                        </div>
                                                        <small class="text-muted">
                                                            <NavLink to={"/ficheEnchere/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                <button type="button" className="btn btn-danger">
                                                                    Voir+
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

                    <div className="col-md-1">
                        
                        </div>
                        

                </div>

            </div>
        </div>
        // </div>


        // </div>

    )
}
export default Recherche;
// export default userProfileLayout(ListeEnchere);

