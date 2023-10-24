import games from '../../assets/images/games.svg'
import speed from '../../assets/images/speed.svg'
import marvel from '../../assets/images/marvel.svg'
import immersion from '../../assets/images/immersion.svg'
import ps5lg from '../../assets/images/hardware-lg.png'
import ps5sm from '../../assets/images/hardware-sm.jpeg'

/* Videos */
import triggers from '../../assets/videos/triggers.mp4'
import triggersPoster from '../../assets/images/trigger-poster.jpeg'

import rayTracing from '../../assets/videos/rayTracing.mp4'
import rayTracingPoster from '../../assets/images/rayTracing-poster.jpeg'

import colours from '../../assets/videos/colours.mp4'
import coloursPoster from '../../assets/images/colours-poster.jpeg'

import fourK from '../../assets/videos/4k.mp4'
import fourkPoster from '../../assets/images/4k-poster.jpeg'

function Playstation() {
  const COLOR_BLUE = '#002FC3'
  const COLOR_GRAY = '#D8DCE8'

  return (
    <>
      <main className="bg-light">
        {/* Ps5 Hardware Pics*/}
        <section className="w-100" id="Hardware-pics">
          <picture>
            <source media="(max-width: 600px)" srcSet={`${ps5sm}`} />
            <source media="(min-width: 750px)" srcSet={`${ps5lg}`} />
            <img
              src={ps5lg}
              className="img-fluid"
              alt="Playstation Hardware Image"
            />
          </picture>
        </section>

        {/* Ps5 Specs*/}
        <section
          id="Hardware-info"
          className="w-100 text-white"
          style={{ backgroundColor: COLOR_BLUE }}
        >
          <div className="container p-5 text-center">
            <h2>Your journey begins here.</h2>

            <section className="container my-5">
              <div className="row">
                {/* Games */}
                <div className="col-12 col-md-4 mt-5">
                  <img className="img-fluid" src={games} alt="Games" />
                  <p className="mt-4 fw-bold">
                    LIGHTNING
                    <br />
                    SPEED
                  </p>
                </div>

                {/* Immersion */}
                <div className="col-12 col-md-4 mt-5">
                  <img className="img-fluid" src={immersion} alt="Immersion" />
                  <p className="mt-4 fw-bold">
                    BREATH-TAKING
                    <br />
                    IMMERSION
                  </p>
                </div>

                {/* Speed */}
                <div className="col-12 col-md-4 mt-5">
                  <img className="img-fluid" src={speed} alt="Speed" />
                  <p className="mt-4 fw-bold">
                    STUNNING
                    <br />
                    GAMES
                  </p>
                </div>
              </div>
            </section>
            <p className="border border-bottom-0 border-light border-opacity-50"></p>

            <section className="container mt-5">
              <p className="lead fs-5">
                Experience lightning-fast loading with an ultra-high speed SSD,
                deeper immersion with support for haptic feedback1, adaptive
                triggers1 and 3D Audio*, and an all-new generation of incredible
                PlayStation games.
              </p>
            </section>

            <section className="container mt-5">
              <p className="lead fs-5">
                *3D audio via built-in TV speakers or analogue/USB stereo
                headphones. Setup required.
              </p>
            </section>
          </div>
        </section>

        {/* DualSense Controller */}
        <section id="Controller" style={{ backgroundColor: COLOR_GRAY }}>
          <div className="container p-5 text-center">
            <h2>
              The DualSense™
              <br />
              wireless controller
            </h2>
          </div>

          <section>
            <div className="row m-0">
              {/* Video */}
              <div className="p-0 col-12 col-lg-8">
                <div className="ratio ratio-1x1">
                  <video
                    loop
                    muted
                    autoPlay
                    preload="auto"
                    poster={triggersPoster}
                  >
                    <source src={triggers} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description */}
              <div className="col-12 col-lg-4 px-5 d-flex align-items-center">
                <div className="container">
                  <p className="display-4">Adaptive Triggers</p>
                  <div>
                    <small>
                      Dynamic resistance mimics the tension of interactions with
                      in game gear and objects in select PS5™ games.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Visuals */}
        <section id="Visuals" style={{ backgroundColor: COLOR_GRAY }}>
          <div className="container p-5 text-center">
            <h2>
              Engineered for
              <br />
              stunning visuals
            </h2>
          </div>

          {/* Ray Tracing */}
          <section className="container">
            <div className="row m-0">
              {/* Video */}
              <div className="col-12 col-lg-6 pb-5">
                <div className="ratio ratio-4x3">
                  <video
                    loop
                    muted
                    autoPlay
                    preload="auto"
                    poster={rayTracingPoster}
                  >
                    <source src={rayTracing} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description */}
              <div className="col-12 col-lg-6 pb-5 px-5 d-flex align-items-center">
                <div className="container ">
                  <p className="display-5">
                    Explore lifelike environments with Ray Tracing.
                  </p>
                  <div>
                    <small>
                      Ray Tracing brings new levels of realism with natural
                      shadows and reflections in supported PS5 games.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colours */}
          <section className="container">
            <div className="row m-0">
              {/* Video */}
              <div className="col-12 col-lg-6 order-lg-2 pb-5">
                <div className="ratio ratio-4x3">
                  <video
                    loop
                    muted
                    autoPlay
                    preload="auto"
                    poster={coloursPoster}
                  >
                    <source src={colours} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description */}
              <div className="col-12 col-lg-6  pb-5 px-5 d-flex align-items-center">
                <div className="container ">
                  <p className="display-5">See vibrant colours.</p>
                  <div>
                    <small>
                      With an HDR TV, supported PS5 games pop with an
                      unbelievable range of colours.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4K */}
          <section className="container">
            <div className="row m-0">
              {/* Video */}
              <div className="col-12 col-lg-6 pb-5">
                <div className="ratio ratio-4x3">
                  <video
                    loop
                    muted
                    autoPlay
                    preload="auto"
                    poster={fourkPoster}
                  >
                    <source src={fourK} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description */}
              <div className="col-12 col-lg-6 pb-5 px-5 d-flex align-items-center">
                <div className="container ">
                  <p className="display-5">Experience crisp 4K graphics.</p>
                  <div>
                    <small>
                      Intricate details come to life with your 4K TV and
                      compatible PS5 games.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Copyright */}
        <section className="px-4">
          <img
            src={marvel}
            className="py-4"
            alt="Marvel Logo"
            style={{ width: '150px' }}
          />
          <div className="pb-4">
            <small>© 2021 MARVEL</small> <br />
            <small>© 2021 Sony Interactive Entertainment LLC</small> <br />
            <small>Developed by Insomniac Games, Inc</small>
          </div>
        </section>
      </main>
    </>
  )
}

export default Playstation
