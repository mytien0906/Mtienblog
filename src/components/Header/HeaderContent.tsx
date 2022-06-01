/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function HeaderContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__btn">
            <a href="./signin.html" className="primary-btn">
              Subscribe
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="header__logo">
            <a href="./index.html">
              <img
                src="data:image/webp;base64,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"
                alt=""
                data-pagespeed-url-hash={294600774}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="header__social">
            <a href="##">
              <i className="fa fa-facebook" />
            </a>
            <a href="##">
              <i className="fa fa-twitter" />
            </a>
            <a href="##">
              <i className="fa fa-youtube-play" />
            </a>
            <a href="##">
              <i className="fa fa-instagram" />
            </a>
            <a href="##">
              <i className="fa fa-envelope-o" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
