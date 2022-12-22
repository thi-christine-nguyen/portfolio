import React from 'react';
import './Header.scss';
import {AppWrap} from '../../wrapper';

import {images} from '../../constants';


const Header = () => {
    return (
        <div className="app__header">
            <h2 className="head-text" >Welcome to my portfolio !</h2>
            <div className="row app__header_container">
                
                <div className="col app__header_text text-dark rounded border border-primary">
                <p>
                    Nice to meet you ! I am Thi-Christine NGUYEN <br/>
                    I'm a IT College student from France (Montpellier) <br/>
                    You will be able so see some of my projects ! <br/>
                    Hope you enjoy !
                </p>
                </div>
            </div>






        </div>
    );
};

export default AppWrap(Header, 'home');