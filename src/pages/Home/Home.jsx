// Libararies
import {
  Article,
  CaretDown,
  Envelope,
  Gavel,
  IconContext,
  InstagramLogo,
  MaskHappy,
  Palette,
  Pencil,
  Presentation,
  VinylRecord,
} from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";
import axios from "axios";

// Components
import NavBar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer.jsx";
import ClubActivities from "./components/ClubActivities.jsx";
import ExecMember from "./components/ExecMember.jsx";
import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";
// import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";

// Assets
import HeroImage from "../../assets/images/pexels-anete-lusina-6331086.webp";
import UnionDispatchImage from "../../assets/images/single-earth-ApivzPERunU-unsplash.webp";

import { apiBaseUrl } from "../../veryglobalvars.js";
import { quotes as quotesFromFile } from "./quotes.js";

import "./Home.css";

function Home() {
  const { darkMode, _ } = useContext(DarkModeContext);
  const [quote, setQuote] = useState("");
  const [quoteCaption, setQuoteCaption] = useState("");

  const [frontpageFeature, setFrontPageFeature] = useState(
    "Loading Today's Message of the Day"
  );
  const [quotes, setQuotes] = useState([]);
  const [quoteLoaded, setQuoteLoaded] = useState(false);

  // const [loadingDone, setLoadingDone] = useState(false);

  // Get Front Page Feature

  function getFrontPageFeaturedText() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/frontpage_feature")
      .then(function (response) {
        setFrontPageFeature(response.data[0].content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchQuotes() {
    axios
      .get(apiBaseUrl + "/dynamiccontent/quotes")
      .then(function (response) {
        let quotes_json = JSON.parse(response.data[0].content);
        console.log(quotes_json);
        setQuotes(quotes_json);
        setQuoteLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
        setQuotes(quotesFromFile);
        setQuoteLoaded(true);
      });
  }

  // useEffect(() => {
  //   if (
  //     (frontpageFeature != "Loading Today's Message of the Day") &
  //     (quote != "")
  //   ) {
  //     setTimeout(() => {
  //       setLoadingDone(true);
  //     }, 1000);
  //   }
  // }, [frontpageFeature, quote]);

  function getRandomInteger() {
    return Math.floor(Math.random() * (quotes.length - 0));
  }

  function chooseQuote() {
    let quoteChosen = getRandomInteger();
    console.log(quoteChosen);

    let quoteObject = quotes[quoteChosen];
    console.log(quoteChosen);

    setQuote(quoteObject.quote);
    setQuoteCaption(quoteObject.caption);
  }

  useEffect(() => {
    document.title = "The Expressive Arts Union";

    getFrontPageFeaturedText();
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quoteLoaded == true) {
      chooseQuote();
    }
  }, [quoteLoaded]);

  return (
    <>
      <NavBar />
      <Heading
        headerText="Expressive Arts Union"
        inFeaturedArticles={true}
      ></Heading>
      <IconContext.Provider
        value={{
          color: darkMode ? "white" : "black",
          size: 32,
          weight: "regular",
          mirrored: false,
        }}
      >
        <div
          style={{ backgroundImage: `url(${HeroImage})` }}
          className="homepage-hero"
        >
          <div className="homepage-hero-content">
            <div className="homepage-hero-bar">
              <h1>Expressive Arts Union</h1>
              <div className="homepage-hero-bar-socials">
                <a
                  href="https://www.instagram.com/expressiveartsunion/"
                  target="_blank"
                >
                  <InstagramLogo
                    alt="Visit the EAU on Instagram"
                    className="homepage-hero-bar-socials-icons"
                  />
                </a>
                <a href="mailto:expressiveartsunion@gmail.com">
                  <Envelope
                    alt="Send us an email"
                    className="homepage-hero-bar-socials-icons"
                  />
                </a>
              </div>
            </div>
            <div onClick={chooseQuote} className="homepage-hero-title">
              <h2>{quote}</h2>
              <p>
                <i>{quoteCaption}</i>
              </p>
            </div>
            <div className="homepage-hero-club-about">
              {/* id: frontpage-feature */}
              <MarkdownRenderer
                markdownContent={frontpageFeature}
              ></MarkdownRenderer>
            </div>

            <div className="homepage-hero-scroll-notifier">
              <CaretDown />
            </div>
          </div>
        </div>
      </IconContext.Provider>

      <section className="homepage-main">
        <section className="homepage-club-aim-vision">
          <div className="club-aim">
            <h2>Aim of the Club</h2>
            <p>
              Our aim with this club is to get people out of their comfort zone,
              speaking about various topics through lively debates, spark
              creativity through written literature, bring forth the ability to
              express through presentations and finally, create new friendships,
              partners and teammates along the way
            </p>
          </div>
          <div className="club-vision">
            <h2>Vision of the Club</h2>
            <p>
              To inspire and connect people by expressing the beauty,
              complexity, and diversity of the human experience through every
              form of art. Whether through words, visuals, or sound, our voice
              transcends boundaries, sparking imagination, igniting emotion, and
              shaping perspectives. We strive to create art that speaks
              authentically, resonates deeply, and fosters a world where
              creativity empowers us all to see, feel, and transform
            </p>
          </div>
        </section>
        <div className="club-activities-header">
          <h1>Club Activities</h1>
        </div>
        <section className="activities-grid">
          <IconContext.Provider
            value={{
              color: darkMode ? "white" : "black",
              size: 64,
              weight: "fill",
              mirrored: false,
            }}
          >
            <ClubActivities
              title="Music"
              description="The beat of your heart, the snap of your thumb, the sound of the wind, the hollow in your speech—listen and relate as rhythm meets lyric. From rap to pop, this category invites you to compose, analyze, and explore the messages in music from the 19th to the 21st century."
              iconComponent={<VinylRecord className="activities-icon" />}
            />
            <ClubActivities
              title="Film and Theatrical"
              description="Films & Theatricals. As stories unfold and life rolls through scenes, this category lets you dive into favorite films, explore new recommendations, and craft your own scripts and plays. The possibilities for creativity and collaboration are endless."
              iconComponent={<MaskHappy className="activities-icon" />}
            />

            <ClubActivities
              title="Art"
              description="Paint the emotions I can’t voice, sketch hidden pain, mold my true character on a clear canvas, and draw a sea of words I dare not speak. With mediums like painting, photography, and sculpture, this category expands your creative reach, inviting both creation and deeper understanding of the messages within art."
              iconComponent={<Palette className="activities-icon" />}
            />

            <ClubActivities
              title="Writing"
              description="When words are hard to articulate, writing becomes a vessel of expression, with books as escapes and poetry as ballads to embrace. This category offers you the freedom to explore, develop, and showcase your literary talents—whether through books, poems, short stories, or any genre from fantasy to action and beyond."
              iconComponent={<Pencil className="activities-icon" />}
            />

            <ClubActivities
              title="Debating"
              description="We have the right to speak, the right to critique—your opinion is a blade sharp with conviction. Join this category to debate topics ranging from peaceful to controversial, where your passions find a voice. Discuss issues, explore solutions, and dive into endless conversation."
              iconComponent={<Gavel className="activities-icon" />}
            />

            <ClubActivities
              title="Presenting"
              description="
              Why hide from the back of the stage? 
              When you can share the beauty of your art whether you write or act, sing or dance, 
              or study works of art, the presentations category provides an opportunity to showcase 
              your talents and leave a lasting mark."
              iconComponent={<Presentation className="activities-icon" />}
            />
          </IconContext.Provider>
        </section>
        <div className="learn-more-about-club-activities-article-call-to-action-section">
          <Link to="/uniondispatch/articles/4">
            <button className="link-to-club-activities-article">
              <span style={{ color: darkMode ? "whitesmoke" : "black" }}>
                Click to Learn More
              </span>
            </button>
          </Link>
        </div>
        <section
          style={{ backgroundImage: `url(${UnionDispatchImage})` }}
          className="homepage-the-union-dispatch-blurb"
        >
          <div className="union-dispatch-section">
            <div className="union-dispatch-section-content">
              <h2>Welcome to The Union Dispatch</h2>
              <h3>The home for your best pieces</h3>
              <p className="union-dispatch-advertiser-text">
                Whether it is an <strong>article, artwork or a video</strong>,
                The Union Dispatch will be the home for your best content. Feel
                free to submit your content using the Google Form for a chance
                to be featured on The Union Dispatch, we will also feature your
                new content on The Union Dispatch as well as on top on the
                Featured Content section of this page
              </p>
              <div className="union-dispatch-tutorial">
                <h4>Accessing The Union Dispatch</h4>
                <p className="accessing-the-union-dispatch-text">
                  Click on the icon{" "}
                  <Link to="/uniondispatch/">
                    <Article
                      className="accessing-the-union-dispatch-text-icon"
                      size={48}
                    />
                  </Link>{" "}
                  shown on the navbar to go to The Union Dispatch
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Meet the Executive Board */}
        <section className="meet-the-exec-board">
          <h1 className="meet-the-exec-board-heading">
            Meet the Executive Board
          </h1>
          <p className="meet-the-exec-blurb">
            Welcome to the Expressive Arts Union! As the executive board, we
            work behind the scenes to organize events, support member projects,
            and foster a community where everyone’s creativity can shine. We
            bring together artists, writers, designers, and performers, offering
            them a platform to learn, share, and showcase their talents and also
            deal with publishing members’ work, we’re here to inspire and grow
            our club’s creative spirit. Join us as we bring ideas to life!
          </p>
          <div className="exec-members">
            <ExecMember
              name="Chebeni Musundi"
              title="President"
              caption="You can't look at a glass half full or empty if it's
                overflowing"
              image={"/assets/exec_images/chebeni.png"}
            />
            <ExecMember
              name="Harsh Patel"
              title="Vice President"
              caption="When I wrote the code for the website, only God and I understood. Now only God knows"
              image={"/assets/exec_images/harsh.png"}
            />
            <ExecMember
              name="Keval Patel"
              title="Coordinator"
              caption="Life is relative; it's all about perspective"
              image={"/assets/exec_images/keval.png"}
            />
            <ExecMember
              name="Arya Bejwalkar"
              title="Club Advisor"
              caption="When you want something, all the universe conspires in helping you achieve it"
              image={"/assets/exec_images/arya.png"}
            />
            <ExecMember
              name="Joan Mukami"
              title="Secretary"
              caption="Sure it could be hard, but look at the alternative if we do nothing"
              image={"/assets/exec_images/joan.png"}
            />
            {/* <ExecMember
              name="Amrit Metha"
              title="Head of Film / Media Director"
              caption=""
              image={}
            /> */}
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
