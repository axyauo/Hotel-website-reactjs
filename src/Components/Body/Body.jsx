import React, { useState, useEffect } from "react";
import "./Body.css";
import about_img from "./Images/reception.png";
import resion_img from "./Images/resions_img.jpg";
import resion_img_2 from "./Images/resions_img_2.jpg";
import Button from "./Button/Button.jsx";
import Heading from "./Heading/Heading.jsx";
import Paragraph from "./Paragraph/Paragraph.jsx";
import Services from "./Servicess/Services.jsx";
import logo from "./Images/logo.png";
import RoomsAvail from "./RoomAvailable/RoomsAvail";
import SearchHotel from "./SearchHotel/SearchHotel.jsx";
import TopHotels from "./TopHotels/TopHotels.jsx";
import AreawiseHotel from "./AreawiseHotel/AreawiseHotel.jsx";
import Footer from "../Footer/Footer.jsx";
import BannerSlider from "./BannerSlider/BannerSlider.jsx";

let Body = () => {
  const [counts, setCounts] = useState({
    hotelRooms: 0,
    activities: 0,
    restaurants: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setCounts({
        hotelRooms: 50,
        activities: 15,
        restaurants: 6,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCounts((prevCounts) => ({
        hotelRooms: prevCounts.hotelRooms < 50 ? prevCounts.hotelRooms + 1 : 50,
        activities: prevCounts.activities < 15 ? prevCounts.activities + 1 : 15,
        restaurants:
          prevCounts.restaurants < 6 ? prevCounts.restaurants + 1 : 6,
      }));
    }, 100); // Adjust the interval as needed

    return () => clearInterval(incrementInterval);
  }, []);

  // Render the count items dynamically
  const countItems = Object.entries(counts).map(([key, value]) => (
    <div className="col-4" key={key}>
      <p>
        <span className="number">{value}</span>
        <br />
        {key}
      </p>
    </div>
  ));

  return (
    <section className="banner_section">
      <div className="Banner_Slider">
        <BannerSlider />
      </div>
      <div className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="about_content">
                <Heading HeadingAfter="Our" HeadingBefore="History" />
                <Paragraph
                  paraFirstContent="Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."
                  paraSecondContent="Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"
                />
              </div>
            </div>
            <div className="col-lg-7 col-12 bg-whitesmoke">
              <div className="about_image">
                <div className="about_img">
                  <img src={about_img} alt="" />
                </div>
                <div className="count_icons">
                  <div className="row">{countItems}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchHotel">
        <div className="container">
          <SearchHotel />
        </div>
      </div>
      <div className="areawiseHotel pt-5 pb-5">{/* <AreawiseHotel /> */}</div>
      <div className="top-rated-hotels">
        <div className="container">
          <Heading HeadingAfter="Our Top" HeadingBefore="Rated Hotels" />
          <div className="row">
            <TopHotels />
          </div>
        </div>
      </div>
      <div className="grand_regions">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <Heading HeadingAfter="The Grand" HeadingBefore="Resions" />
              <div className="imgDiv">
                <img src={resion_img} alt="" />
                <div className="imgSmallDiv">
                  <img src={resion_img_2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="resions_content">
                <Paragraph
                  paraFirstContent="Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."
                  paraSecondContent="Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"
                />
                <p className="contactNumber mt-5 mb-4">Call 41 (0)54 2344 00</p>
                <Button ButtonName="Book Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grand_amenities pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12">
              <Heading HeadingAfter="The Grand" HeadingBefore="Amenities" />
              <div className="imgDiv">
                <img src={resion_img} alt="" />
                <div className="imgSmallDiv">
                  <img src={resion_img_2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 bg-white">
              <div className="resions_content">
                <Paragraph
                  paraFirstContent="Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."
                  paraSecondContent="Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"
                />
                <div className="row">
                  <Services />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_rooms mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="roomsHeading">
                <Heading HeadingAfter="Our Rooms" HeadingBefore="And Suits" />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="roomsBotton">
                <Button ButtonName="View Our Rooms" />
              </div>
            </div>
          </div>
          <RoomsAvail />
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </section>
  );
};

export default Body;
