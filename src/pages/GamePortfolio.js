import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Portfolio from '../components/Portfolio';
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Portfolios() {
  const [gamePortfolios, setPortfoios] = useState([]);

  useEffect(() => {
    axios.get('/api/gamePortfolios')
      .then( response => {
        setPortfoios(response.data);
      })
  })

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Game Portfolio" />
          <div className="row mt-30-reverse">
            {gamePortfolios.map(portfolio => (
              <TrackVisibility once offset={200} className="col-lg-4 col-md-6 col-12 mt-30" key={portfolio.id}>
                <Portfolio content={portfolio}/>
              </TrackVisibility>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
