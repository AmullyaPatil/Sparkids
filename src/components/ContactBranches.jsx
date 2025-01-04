import React from "react";
import "../styles/ContactBranches.css";
import media1 from "../Assets/contact-img/media1.png";
import media2 from "../Assets/contact-img/media2.png";
import media3 from "../Assets/contact-img/media3.png";

const Branches = () => {
  return (
    <div className="branches-container">
      <h2 className="branches-heading">All available branches</h2>
      <div className="branches-row">
        <div className="branch-card">
          <h3>Hubli, Vidya Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.6993605443784!2d75.12348951482384!3d15.36470769025998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb849ad59d71c0f%3A0x4d9e57aab63e4d7d!2sVidya%20Nagar%2C%20Hubli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680700000000!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Hubli Map"
          ></iframe>
          <p>Description</p>
        </div>
        <div className="branch-card">
          <h3>Bangalore, Majestic Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.891508198019!2d77.57266161482688!3d12.976140090854075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a4abfd3d%3A0xe3fdfed1d11d82b9!2sMajestic%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680700000000!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Bangalore Map"
          ></iframe>
          <p>Description</p>
        </div>
        <div className="branch-card">
          <h3>Gulbarga, RT Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.917053354521!2d76.82141341481348!3d17.333924388088875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8d3e39e55d69f%3A0x4446788cd5a267a1!2sRT%20Nagar%2C%20Gulbarga%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680700000000!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Gulbarga Map"
          ></iframe>
          <p>Description</p>
        </div>
      </div>

      <div className="contact-social-section">
  <h2 className="contact-social-section-heading">Follow Us for Updates and Inspiring Stories!</h2>
  <div className="contact-social-icons">
    <a href="#facebook" className="social-link">
      <div className="icon-container">
        <i className="fab fa-facebook-f"></i>
      </div>
      <span>Facebook</span>
    </a>
    <a href="#linkedin" className="social-link">
      <div className="icon-container">
        <i className="fab fa-linkedin-in"></i>
      </div>
      <span>LinkedIn</span>
    </a>
    <a href="#instagram" className="social-link">
      <div className="icon-container">
        <i className="fab fa-instagram"></i>
      </div>
      <span>Instagram</span>
    </a>
  </div>
</div>


      <div className="media-section">
        <h2 className="media-section-heading ">Watch our social media posts</h2>
        <p className="media-section-redirect">
          <a href="#instagram">redirect Instagram &gt;</a>
        </p>
        <div className="media-gallery">
        <img src={media1} alt="post1" />
        <img src={media2} alt="post2" />
        <img src={media3} alt="post3" />
        <img src={media2} alt="post4" />
                 </div>
        <p className="contact-footer-text">
          Every great mind was once a curious child. Let’s spark that curiosity together!
        </p>
      </div>
    </div> 
  );
};

export default Branches;
