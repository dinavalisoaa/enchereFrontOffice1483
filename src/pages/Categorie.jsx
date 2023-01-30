import { NavBar } from "../components/NavBar";
import userProfileLayout from "../hoc/userProfileLayout";
import Header from "../common/header";
import '../assets/css/styleGrid.css';
import { Link, Navigate } from "react-router-dom";
import '../assets/css/mystyle.css';
import {URL_IP} from './config.jsx';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Categorie() {
    const [Categorie, setCategorie] = useState(['dina', 'dinda', 'faly']);
    const [photo, setPhoto] = useState("https://via.placeholder.com/150");
    const [load, setLoad] = useState(false);
    const [keyWord, setKeyWord] = useState("");

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
    const getCategorie = () => {
        fetch(URL_IP()+"categories", {
            method: 'GET',
            // headers: {
            //     "userId": localStorage.getItem("userId"),a
            //     "hash": localStorage.getItem("hash")
            // },
        }).then((result) => {
            return result.json();
        }).then((e) => {
            // console.log()
            //  let pics=employee.photo;
            //  console.log(pics.length);
            // console.log(e.data)
            // if (e.error !== undefined) {
            //     console.log(e.error);

            // } else {
            setCategorie(e.data);
            setLoad(true);
            // setPhoto(e.photo);
            console.log();
            // }
        }, (e) => {
            console.log(e);
        });
    }
    useEffect(() => {
        getCategorie();
    }, []);
    function Recherche() {
        return (
            <div className="container">
                <Header />

                <div className="container">
                    <hr />
                    <div className="row profile">
                        {/* <img alt="Alt content" src={require('../assets/img.PNG')} /> */}
                        <div className="col-md-3">
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-11" style={{ "float": "right" }}>
                            {/* <div className="profile-content"> */}
                            {/* <div className="container"> */}
                            <div>
                                <section id="work" class="portfolio-mf sect-pt4 route">
                                    <div class="container">
                                        <div class="row">

                                            <div class="col-sm-12">
                                                <div class="title-box text-center">
                                                    <h3 class="title">
                                                        {keyWord}

                                                    </h3>
                                                    <p class="subtitle-a">
                                                    </p>
                                                    <div class="line-mf">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                                <div class="grid-container">
                                    {Categorie.map((employee, index) => {
                                        let itbe = "https://via.placeholder.com/150";

                                        return (

                                            <div> <div class="col">
                                                <div class="card shadow-sm">
                                                    <img alt="Alt content" src={require('../assets/art.png')} />

                                                    <div class="card-body">

                                                        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group">
                                                            </div>
                                                            <small class="text-muted">
                                                                <NavLink to={"/listeEnchere/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                    <button type="button" className="btn btn-danger btn-sm">
                                                                        {employee.nom}
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



                    </div>

                </div>
            </div>
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

    } if (keyWord != "") {
        return (
            <Recherche />

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
                                    <Link tag="a" className="nav-link" to="/categorie">
                                        <button className="btn btn-primary">
                                            HOME</button>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link tag="a" className="nav-link" to="/historique">
                                        <button className="btn btn-primary">
                                            History</button>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link tag="a" className="nav-link" to="/all">
                                        <button className="btn btn-primary">
                                            Enchere encours</button>
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
            <div className="container">
                <hr />
                <div className="row profile">
                    {/* <img alt="Alt content" src={require('../assets/img.PNG')} /> */}

                    <div class="container">
                        <div className="col-md-3">

                        </div>

                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-11" style={{ "float": "right" }}>
                            {/* <div className="profile-content"> */}
                            {/* <div className="container"> */}
                            <div>
                                <section id="work" class="portfolio-mf sect-pt4 route">
                                    <div class="container">
                                        <div class="row">

                                            <div class="col-sm-12">
                                                <div class="title-box text-center">
                                                    <h2 class="title">
                                                        Bienvenu dans le site numero 1 dans ventes aux enchères
                                                    </h2>
                                                    <p class="subtitle-a">
                                                    </p>
                                                    <div class="line-mf">

                                                    </div>
                                                </div>

                                                <div class="title-box text-center">
                                                    <h3 class="title">
                                                        Categories

                                                    </h3>
                                                    <p class="subtitle-a">
                                                    </p>
                                                    <div class="line-mf">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                                <div class="grid-container">
                                    {Categorie.map((employee, index) => {
                                        let itbe = "https://via.placeholder.com/150";

                                        return (

                                            <div> <div class="col">
                                                <div class="card shadow-sm">
                                                    <img alt="Alt content" src={require('../assets/art.png')} />

                                                    <div class="card-body">

                                                        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group">
                                                            </div>
                                                            <small class="text-muted">
                                                                <NavLink to={"/listeEnchere/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                    <button type="button" className="btn btn-danger btn-sm">
                                                                        {employee.nom}
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



                    </div>

                </div>
            </div>
        // </div>


        // </div>

    )
}
export default Categorie;
// export default userProfileLayout(Categorie);

