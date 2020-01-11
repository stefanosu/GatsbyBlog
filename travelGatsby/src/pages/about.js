import React from 'react';

import Layout from "../components/layout"


const About = ({location}) => (
  
      <Layout location={location}> 
        <div>
          <h2> About Us</h2> 
            <p>
              This is the about us page:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ipsum arcu, ut ultrices enim lobortis in. 
              Nullam ante nibh, fringilla congue urna ut, pulvinar aliquam dolor. Nam volutpat efficitur venenatis. 
              In tincidunt volutpat nibh sed porttitor. Aenean venenatis porta sapien id rhoncus.
              Fusce non ipsum id eros porttitor fringilla. Maecenas ut sapien commodo, lobortis ipsum a, venenatis lorem. 
              Phasellus quis iaculis dui. Phasellus auctor eros justo, a congue urna rhoncus feugiat.
            </p>
        </div>
      </Layout>
    )


export default About