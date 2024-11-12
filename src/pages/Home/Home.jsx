import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  IconContext,
  InstagramLogo,
  Envelope,
  CaretDown,
  Palette,
  VinylRecord,
  Pencil,
  MaskHappy,
  Gavel,
  Presentation,
  Article,
} from "@phosphor-icons/react";

import NavBar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer.jsx";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";

import HeroImage from "../../assets/images/pexels-anete-lusina-6331086.webp";
import UnionDispatchImage from "../../assets/images/single-earth-ApivzPERunU-unsplash.webp";

import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";
import "./Home.css";

import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import ClubActivities from "./components/ClubActivities.jsx";
import { apiBaseUrl } from "../../veryglobalvars.js";

function Home() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [quote, setQuote] = useState("");
  const [quoteCaption, setQuoteCaption] = useState("");

  const [frontpageFeature, setFrontPageFeature] = useState("");
  const [loadingDone, setLoadingDone] = useState(false);

  // Soon to be in DB
  const quotes = [
    {
      quote: "Make a choice, oxygen or WiFi",
      caption: "Chebeni Musundi, President",
    },
    {
      quote: "Site made with cello tape and cardboard",
      caption: "Harsh Patel, Vice President",
    },
    {
      quote: "Upholding Security 👮🚓",
      caption: "Jeremy Mwangi, CSO",
    },
    {
      quote:
        "Even if you're not always ready for the day, it can not always be night",
      caption: "Chebeni Musundi, President",
    },
    {
      quote: "Its never that deep.",
      caption: "Keval Patel, Coordinator",
    },
  ];

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

  useEffect(() => {
    if ((frontpageFeature != "") & (quote != "")) {
      setLoadingDone(true);
    }
  }, [frontpageFeature, quote]);

  function getRandomInteger() {
    return Math.floor(Math.random() * (quotes.length - 0));
  }

  function chooseQuote() {
    let quoteChosen = getRandomInteger();

    let quoteObject = quotes[quoteChosen];
    setQuote(quoteObject.quote);
    setQuoteCaption(quoteObject.caption);

    console.log(quoteObject);
    console.log(quoteChosen);
  }

  useEffect(() => {
    document.title = "The Expressive Arts Union";

    getFrontPageFeaturedText();
    chooseQuote();
  }, []);

  return (
    <>
      <LoadingScreen
        done={loadingDone}
        loadingText="Welcome to the Expressive Arts Union"
        loadingSubText="We are getting the site ready for you."
      />
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
              // description="
              //   The beat of your heart, the snap of your thumb the sound of the
              //   wind, the hallow in your speech listen and relate, rhythm and
              //   lyric date. From the artistry of rap to the cadence of pop, this
              //   category offers you the chance to compose music, analyze lyrics,
              //   and explore the messages conveyed through music from the 19th
              //   century to the 21st century."
              description="The beat of your heart, the snap of your thumb, the sound of the wind, the hollow in your speech—listen and relate as rhythm meets lyric. From rap to pop, this category invites you to compose, analyze, and explore the messages in music from the 19th to the 21st century."
              iconComponent={<VinylRecord className="activities-icon" />}
            />
            <ClubActivities
              title="Film and Theatrical"
              // description="
              //   Films & theatricals. A drama may unfold as a story is told an act put on screen as life rolls through scenes.
              //   The films and theatricals department offers an opportunity to discuss your favourite movies and receive recommendations for intriguing films to explore.
              //   It also provides a platform to write scripts and stage complete plays.
              //   The possibilities for creation and collaboration in the theatrical realm are endless."
              description="Films & Theatricals. As stories unfold and life rolls through scenes, this category lets you dive into favorite films, explore new recommendations, and craft your own scripts and plays. The possibilities for creativity and collaboration are endless."
              iconComponent={<MaskHappy className="activities-icon" />}
            />

            <ClubActivities
              title="Art"
              // description="
              //   Paint me the emotions I cannot seem to speak, sketch my inner pain that hides my crystal cry mould my true character on a canvas that's pretty clear draw a sea of words that I could never speak out here.
              //   There are various mediums of art, such as painting, photography, and sculpture.
              //   This category broadens your creative scope, allowing you to make and express, while also encouraging analysis and understanding of the messages behind the artwork"
              description="Paint the emotions I can’t voice, sketch hidden pain, mold my true character on a clear canvas, and draw a sea of words I dare not speak. With mediums like painting, photography, and sculpture, this category expands your creative reach, inviting both creation and deeper understanding of the messages within art."
              iconComponent={<Palette className="activities-icon" />}
            />

            <ClubActivities
              title="Writing"
              // description="
              // When words are hard to articulate, a vessel of expression is in the quake.
              // When books are a source of an escape or poetry a ballad to embrace paint the prose, haze the emotion.
              // In the category of writing, you are provided with the creative opportunity to explore, develop, and showcase your literary talents.
              // Whether you choose to craft a book, poem, short story, or any other form of writing, you have the freedom to delve into various genres, from fantasy to action and beyond."
              description="When words are hard to articulate, writing becomes a vessel of expression, with books as escapes and poetry as ballads to embrace. This category offers you the freedom to explore, develop, and showcase your literary talents—whether through books, poems, short stories, or any genre from fantasy to action and beyond."
              iconComponent={<Pencil className="activities-icon" />}
            />

            <ClubActivities
              title="Debating"
              // description="
              // We have the right to speech, the right to critic.
              // Your opinion is your blade sharp with conviction without delay,
              // So why not join the debate in this category, a wide range of topics,
              // from peaceful to controversial topics, are open for endless discussion.
              // Whatever you are deeply passionate about and strongly support can be debated and encouraged.
              // Issues are considered, and solutions may emerge, all within this area.
              // "
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
                  <Article
                    className="accessing-the-union-dispatch-text-icon"
                    size={48}
                  />{" "}
                  shown on the navbar to go to The Union Dispatch
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
