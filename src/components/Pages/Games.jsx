import styled from 'styled-components'
import spiderman from '../../assets/images/spiderman.webp'
import spidermanSM from '../../assets/images/spiderman-sm.webp'
import callofduty from '../../assets/images/callofduty.webp'
import callofdutySM from '../../assets/images/callofduty-sm.webp'
import finalfantasy from '../../assets/images/finalfantasy.webp'
import finalfantasySM from '../../assets/images/finalfantasy-sm.webp'
import godofwar from '../../assets/images/godofwar.webp'
import godofwarSM from '../../assets/images/godofwar-sm.webp'
import helldivers from '../../assets/images/helldivers.webp'
import helldiversSM from '../../assets/images/helldivers-sm.webp'
import witcher from '../../assets/images/witcher.jpg'
import starfield from '../../assets/images/starfield.jpeg'
import cyberpunk from '../../assets/images/cyberpunk.jpg'

function Games() {
  return (
    <>
      <main>
        {/* Popular Games */}
        <section>
          <p className="px-3 py-5 display-6 text-center">
            Console-exclusive PS5 games
            <br />
            from PlayStation Studios
          </p>

          {/* Spiderman */}
          <div className="container">
            <img className="img-fluid" src={spiderman} alt="spiderman" />
            <Img
              className="img-fluid rounded"
              src={spidermanSM}
              alt="spiderman"
            />
            <div className="container pb-5 px-5">
              <p className="fs-3">Marvel Spider-Man 2</p>
              <small>
                Spider-Men, Peter Parker and Miles Morales, return for an
                exciting new adventure in the critically acclaimed Marvel
                Spider-Man franchise for PS5.
              </small>
              <br />
              <button className="btn btn-primary shadow mt-4">
                Find out more
              </button>
            </div>
          </div>

          {/* God of war */}
          <div className="container">
            <img className="img-fluid" src={godofwar} alt="spiderman" />
            <Img
              className="img-fluid rounded"
              src={godofwarSM}
              alt="spiderman"
            />
            <div className="container pb-5 px-5">
              <p className="fs-3">God of War™ Ragnarök</p>
              <small>
                From Santa Monica Studio comes the sequel to the critically
                acclaimed God of War (2018). Fimbulwinter is well underway.
                Kratos and Atreus must journey to each of the Nine Realms in
                search of answers as Asgardian forces prepare for a prophesied
                battle that will end the world.
              </small>
              <br />
              <button className="btn btn-primary shadow mt-4">
                Find out more
              </button>
            </div>
          </div>

          {/* Call of duty */}
          <div className="container">
            <img className="img-fluid" src={callofduty} alt="spiderman" />
            <Img
              className="img-fluid rounded"
              src={callofdutySM}
              alt="spiderman"
            />
            <div className="container pb-5 px-5">
              <p className="fs-3">Call of Duty: Modern Warfare III</p>
              <small>
                Call of Duty returns with an all-new campaign, modernised
                versions of classic Multiplayer maps and an open-world PvE
                Zombies experience.
              </small>
              <br />
              <button className="btn btn-primary shadow mt-4">
                Find out more
              </button>
            </div>
          </div>

          {/* Final fantasy */}
          <div className="container">
            <img className="img-fluid" src={finalfantasy} alt="spiderman" />
            <Img
              className="img-fluid rounded"
              src={finalfantasySM}
              alt="spiderman"
            />
            <div className="container pb-5 px-5">
              <p className="fs-3">Final Fantasy XVI</p>
              <small>
                The 16th standalone entry in the legendary Final Fantasy series
                marks a darker turn for the RPG franchise, with a complex tale
                of revenge, power struggles and unavoidable tragedy.
              </small>
              <br />
              <button className="btn btn-primary shadow mt-4">
                Find out more
              </button>
            </div>
          </div>

          {/* Helldivers */}
          <div className="container">
            <img className="img-fluid" src={helldivers} alt="spiderman" />
            <Img
              className="img-fluid rounded"
              src={helldiversSM}
              alt="spiderman"
            />
            <div className="container pb-5 px-5">
              <p className="fs-3">Helldivers™ 2</p>
              <small>
                Join forces with up to three friends and wreak havoc on an alien
                scourge threatening the safety of your home planet, Super Earth,
                in this multiplayer co-op shooter for PS5 and PC from Arrowhead
                Game Studios.
              </small>
              <br />
              <button className="btn btn-primary shadow mt-4">
                Find out more
              </button>
            </div>
          </div>
        </section>

        {/* Discover Carousel */}
        <section className="container py-5">
          <p className="h2 pb-4 text-center">Discover more great games</p>
          <div id="discover" className="carousel slide">
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-slide-to="0"
                data-bs-target="#discover"
              ></button>
              <button
                type="button"
                className="active"
                data-bs-slide-to="1"
                data-bs-target="#discover"
              ></button>
              <button
                type="button"
                data-bs-slide-to="2"
                data-bs-target="#discover"
              ></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  src={witcher}
                  className="d-block w-100"
                  alt="The Witcher"
                />
              </div>
              <div className="carousel-item active">
                <img
                  src={starfield}
                  className="d-block w-100"
                  alt="Starfield"
                />
                <div className="carousel-caption">
                  <h5>Starfield</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={cyberpunk}
                  className="d-block w-100"
                  alt="Cyberpunk"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-slide="prev"
              data-bs-target="#discover"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-slide="next"
              data-bs-target="#discover"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="bg-dark text-white">
          <div className="container py-5">
            <p className="fs-3 pb-2">Frequently asked questions</p>
            <div id="faq" data-bs-theme="dark" className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    className="accordion-button collapsed"
                  >
                    Can i play my PS4 games on PS5?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  data-bs-parent="#faq"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Yes, PS5 is backwards compatible with the overwhelming
                    majority of PS4 games. This means that most - if not all -
                    of your existing PS4 games collection will play just as well
                    - or better - on PS5 as they do on PS4.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    className="accordion-button collapsed"
                  >
                    How much do PS5 games cost?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  data-bs-parent="#faq"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Prices for PS5 games vary depending on the retailer and
                    title. Check with your preferred retailer for more pricing
                    information and visit PlayStation Store for the latest
                    discounts.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    className="accordion-button collapsed"
                  >
                    Are PS5 games digital only?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  data-bs-parent="#faq"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    No, many PlayStation 5 games have physical Blu-ray release
                    as well as digital editions. Not all games, however, will
                    have a physical release and some may include different
                    content depending on which edition you buy.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    className="accordion-button collapsed"
                  >
                    How can i game share on PS5?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  data-bs-parent="#faq"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    PlayStation 5 has dedicated Share Play features that allow
                    you to share whats happening on your screen with other PS4
                    and PS5 players via PlayStation Network.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    className="accordion-button collapsed"
                  >
                    Do i need Playstation Plus to play online?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  data-bs-parent="#faq"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Yes, in most cases, you will need an active PlayStation Plus
                    subscription to access online multiplayer modes on PS4 and
                    PS5.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const Img = styled.img`
  position: relative;
  width: 250px;
  top: -70px;
  left: 50px;
`

export default Games
