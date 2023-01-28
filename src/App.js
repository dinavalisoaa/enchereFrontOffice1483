// import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import FicheEnchere from './pages/FicheEnchere';
import ListeEnchere from './pages/ListeEnchere';

import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/vendor.bundle.base.css';
import './assets/bootstrap.min.css';
import { NavBar } from './components/NavBar';

import { CardHeaderProps } from 'react-bootstrap/esm/CardHeader';
import Rencherir from './pages/Rencherir';
import MyLogin from './pages/Login';
import Historique from './pages/Historique';
import Categorie from './pages/Categorie';
import HistoriqueCategorie from './pages/HistoriqueCategorie';
import DetailHistorique from './pages/DetailHistorique';
import Recherche from './pages/Recherche';
import AllEnchere from './pages/AllEnchere';
import MesEncheres from './pages/MesEncheres';
function App() {
  return (
        <Router>
            <Routes>
            {/* <Header /> */}
            {/* <Layout {...props}> */}
                <Route exact path='/' element={<Categorie/>} />
                <Route exact path='/login' element={<MyLogin/>} />
                <Route exact path='/all' element={<AllEnchere/>} />

                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/historique' element={<Historique/>} />
                <Route exact path='/categorie' element={<Categorie/>} />
                {/* / */}
                <Route exact path='/historiqueCategorie/:id' element={<HistoriqueCategorie/>} />
                <Route exact path='/detailCategorie/:id' element={<DetailHistorique/>} />
                <Route exact path='/recherche' element={<Recherche/>} />
                <Route exact path='/mesencheres' element={<MesEncheres/>} />

                {/* MesEncheres */}

                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/listeEnchere/:id' element={<ListeEnchere/>} />
                <Route exact path='/ficheEnchere/:id' element={<FicheEnchere />} />
                <Route exact path='/rencherir/:id' element={<Rencherir />} />

                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
            </Routes>  
        </Router>
    )
}

export default App;
