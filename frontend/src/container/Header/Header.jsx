import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';

import {images} from '../../constants';


const Header = () => {
    return (
        <div className="app__header">
            <h2 className="head-text" >Welcome to my portfolio !</h2>
            <div className="row app__header_container">
                <div className="col-4">
                    <img src={images.profil} className="rounded float-start" alt="profile-bg"/>
                </div>
                <div className="col-8 p-3 mb-2 app__header_text text-dark rounded border border-primary">

                    <p>Nice to meet you ! I am Thi-Christine NGUYEN <br/>
                        23 years old, I'm a IT College student from France (Montpellier)
                    </p>
                </div>
            </div>






        </div>
    );
};

export default AppWrap(Header, 'home');