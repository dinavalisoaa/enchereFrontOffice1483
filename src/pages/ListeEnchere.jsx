
import { NavBar } from "../components/NavBar";
import userProfileLayout from "../hoc/userProfileLayout";
import Header from "../common/header";
import '../assets/css/styleGrid.css';
import '../assets/css/mystyle.css';
import {URL_IP} from './config.jsx';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
function ListeEnchere() {
    let { id } = useParams();

    const [ListeEnchere, setListeEnchere] = useState(['dina', 'dinda', 'faly']);
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
    const getListeEnchere = () => {
        let url=URL_IP()+"categories/" + id + "/encheres";
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
            //  let pics=employee.photo;
            //  console.log(pics.length);
            // console.log(e.data)
            // if (e.error !== undefined) {
            //     console.log(e.error);

            // } else {
            setListeEnchere(e.data);
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
        getListeEnchere();
    }, []);
    if (load == false) {
        return (
            <div className="container">
                <Header />
                <div className="row profile">
                    <div>

                        <div className="container">
                            <div>
                                <h1>Liste des encheres</h1>
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
    if(ListeEnchere.length==0){

        return (
            <div className="container">
                <Header />
                <div className="row profile">
                    <div>

                        <div className="container">
                            <div>
                                <h1>Liste des encheres</h1>
                                <div className="col-md-9">
                                    <div className="profile-content">
                                    </div>
                                </div>


                                <div class="grid-container"></div>
                                <h2>Pas d'enchere disponible....</h2><p>
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

            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">


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
                                                    Encheres Dispo
                                                    {ListeEnchere.length}
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
                                                        <button type="button" class="btn btn-sm btn-secondary"><span className="bi bi-watch"></span>Dead line:{employee.dateFarany}</button>

                                                    </p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-outline-secondary">{employee.durer}Heure</button>

                                                        </div>
                                                        <small class="text-muted">
                                                            <NavLink to={"/ficheEnchere/" + employee.id} className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active' : ''}`}>
                                                                <button type="button" className="btn btn-danger">
                                                                    Encherir
                                                                </button>

                                                            </NavLink>
                                                        </small>
                                                    </div>
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
        // </div>


        // </div>

    )
}
export default ListeEnchere;
// export default userProfileLayout(ListeEnchere);

