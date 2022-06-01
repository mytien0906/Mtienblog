/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import DefaultHead from 'next/head';
import React from 'react';

export default function Head() {
  return (
    <DefaultHead>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Unna:400,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="css/A.bootstrap.min.css+font-awesome.min.css+elegant-icons.css+owl.carousel.min.css+slicknav.min.css+style.css,Mcc.r8rFWZw6w3.css.pagespeed.cf.jChxJqCVnk.css"
        type="text/css"
      />
      <script src="js/jquery-3.3.1.min.js"/>
      <script src="js/bootstrap.min.js+jquery.slicknav.js.pagespeed.jc.JQZ3hdz720.js" />
    </DefaultHead>
  );
}
