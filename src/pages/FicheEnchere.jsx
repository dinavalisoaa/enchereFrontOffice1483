// import React from "react";
// import "../assets/css/profile.css"
// import userProfileLayout from "../hoc/userProfileLayout";
// import { NavLink } from "react-router-dom";
// import { useEffect,useState } from "react";
// function init(){
// const [FicheEnchere, setFicheEnchere] = useState();
// const getFicheEnchere = () => {
//     fetch("https://venteauxenchere-backoffice-production.up.railway.app/rechargements",{
//         method:'GET',
//         headers:{
//             "userId":localStorage.getItem("userId"),
//             "hash":localStorage.getItem("hash")
//         },
//     }).then((result)=>{
//         return result.json();
//     }).then((e)=>{
//         if(e.error !== undefined){
//             console.log(e.error);

//         } else {
//             setFicheEnchere(e);
//         }
//     },(e)=>{
//         console.log(e);
//     });
// }

// useEffect(()=>{
//     getFicheEnchere();
// },[]);
// }
// class FicheEnchere extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {}
//     }

//         render(){
//             return <>


//             </>
//         }
// }

// export default userProfileLayout(FicheEnchere);

import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { NavLink } from "react-router-dom";
import userProfileLayout from "../hoc/userProfileLayout";
import { useParams } from "react-router-dom";
import Header from "../common/header";
import {URL_IP} from './config.jsx';

import '../assets/css/styleGrid.css';
import ProfilePage from "./profile/ProfilePage";
import { render } from "@testing-library/react";
import Rencherir from "./Rencherir";
function FicheEnchere() {
    const [ListeEnchere, setListeEnchere] = useState(['dina', 'dinda', 'faly']);
    const [bool, setBool] = useState(false);
    const [idEnchere, setIdEnchere] = useState(0);
    const employees = [
        { id: 2, photo: "https://via.placeholder.com/150" }

    ];
    const [Photo, setPhoto] = useState(employees);
    let { id } = useParams();
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
            console.log(e.photo)
            // if (e.error !== undefined) {
            //     console.log(e.error);

            // } else {
            setListeEnchere(e.data);
            // console.log(e.photo);
            setPhoto(e.photo);
            // }
        }, (e) => {
            console.log(e);
        });
    }

    useEffect(() => {
        getListeEnchere();
    }, []);
    if (bool == true) {
        return (
            <Rencherir id={idEnchere} />

        )

    }
    function log(il) {
        // alert(il)
        setIdEnchere(il);
        setBool(true)
    }
    function Photos() {
        if (Photo.length > 0) {
            return (
                <>
                    {
                        Photo.map((va) => {
                            //    if()
                            console.log(va);
                            return (
                                <div>
                                    <div class="card-img">
                                        <img src={va.photo} width="100%" height="225" />
                                    </div>
                                    <div className="profile-userpic">

                                    </div>
                                </div>
                            )
                        })}
                </>
            )
        } 
            return (
                <>
                    {
                        employees.map((va) => {
                            //    if()
                            return (
                                <div>
                                    <div class="card-img">
                                    <img alt="Alt content" src={require('../assets/overlay-bg.jpg') }width="300" height="200" />

                                    </div>
                                    <div className="profile-userpic">

                                    </div>
                                </div>
                            )
                        })}
                </>
            )
        
    }
    return (

        <div className="container">
            <Header />
            <div>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Fiche d'encheres</h6>
                    <form>

                        <div class="flex-container">
                            {/* <div >1</div> */}
                            <div>
                                <div class="grid-container">
                                    <Photos />


                                </div>
                            </div>
                            <div>
                                {
                                ListeEnchere.map((employee, index) => {
                                    return (
                                        <div className="my-3 p-3 bg-body rounded shadow-sm">


                                            <div className="profile-usertitle">
                                                <div className="profile-usertitle-name">
                                                    <p><u>Description du Produit</u></p>
                                                    {employee.descriProduit}

                                                </div>

                                            </div>
                                            <div className="profile-userbuttons">
                                                {/* <button type="button" className="btn btn-warning"> */}
                                                <h4>
                                                    {/* <button class="btn btn-warning d-block btn-user w-100" onClick={(e) => { log(employee.id) }} type="button">Login</button> */}
                                                    <NavLink to={"/rencherir/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                        <button class="btn btn-info">Rencherir</button> </NavLink>

                                                </h4>

                                                {/* </button> */}
                                            </div>
                                            <hr />
                                            <div>

                                            </div>
                                            <div className="bd-example">
                                                <div className="list-group">
                                                    <p>Date d'expiration:{employee.dateExp}</p>
                                                    {/* <h5><u>Proprietaire</u>:{employee.user?.nom}</h5> */}
                                                    {/* <h5><u>categorie:{employee.categorieId}</u></h5> */}


                                                </div>
                                            </div>
                                        </div>



                                    )
                                })}
                            </div>

                            {/* <div></div> */}

                        </div>



                    </form>
                </div>

            </div>
        </div>
    )
}
// export default userProfileLayout(FicheEnchere);
export default FicheEnchere;
