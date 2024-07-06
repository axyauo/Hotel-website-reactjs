import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './BookTable.css';

export default function BookTable() {
  const [showModal, setShowModal] = useState(false);

  const handleVideoButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
        <div className="py-5 px-0 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="video">
                        <button 
                            type="button" 
                            className="btn-play" 
                            onClick={handleVideoButtonClick}
                        >
                            <span><i className='bx bx-play-circle'></i></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                        <h5 className="section-title ff-secondary text-color tex-center">Reservation</h5>
                        <h1 className="text-white mb-4">Book A Table Online</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date &amp; Time" data-target="#date3" data-toggle="datetimepicker"/>
                                        <label for="datetime">Date &amp; Time</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="select1">
                                            <option value="1">People 1</option>
                                            <option value="2">People 2</option>
                                            <option value="3">People 3</option>
                                        </select>
                                        <label for="select1">No Of People</label>
                                        </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Special Request" id="message" style={{height: '100px'}}></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn1 w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Body>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/OhGJGUKh21E" title="Video"></iframe>
                </div>
            </Modal.Body>
        </Modal>
    </>
  );
}





<form>
<div class="row g-3">
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="name" placeholder="Your Name" />
            <label for="name">Your Name</label>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-floating">
            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
            <label for="email">Your Email</label>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-floating date" id="date3" data-target-input="nearest">
            <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date &amp; Time" data-target="#date3" data-toggle="datetimepicker"/>
            <label for="datetime">Date &amp; Time</label>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-floating">
            <select class="form-select" id="select1">
                <option value="1">People 1</option>
                <option value="2">People 2</option>
                <option value="3">People 3</option>
            </select>
            <label for="select1">No Of People</label>
            </div>
    </div>
    <div class="col-12">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Special Request" id="message" style={{height: '100px'}}></textarea>
            <label for="message">Special Request</label>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
    </div>
</div>
</form>