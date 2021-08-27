import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderMain from "../home/HeaderMain";
import Footer from "../home/Footer";
import karpaty1 from '../../images/Karpaty1.jpg'
import karpaty2 from '../../images/Karpaty2.jpg'
import karpaty3 from '../../images/Karpaty3.jpg'

class Carpatians extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderMain/>
                <h2 className="excursion__detailed-main-header">Informacja o wycieczce:</h2>
                <h3 className="excursion__detailed-second-header">Wyprawa w góry</h3>
                <div className="excursion__detailed-info-container">
                    <div className="excursion__detailed-info">
                        <div className="excursion__detailed-main-info">
                            <h4 className="excursion__detailed-inner-header">main info</h4>
                            <p className="excursion__detailed-price">Cena: $50</p>
                        </div>
                        <p className="excursion__detailed-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="excursion__detailed-order">
                            <button className="single-btn excursion__detailed-btn">Rezerwuj</button>
                        </div>
                    </div>
                    <div className="excursion__detailed-info-images">
                        <img src={karpaty1}/>
                        <img src={karpaty2}/>
                        <img src={karpaty3}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Carpatians;