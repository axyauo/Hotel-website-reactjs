import React from 'react'
import './Amenities.css'
import 'boxicons'

export let Amenities = ()=> {
  return (
    <div className="appendTop52">
            <div className="fclty ">
                <h2 className="fclty__title">Amenities at hotel</h2>
                <div className="fclty__header flex-wrap">
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                        <i class='bx bxs-eyedropper'></i>
                        </span>
                        <span className="latoBold font16">Smoke Detector</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                        <i class='bx bxs-eyedropper'></i>
                        </span>
                        <span className="latoBold font16">Intercom</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/room_service.png" alt="Room Service" title="" />
                        </span>
                        <span className="latoBold font16">Room Service</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/power_backup.png" alt="Power Backup" title="" />
                        </span>
                        <span className="latoBold font16">Power Backup</span>
                    </p>
                </div>
                <div className="fcltyLst appendBottom20 row">
                    <div className="fcltyLst_item col-lg-3 col-6">
                        <p className="font16 latoBlack appendBottom10">Basic Facilities</p>
                        <ul>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Smoke Detector</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Intercom</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Room Service</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Power Backup</span></li>
                        </ul>
                    </div>
                    {/* <div className="fcltyLst_item">
                        <p className="font16 latoBlack appendBottom10">Transfers</p>
                        <ul>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Airport Transfers</span></li>
                        </ul>
                    </div> */}
                    <div className="fcltyLst_item col-lg-3 col-6">
                        <p className="font16 latoBlack appendBottom10">Safety and Security</p>
                        <ul>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>CCTV</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Fire Extinguishers</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Electronic Keycard</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Security</span></li>
                        </ul>
                    </div>
                    <div className="fcltyLst_item col-lg-3 col-6">
                        <p className="font16 latoBlack appendBottom10">Media and technology</p>
                        <ul>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>TV</span></li>
                        </ul>
                    </div>
                    <div className="fcltyLst_item col-lg-3 col-6">
                        <p className="font16 latoBlack appendBottom10">General Services</p>
                        <ul>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Luggage Storage</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Multilingual Staff</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Luggage Assistance</span></li>
                            <li className="font14 lineHight22 appendBottom3">✔ <span>Doctor on Call</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
