import React from 'react';
import img1 from '../assets/images/1.jpg';

function Dashboard() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select State
                            </button>
                            <ul className="dropdown-menu">
                                <li>Uttar Prtadesh</li>
                                <li>Punjab</li>
                                <li>Mumbai</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select District
                            </button>
                            <ul className="dropdown-menu">
                                <li>Mau</li>
                                <li>Lucknow</li>
                                <li>Gorakhpur</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Powerhouse
                            </button>
                            <ul className="dropdown-menu">
                                <li>Power house 1</li>
                                <li>Power house 2</li>
                                <li>Power house 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Cubicle
                            </button>
                            <ul className="dropdown-menu">
                                <li>CUB001</li>
                                <li>CUB002</li>
                                <li>CUB003</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-3">
                    <div className="col-3">
                        <div className="card" >
                            <div className="card-body text-center">
                                <img src={img1} className="card-img-top" alt="..." style={{ width: "50px", height: "75px" }} />
                                <p className="card-text" style={{ fontSize: "25px", fontWeight: "600", color: "gray" }}>Services 500</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" >
                            <div className="card-body text-center">
                                <img src={img1} className="card-img-top" alt="..." style={{ width: "50px", height: "75px" }} />
                                <p className="card-text" style={{ fontSize: "25px", fontWeight: "600", color: "gray" }}>Services</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" >
                            <div className="card-body text-center card-redbg">
                                <img src={img1} className="card-img-top" alt="..." style={{ width: "50px", height: "75px" }} />
                                <p className="card-text" style={{ fontSize: "25px", fontWeight: "600", color: "gray" }}>Services</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" >
                            <div className="card-body text-center card-redbg" >
                                <img src={img1} className="card-img-top" alt="..." style={{ width: "50px", height: "75px" }} />
                                <p className="card-text" style={{ fontSize: "25px", fontWeight: "600", color: "gray" }}>Services</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Dashboard;