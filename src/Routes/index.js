import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Create from '../components/Create';
import Update from '../components/Update';
import Read from '../components/Read';
import Delete from '../components/Delete';
import Registration from '../components/Registration'

function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/cadastrar' element={<Create />} />
                <Route path='/atualizar' element={<Update />} />
                <Route path='/pesquisar' element={<Read />} />
                <Route path='/deletar' element={<Delete />}/>
                <Route path='/meucadastro' element={<Registration />}/>                
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;