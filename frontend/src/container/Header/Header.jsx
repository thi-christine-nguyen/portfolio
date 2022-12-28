import React from 'react';
import './Header.scss';
import {AppWrap} from '../../wrapper';



const Header = () => {

    
    return (
        <div className="align-transform">
            <div className='row'>
                <div className='title text-center'>
                    <h1>Welcome to my portfolio !</h1>
                    <div className = "desc mt-5">
                        <h5>
                            Nice to meet you ! I am Thi-Christine NGUYEN <br/>
                            I am a IT College student from France (Montpellier) <br/>
                        
                        </h5>
                    </div>
                    

                </div>
                <div className="row mt-5">
                    <div className='col text-center'>
                        <button type="button" class="btn btn-outline-light">My resume</button>
                    </div>
                   
                </div>
            </div>
           
        </div>

    );
};

export default AppWrap(Header, 'home');