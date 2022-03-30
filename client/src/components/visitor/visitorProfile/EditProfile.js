import React, { useState } from "react";
import Footer from '../visitorFooter/Footer';
import Navigation from '../VisitorNavigation/Navigation';
import { Layout, Container, BoxUpload, ImagePreview } from "../../../style/visitorProfile/addphoto";
import FolderIcon from "../../../assets/t_icon.png";
import CloseIcon from "../../../assets/CloseIcon.svg";

export default function({ formData, setFormData }) {

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div>  
        <Navigation />
        <br/><br/>
        <div id='profile'>
            <div className='container'>
                <div className='row login-box'>

                    {/* base-login */}

                    <div className='col-sm-5 bg-img align-self-center'>
                        <div className='info'>
                        <Layout>
                            <BoxUpload>
                            <div className="image-upload" id="edit-profile">
                                {!isUploaded ? (
                                <>
                                    <label htmlFor="upload-input">
                                    <img
                                        src={FolderIcon}
                                        draggable={"false"}
                                        alt="placeholder"
                                        style={{ width: 100, height: 100 }}
                                    />
                                    <p style={{ color: "#444" }}>Upload Your Image</p>
                                    </label>

                                    <input
                                    id="upload-input"
                                    type="file"
                                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                    onChange={handleImageChange}
                                    />
                                </>
                                ) : (
                                <ImagePreview>
                                    <img
                                    className="close-icon"
                                    src={CloseIcon}
                                    alt="CloseIcon"
                                    onClick={() => {
                                        setIsUploaded(false);
                                        setImage(null);
                                    }}
                                    />
                                    {typeFile.includes("video") ? (
                                    <video
                                        id="uploaded-image"
                                        src={image}
                                        draggable={false}
                                        controls
                                        autoPlay
                                        alt="uploaded-img"
                                    />
                                    ) : (
                                    <img
                                        id="uploaded-image"
                                        src={image}
                                        draggable={false}
                                        alt="uploaded-img"
                                    />
                                    
                                    )}
                                </ImagePreview>
                                )}
                            </div>
                            </BoxUpload>

                            {/* {isUploaded ? <p>Type is {typeFile}</p> : null} */}
                        </Layout>
                            <div className='btn-section clearfix'>
                                <a href={'/visitor/profile'} className='nav-link link-btn btn-primary default-bg'><span>View</span></a>
                                <a href={'/visitor/editprofile'} className='nav-link link-btn btn-primary default-bg'><span>Edit</span></a>
                            </div>
                        </div>
                    </div>

                    {/* base-login */}

                    {/* login */}

                    <div className='col-sm-7 bg-color align-self-center'>
                        <div className='form-section'>
                            <div className='title'>
                                <h3>Edit your profile</h3>
                            </div>
                            <div className='login-inner-form'>
                                <form method='POST'>
                                    
                                    <div className='form-group form-box'>
                                        <input type="text" id="name" className='input-text' placeholder='Full Name'/>
                                        <i className='icon user'></i>
                                    </div>

                                    <div className='form-group form-box'>
                                        <input type="text" id="email" className='input-text email-text' placeholder='Email Address'/>
                                        <i className='icon email'></i>
                                    </div>

                                    <div className='form-group form-box'>
                                        <input type="text" id="contact" className='input-text' placeholder='Contact Number'/>
                                        <i className='icon contact'></i>
                                    </div>

                                    <div className='form-group form-box'>
                                        <input type="text" id="nic" className='input-text' placeholder='NIC Number'/>
                                        <i className='icon nic'></i>
                                    </div>

                                    <div className='form-group'>
                                        <button className='btn primary-btn'>Save</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* login */}


                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
