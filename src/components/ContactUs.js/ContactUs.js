import React from 'react'

const ContactUs = () => {
  return (
    <>
         <div className="content-section">
            
            <section className="theme-bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mb-4 mb-md-0">
                            <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow">
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5404266061414!2d-0.12403836556756871!3d51.50330055369121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1662441698175!5m2!1sen!2sin"
                                    width="1000" height="800" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 offset-lg-1 align-self-center">
                            <h2 className="display-4 mb-3 fw-bold text-color">Feel Free Contact
                                Us Now
                            </h2>
                            <p className="font-medium theme-text-accent-two mb-0"> Submit your queries here and we will get
                                back to you as soon as possible.</p>
                            <div className="mt-5">
                                <form id="contact-form" method="post" action="https://designmilitary.com/preview/html-websites/flight-world/contact.php" className="send">
                                    <div className="messages"></div>
                                    <div className="controls">
                                        <div className="form-floating mb-4">
                                            <input id="form_name" type="text" name="name"
                                                className="form-control custum-input" placeholder="Your Name"
                                                 data-error="Name is required." />
                                            <label>Your Name</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input id="form_email" type="email" name="email"
                                                className="form-control custum-input " placeholder="Your Email"
                                                 data-error="Valid Email is required." />
                                            <label>Your Email</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input id="form_phone" type="Number" name="phone"
                                                className="form-control custum-input" placeholder="Your Phone"
                                                 data-error="Please specify your Phone." />
                                            <label>Your Phone Number</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <textarea id="form_message" name="message" className="form-control custum-input"
                                                placeholder="Message"  
                                                data-error="Please, leave us a message."></textarea>
                                            <label>Comments</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="mb-4 text-center">
                                            <button type="Submit" value="Send message"
                                                className="btn btn-effect btn-book px-5 min-h58">Send
                                                Request</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </section>


        </div>
    </>
  )
}

export default ContactUs