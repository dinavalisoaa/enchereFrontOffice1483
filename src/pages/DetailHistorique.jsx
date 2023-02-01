import { NavBar } from "../components/NavBar";
import userProfileLayout from "../hoc/userProfileLayout";
import Header from "../common/header";
import '../assets/css/styleGrid.css';
import '../assets/css/mystyle.css';
import {URL_IP} from './config.jsx';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
function DetailHistorique() {
    let { id } = useParams();
    // "users/{idusers}/encheres/{id}/enchereMoves"
    const [DetailHistorique, setDetailHistorique] = useState(['dina', 'dinda', 'faly']);
    const [enchereMoves, setEnchereMoves] = useState([]);
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

    const getMove = () => {

        let userId = localStorage.getItem("id");
        fetch(URL_IP()+"encheres/" + id + "/enchereMoves", {
            method: 'GET',
            headers: {
                "token": localStorage.getItem("token")
            },
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e);
            setEnchereMoves(e.data);
            setLoad(true);
            // setPhoto(e.photo);
            console.log();
            // }
        }, (e) => {
            console.log(e);
        });
    }
    const getDetailHistorique = () => {
        fetch(URL_IP()+"encheres/" + id, {
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
            setDetailHistorique(e.data);
            setLoad(true);
            // setPhoto(e.photo);
            console.log();
            // }
        }, (e) => {
            console.log(e);
        });
    }
    useEffect(() => {
        getDetailHistorique();
        getMove();
    }, []);
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
    }
    return (
        <div className="container">
            <Header />

            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="my-3 p-3 bg-body rounded shadow-sm">


                                {DetailHistorique.map((employee, index) => {
                                    console.log(employee);
                                    let itbe = require("../assets//table.PNG");
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

                                        <div>
                                            <div className="profile-userpic">
                                                <img src={itbe} className="img-responsive profile-img-center" alt="" />
                                            </div>
                                            <div className="profile-usertitle">
                                                <div className="profile-usertitle-name">
                                                    {employee.descriProduit}

                                                </div>
                                                <div className="profile-usertitle-job">
                                                    {employee.cat?.nom}

                                                </div>
                                            </div>

                                            <hr />
                                        </div>

                                    )
                                })}

                            </div>


                        </div>
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
                                                    Historique
                                                </h3>
                                                <div class="line-mf"></div>
                                            </div>
                                        </div>
                                    </div>



                                    {/* <div class="grid-container"> */}
                                    <div className="table-container">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="pb-2 mb-0">Tous les mouvements</h5>
                                            </div>

                                        </div>
                                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                                            <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>

                                            {/* </div> */}
                                            {enchereMoves.map((employee, index) => {
                                                let itbe = "https://via.placeholder.com/150";
                                                if (employee.photo != undefined) {
                                                    let pt = employee.photo;
                                                    if (pt.length > 0) {
                                                        itbe = pt[0].photo;
                                                    }
                                                }
                                                return (
                                                    <div><div className="d-flex text-muted pt-3">
                                                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

                                                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                                                            <strong className="d-block text-gray-dark"><h3>@{employee.user?.nom}</h3></strong>
                                                            <h4>Montant Mise:{employee.prixMise}Ariary</h4>
                                                            <h5>Date:{employee.dateMise}</h5>
                                                        </p>
                                                    </div>
                                                    </div>
                                                )
                                            })}
                                            {/* </table> */}

                                            <small className="d-block text-end mt-3">
                                                <a href="#">All updates</a>
                                            </small>
                                        </div>

                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
export default DetailHistorique;
// export default userProfileLayout(DetailHistorique);

