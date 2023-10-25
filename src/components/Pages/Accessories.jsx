import banner from '../../assets/images/banner.webp'
import accessories from '../../assets/images/accessories.webp'
import dualsense from '../../assets/images/dualsense.webp'
import dualsenseEdge from '../../assets/images/dualsense-Edge.webp'
import pulseHeadset from '../../assets/images/pulse-headset.webp'
import gamingsetup from '../../assets/images/gamingsetup.webp'
import setupbanner from '../../assets/images/setupbanner.webp'

function Accessories() {
  return (
    <>
      <main>
        {/* Header Section */}
        <section style={{ backgroundImage: `url(${banner})` }}>
          <div className="container p-5 pb-2 text-center">
            <p className="display-5">PlayStation® accessories</p>
            <p className="fs-4 fw-light">
              Build your perfect gaming setup with controllers, headsets and
              other accessories for your PS5™ or PS4™ console.
            </p>
          </div>
          <div className="container px-5 pb-5">
            <img className="img-fluid" src={accessories} alt="Accessories" />
          </div>
        </section>

        {/* Controllers */}
        <section>
          <div className="container p-5 pb-2 text-center">
            <p className="display-5">Wireless controllers</p>
            <p className="fs-4 fw-light">
              Add player two, three and four to your local multiplayer games
              with a vibrant range of PlayStation controllers.
            </p>
          </div>

          <div className="container p-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={dualsense} alt="Dualsense" className="img-fluid" />
                <p className="lead">DualSense™ wireless controller</p>
                <small>
                  Discover a deeper, highly immersive gaming experience1 with
                  the innovative PS5 controller, featuring haptic feedback2 and
                  dynamic trigger effects2, and a built-in microphone, all
                  integrated into a comfortable design.
                </small>
                <br />
                <button className="btn btn-primary rounded-pill my-5">
                  Discover Dualsense
                </button>
              </div>

              <div className="col-12 col-md-6">
                <img
                  src={dualsenseEdge}
                  alt="Dualsense"
                  className="img-fluid"
                />
                <p className="lead">DualSense Edge™ Wireless Controller</p>
                <small>
                  Get an edge in gameplay with remappable buttons, tunable
                  triggers and sticks, changeable stick caps, back buttons, and
                  more. Built with high performance and personalization in mind,
                  the controller also retains all the immersive features of the
                  DualSense™ wireless controller.
                </small>
                <br />
                <button className="btn btn-primary rounded-pill mt-5">
                  Discover Dualsense Edge
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Headset */}
        <section>
          <div className="container p-5 pb-2 text-center">
            <p className="display-5">PULSE 3D™ wireless headset</p>
            <p className="fs-4 fw-light">
              Elevate your in-game audio experience with a headset built for PS5
              and PS4 consoles.
            </p>
            <div className="col-12 col-lg-8 p-5 d-block mx-auto">
              <img className="img-fluid" src={pulseHeadset} alt="Headset" />
            </div>
            <small>
              Discover a headset fine-tuned for 3D Audio on PS5 consoles2 and
              with 7.1 virtual surround sound support on PS4. Offering up to 12
              hours of wireless play and dual noise-cancelling microphones, you
              can keep the party chat flowing with crystal-clear voice capture4.
            </small>
            <br />
            <button className="btn btn-primary rounded-pill my-5">
              Enhance your audio
            </button>
          </div>
        </section>

        {/* Gaming Setup */}
        <section
          style={{
            backgroundImage: `url(${setupbanner})`,
            backgroundRepeat: 'round',
          }}
        >
          <div className="container p-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={gamingsetup} alt="Dualsense" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 pt-5 px-5 text-white">
                <p className="fs-2">
                  How to build the ultimate PS5 gaming set up
                </p>
                <small>
                  From the best TVs and sound systems for gaming to handy
                  additional extras, create a home gaming setup to leave the
                  competition in the dust.
                </small>
                <br />
                <button className="btn btn-light rounded-pill my-5">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Accessories
