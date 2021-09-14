import React from 'react';
import styled from 'styled-components';

import Layout from "./layouts";

const Parallax = styled.div`
    .wrapper {
      perspective: 1px;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #f6f6f6;
    }
    
    .box {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      
    }
    
    img {
      width: 100%;
    }
    
    h3 {
      font-size: 60px;
      color: white;
    }
    
    .box.box-back {
      transform: translateZ(0);
      z-index: 99;
      text-align: center;
    }
    .box.box-front {
      width: 1500px;
      transform: translateZ(-1px) scale(2);
    }
`

function IndexPage() {
    return <Layout>
        <h1>
            Check this shiz out!  I've got my own components installed and running.  We're using React and Styled Components.  We're also using graphql and apollo now.  Just today 16 May 21 we added routing via nextjs.  This has turned into a cool project!</h1>
        <Parallax>
            <div className="wrapper">
                <div className="box box-back">
                    <h3>MOUNTAINS</h3>
                </div>
                <div className="box box-front">
                    <img src="https://duomly.nyc3.digitaloceanspaces.com/articles/coding/alps-lake.jpg"/>
                </div>
            </div>
        </Parallax>
    </Layout>
}

export default IndexPage;