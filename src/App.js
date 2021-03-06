import React, { Component } from 'react';
import Rellax from 'react-rellax';
import ReactPixel from 'react-facebook-pixel';
import './assets/sass/style.css';

import Footer from './footer';

import heard from './assets/img/heard_bg.jpg';
import ap from './assets/img/ap_bg.jpg';
import smokeBreak from './assets/img/smokebreak_bg.jpg';
import trackArtwork from './assets/img/track_bg.jpg';
import logos from './assets/img/logos_bg.jpg';
import paakhouse from './assets/img/paakhouse_bg.jpg';
import coonguard from './assets/img/coonguard_bg.jpg';

// import realeyez from './assets/img/realeyez_bg.jpg';
// import fiveStar from './assets/img/5star_bg.jpg';
import thetoastedpost from './assets/img/ttp_bg.jpg';

import resume from './assets/docs/kylebebeau_resume.pdf';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('2055850057979112', advancedMatching, options);
ReactPixel.pageView();

class IndexPage extends Component {
  render(){
    return (
      <div id="home">
        <Rellax as="section" id="banner" data-rellax-speed="-2"></Rellax>
        <section id="projects">
          <article>
            <span id="Logo"></span>
            <blockquote>
              <p>
                Imagination is the only weapon in the war against reality.
                I'm an artist, a creative problem solver, a software engineer. My name is <a target="_BLANK" href={resume} rel="noopener noreferrer">Kyle Bebeau</a>.
                At times it seems so very unrealistic. Therefore, I dream.
              </p>
              <p>
                Below are live projects I've designed and/or have engineered.
              </p>
              <p>
                If you're a creative, know your worth. <a target="_BLANK" href="https://twitter.com/intent/tweet?text=Don't let clients name their price. Know your worth.&amp;hashtags=noworkweak" rel="noopener noreferrer">#noworkweak</a>
              </p>
              <cite />
            </blockquote>
          </article>
          <article>
            <a href="http://andersonpaak.com" target="_BLANK" rel="noopener noreferrer">
              <img src={ap} alt="Anderson .Paak" />
            </a>
            <a href="http://paakhouse.org" target="_BLANK" rel="noopener noreferrer">
              <img src={paakhouse} alt=".Paak House" />
            </a>
            <a href="https://smokebreak.live" target="_BLANK" rel="noopener noreferrer">
              <img src={smokeBreak} alt="Smoke Break" />
            </a>
            <a href="https://kylebebeau.com/track-artwork" target="_BLANK" rel="noopener noreferrer">
              <img src={trackArtwork} alt="Track Artwork" />
            </a>
            <a href="https://heardmusic.app" className="hideMobile" target="_BLANK" alt="Heard" rel="noopener noreferrer">
              <img src={heard} alt="Heard" />
            </a>
            <a href="instagram://user?username=heardmusicapp" className="showMobile" target="_BLANK" alt="Heard" rel="noopener noreferrer">
              <img src={heard} alt="Heard" />
            </a>
            <a href="https://kylebebeau.com/logos" target="_BLANK" rel="noopener noreferrer">
              <img src={logos} alt="Logos" />
            </a>
            <a href="https://coonguard.com" target="_BLANK" rel="noopener noreferrer">
              <img src={coonguard} alt="Texas Bandit Coon Guard" />
            </a>
            <a href="https://thetoastedpost.com" target="_BLANK" rel="noopener noreferrer">
              <img src={thetoastedpost} alt="The Toasted Post" />
            </a>
          </article>
        </section>
        <Footer />
      </div>
    )
  }
}

export default IndexPage;
