import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Left Column */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We provide tools to support your mental wellness through journaling,
              breathing exercises, and daily reflection.
            </p>
          </div>

          {/* Middle Column (Form) */}
          <div className="col-md-4 mb-3">
            <h5>Subscribe</h5>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column (Social Links) */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-light text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-light text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center pt-3 border-top">
          <small>© {new Date().getFullYear()} Mental Wellness Hub 🌿</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;