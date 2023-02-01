
import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import userProfileLayout from "../hoc/userProfileLayout";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import {URL_IP} from './config.jsx';

import '../assets/css/styleGrid.css';
import MyLogin from "./Login";
function Rencherir(props) {
    const [ListeEnchere, setListeEnchere] = useState(['dina', 'dinda', 'faly']);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    const [error, setError] = useState("...");
    const [ok, setOk] = useState("...");
    const navigate = useNavigate();
    const [exp, setExp] = useState(false);
    const [mise, setMise] = useState();
    const [toLogin, setToLogin] = useState(false);
    const employees = [
        { id: 1, name: 'Alice', country: 'Austria' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 2, name: 'Bob', country: 'Belgium' },
        { id: 3, name: 'Carl', country: 'Canada' }
    ];

    let { id } = useParams();

    useEffect(() => {
        getListeEnchere();
    }, []);
    useEffect(() => {
        getUser();
    })
    function unlog(i) {
        localStorage.clear();
        navigate("/login")
    }

    const getUser = () => {
        fetch(URL_IP()+"users/" + localStorage.getItem("id"), {
            method: 'GET'
            // headers: {
            //     "userId": localStorage.getItem("userId"),
            //     "hash": localStorage.getItem("hash")
            // },
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e.data[0].nom)
            setPrenom(e.data[0].prenom);
            setNom(e.data[0].nom)

            // if (e.error !== undefined) {
            // console.log("TSRA -->"+localStorage.getItem("id"));

            // } else {
            // }
        }, (e) => {
            console.log(e);
        });
    }
    function miser() {
        setError("loading....");
        // setError("..");
        setOk("loading....");
        var fors = new FormData();
        fors.append("prixMise", mise);
        fetch(URL_IP()+"encheres/" + id + "/enchereMoves", {
            method: 'POST',
            body: fors,
            headers: {
                "token": localStorage.getItem("id")
            },
        }).then((result) => {

            return result.json();
        }).then((e) => {
            console.log(e);
            if (e.error != undefined) {
                if (e.error.message == "loginerror") {
                    setExp(true);
                } else {
                    setOk("");
                    alert(e.error.message);
                    setError(e.error.message);
                }
            } else {
                setError("");
                setOk(e.data.name);
            }
            if (e.error.message == "500") {
                setToLogin(true);
            }
        }, (e) => {
            console.log("@@@" + e + " @@@");
        });
    }
    const getListeEnchere = () => {
        fetch(URL_IP()+"encheres/" + id, {
            method: 'GET',
            // headers: {
            //     "userId": localStorage.getItem("userId"),
            //     "hash": localStorage.getItem("hash")
            // },
        }).then((result) => {
            return result.json();
        }).then((e) => {
            console.log(e.data)
            // if (e.error !== undefined) {
            //     console.log(e.error);

            // } else {
            setListeEnchere(e.data);
            // }
        }, (e) => {
            console.log(e);
        });

    }
    if (exp == true) {
        localStorage.clear();
        navigate(0);
    }
    if (toLogin == true) {
        // alert("Login Expired");
        return (
            // <MyLogin url={"/rencherir/" + id} />
            <></>
        )

    }
    if (localStorage.getItem("token") == null) {
        // localStorage.clear();
        return (
            <MyLogin url={"/rencherir/" + id} />
        )

    }

    function log(val) {
        alert(val)

        // return ()    
    }

    return (

        <div className="container">
            <Header />
            <div>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Rencherir</h6>
                    <h3>Nom:{nom},{prenom}</h3>
                    <form>

                        <div class="flex-container">
                            <div>


                                {ListeEnchere.map((employee, index) => {
                                    return (
                                        <div className="my-3 p-3 bg-body rounded shadow-sm">

                                            <div className="profile-userpic">
                                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                                            </div>
                                            <div className="profile-usertitle">
                                                <div className="profile-usertitle-name">
                                                    <p><u>Description du Produit</u></p>
                                                    {employee.descriProduit}

                                                </div>

                                            </div>

                                            <hr />
                                            <div>

                                            </div>
                                            <div className="bd-example">
                                                <div className="list-group">
                                                    <p>Date d'expiration:{employee.dateExp}</p>
                                                    <p>Date d'expiration:{employee.prixMin}</p>

                                                    <h5><u>Proprietaire</u>:{employee.user?.nom}</h5>
                                                    <h5><u>categorie:{employee.categorieId}</u></h5>

                                                </div>
                                            </div>
                                        </div>



                                    )
                                })}

                            </div>
                            <div>


                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                    <div className="profile-userpic">
                                        <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="profile-usertitle-name">
                                            <h6 htmlFor="exampleInputEmail1" className="form-label"><strong>Name:{nom}</strong></h6>
                                            <h6 htmlFor="exampleInputEmail1" className="form-label"><strong>Firstname:{prenom}</strong></h6>

                                            <div className="input-group mb-6">
                                                <h5>Prix de mise:
                                                    <input type="text" onChange={(e) => { setMise(e.target.value) }} value={mise} className="form-control" placeholder="Prix Mise Ariary" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </h5>
                                            </div>
                                            <button class="btn btn-info d-block btn-user w-100" onClick={(e) => { miser() }} type="button">Miser</button>
                                        </div>

                                    </div>

                                    <hr />
                                    <div>

                                    </div>


                                </div>
                                </div>
                                <div>
                                <div className="my-3 p-3 bg-body rounded shadow-sm">
                                    {/* <div className="bd-example"> */}


                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <p>{error}{ok}!</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        {/* </div> */}

                                    </div>

                                </div>

                                <div>


                                </div>




                            </div>



                            <div>

                            </div>  <div>

                            </div>
                            {/* <div></div> */}

                        </div>



                    </form>
                </div>

            </div>
        </div>
    )
}
// export default userProfileLayout(Rencherir);
export default Rencherir;
