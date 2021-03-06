import React from 'react'

export default function ContactUs() {
    return (
        <div>
            {/* <p>hello world</p> */}
            
<body class="entire">
<section class="ftco-section">
  <div class="container">
    
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-12">
        <div class="wrapper">
          <div class="row justify-content-center">
            <div class="col-lg-8 mb-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker"></span>
                    </div>
                    <div class="text-try address">
                      <p>Address:</p> <a>Oberoi palm springs</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text-try">
                      <p>Phone: </p> <p><a href="tel://9167954709">9167954709</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane"></span>
                    </div>
                    <div class="text-try">
                      <p>Email:</p> <p> <a href="mailto:jainpratyaksh5@gmail.com">jainpratyaksh5@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="contact-wrap">
                <h3 class="mb-4 text-center">Get in touch with us</h3>
                <div id="form-message-warning" class="mb-4 w-100 text-center"></div>
                
                <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <input type="text" class="form-control" name="name" id="name" placeholder="Name"> */}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <input type="email" class="form-control" name="email" id="email" placeholder="Email"> */}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"> */}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea name="message" class="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <input type="submit" value="Send Message" class="btn-contact btn-submit btn-lg btn-block"> */}
                        <div class="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</div>
    )
}


