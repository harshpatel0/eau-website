import NavBar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";

import { useContext, useEffect, useState } from "react";

import {
  IconContext,
  InstagramLogo,
  Envelope,
  UserSwitch,
  CaretDown,
} from "@phosphor-icons/react";
import HeroImage from "../../assets/images/HeroImage.jpg";
import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";
import "./Home.css";

import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

function Home() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [quote, setQuote] = useState("");
  const [quoteCaption, setQuoteCaption] = useState("");

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
      caption: "Jeremy Mwangi",
    },
  ];

  useEffect(() => {
    document.title = "The Expressive Arts Union";
  }, []);

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
    chooseQuote();
  }, []);

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
                {/* <span>
                <UserSwitch onClick={chooseQuote} />
              </span> */}
                <i>{quoteCaption}</i>
              </p>
            </div>

            {/* <div className="homepage-hero-club-about">
            <h2>Aim of the club</h2>
            <p>
              Our aim with this club is to get people out of their comfort zone,
              speaking about various topics through lively debates, spark
              creativity through written literature, bring forth the ability to
              express through presentations and finally, create new friendships,
              partners and teammates along the way
            </p>
          </div> */}
            <div className="homepage-hero-club-about">
              <MarkdownRenderer
                markdownContent="
### Could this be where featured content goes? Or Aim of the Club?
Idk it seems like a good place, something like oh look. Go to [The Union Dispatch](/uniondispatch) for a new article!!
            "
              ></MarkdownRenderer>
            </div>

            <div className="homepage-hero-scroll-notifier">
              <CaretDown />
            </div>
          </div>
        </div>
      </IconContext.Provider>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat
        sint nisi vero, commodi modi maxime ipsum quidem obcaecati sit
        cupiditate. Officiis pariatur optio odit aperiam iure, quis ducimus
        voluptates! Perferendis et tempore eius. Explicabo autem distinctio
        accusantium labore amet optio necessitatibus suscipit non nostrum
        ratione? Impedit laborum rem officiis quos id enim, at illum beatae,
        sequi praesentium, cum minima. Eligendi quaerat praesentium laborum
        cupiditate dolor, impedit pariatur enim maiores quasi sit animi est ut
        atque quibusdam deleniti at iste fugit quo, possimus, consequatur illum
        velit sapiente ullam. Animi, impedit! Possimus, omnis praesentium.
        Aliquid, sint ratione aspernatur eos voluptas veritatis, eaque nobis
        libero magnam, molestiae quidem fuga non tenetur! Debitis quisquam
        numquam alias quam libero necessitatibus vero ipsum cumque ratione?
        Nulla veniam quasi repellat magnam quam itaque veritatis necessitatibus,
        magni error, dolorum accusantium in. Magnam repellat itaque voluptas
        accusantium ad repudiandae dicta nisi odit velit consequatur rerum nam,
        unde numquam? Sapiente iste sint vitae quod dolor ipsa exercitationem
        debitis odit, reiciendis ut ex! Sunt labore omnis sit mollitia, a qui
        animi hic, quibusdam officiis adipisci nihil commodi laboriosam libero
        porro. Magnam eius sapiente possimus ullam, fugiat voluptate libero ab
        sit odit iure ducimus in soluta assumenda modi cum distinctio ratione
        et? Quam, tempora iste iure fugit minus nobis dolorem sapiente. Quaerat
        veniam odio cumque praesentium in molestias consectetur facere autem non
        maxime! Ratione id minus velit in, voluptatibus tempore eaque adipisci
        est. Quae aliquid esse, officia magni pariatur voluptatum dolorum.
        Similique esse non fugit quisquam iure tempora inventore, nobis
        obcaecati et, deleniti molestias repudiandae rerum commodi cupiditate
        fugiat deserunt perspiciatis quos adipisci nam odit sequi. Omnis maxime
        aliquid quisquam distinctio? Molestias eius corrupti modi vitae ut rerum
        consequatur voluptatibus vel itaque, tempora fugit omnis enim ducimus
        nulla debitis qui porro tenetur, pariatur, nisi eaque architecto. Odit
        magni praesentium tenetur delectus? Repellat, minima. Ut ab harum quas
        vero hic maxime quaerat eos doloribus accusantium? Natus expedita magnam
        repudiandae earum at? Explicabo asperiores nisi corrupti labore sequi
        tempore cupiditate velit dolorum enim. Soluta dolorem eum libero culpa
        officia ea at, nam minima distinctio animi quae esse tenetur nobis sint
        blanditiis voluptatem harum error itaque laborum totam provident quod,
        vero nesciunt fugit? Voluptas! Obcaecati distinctio nam, possimus
        molestiae consequatur animi iusto, consequuntur accusamus adipisci
        aspernatur sequi expedita eius! Perferendis totam pariatur ducimus, esse
        earum consectetur vero omnis at itaque nam quam voluptatum. Sapiente.
        Dolorem, illum? Ipsa voluptates odio excepturi hic id expedita
        blanditiis facilis facere deserunt quam ipsam quisquam doloribus numquam
        sed quas magni iure, nemo suscipit aspernatur corporis! Doloribus
        recusandae earum nisi? Dolorum reprehenderit dicta sed quisquam quam
        autem? Tenetur recusandae sed magni, aperiam modi officiis, eos illum
        quaerat repellat, fugiat suscipit harum est a maxime consequatur soluta
        error vero! Reprehenderit, dicta! Ipsum voluptatem quo vero maxime eos
        architecto quidem at unde magni quam! Quaerat, laborum, obcaecati
        ratione hic, fugiat culpa quidem iusto perferendis vero maxime animi
        architecto delectus accusamus ad maiores! Expedita odio amet optio est
        qui illum sunt officia. Aut, aliquid dolorem nulla tempore veniam
        deserunt amet rem fugiat quod libero ratione quam explicabo fugit
        expedita. Nobis libero similique maxime? Assumenda, eveniet. Fuga fugiat
        expedita dicta odio iure. Animi earum, quam voluptate fuga sint deserunt
        libero quod molestias maiores hic est nihil voluptatibus sit ad, modi
        ipsam explicabo beatae iusto! Doloribus id reiciendis iure repudiandae,
        natus ullam molestiae ipsum quod vel similique, impedit, temporibus
        reprehenderit. Ratione possimus nobis suscipit et hic veritatis saepe
        rerum, ea deserunt officia distinctio aut eveniet! Eum quo facilis hic
        iste eveniet ipsum amet ipsa animi voluptate, similique illo neque
        pariatur dicta perferendis explicabo eius officiis doloremque voluptatum
        minima voluptas vitae a unde odit? Animi, dignissimos! Ipsam ducimus
        blanditiis amet at asperiores temporibus, eos rem incidunt doloremque
        neque nesciunt sed quaerat nam cum ut corporis eligendi vero qui esse
        dolores a dolorum facere consectetur quibusdam! Vitae! Doloribus quaerat
        ipsum dicta blanditiis hic error illo consectetur accusamus beatae ipsa
        temporibus reiciendis, fuga repudiandae repellat qui. Numquam sed
        accusamus iste placeat unde voluptates. Aperiam ipsum at cupiditate
        expedita. Architecto, numquam! Nemo magni explicabo voluptatibus
        doloremque, tempore asperiores quam assumenda nam. Fugit laborum itaque
        aperiam dignissimos corrupti, neque sed nihil perferendis nobis
        cupiditate placeat, quos accusamus omnis magnam nemo. Veniam accusamus
        vitae ab libero maiores iusto adipisci deleniti iure natus. Rerum dolore
        error blanditiis optio officiis! Fugiat consequatur ducimus consectetur
        sequi quibusdam sed in, quasi ab dolor. Rerum, voluptatem! Doloremque
        sint, tenetur laboriosam omnis debitis iure quibusdam molestiae
        necessitatibus, asperiores fugit quaerat molestias quas velit! Pariatur
        illum est nulla consequuntur eum repellat doloribus suscipit, quae odio
        non hic rerum? Animi, nemo deserunt laborum quo numquam cumque. Non
        expedita dolorum repellat rem doloremque incidunt quae suscipit
        voluptates magni cumque, fugit deserunt labore minus atque numquam sint
        temporibus eius eos soluta! Accusamus, saepe nobis consequatur fuga
        cumque a sequi tenetur velit nihil ex, quae beatae sint dolorem aliquam
        obcaecati quo numquam et itaque. Magnam facilis dolores maiores. Maxime
        asperiores expedita fugit. Veniam ea temporibus nobis, aliquam cum
        nesciunt alias, corrupti totam obcaecati maxime quia corporis quis,
        earum repellat doloremque tempore. Odio veniam aspernatur recusandae
        omnis perferendis sapiente fuga quisquam deleniti molestias! Accusamus
        corrupti deserunt totam debitis sapiente facere? Beatae est sunt
        praesentium eveniet expedita, officiis ratione impedit nihil, quod cum
        accusantium similique eos quasi nesciunt laudantium nemo tempora alias
        odio iste. Obcaecati magnam natus veritatis. Velit, dolores autem qui
        ipsa dignissimos quidem maiores suscipit voluptatum quasi? Eligendi
        error ipsam magni facilis repudiandae voluptate nam nesciunt quasi
        quidem qui, vitae, officiis accusantium! Possimus labore ab ea,
        perferendis soluta quos quidem placeat, alias tenetur autem eos aliquid
        accusantium? Nam quam minima maxime labore unde velit minus quisquam
        error, illo commodi id, corrupti officiis. Expedita rem, odio beatae
        itaque quaerat minima enim rerum deleniti laboriosam optio iure harum
        sint tempora praesentium assumenda, nesciunt soluta esse, labore ut
        accusantium laborum! Totam temporibus consequuntur modi corporis. Odit
        quibusdam similique minus iure animi! Doloribus autem culpa ullam. Iste
        dolore eos fugit ipsum, perferendis molestiae officiis, temporibus
        blanditiis esse id harum assumenda ullam dolor nobis? Sunt, vero velit?
        Hic minus eum at debitis consequatur eligendi enim laudantium unde
        impedit quo excepturi voluptate officiis aliquid harum earum dignissimos
        provident, praesentium voluptatem facere rerum asperiores? Sed dicta
        esse optio illo. Sequi quia magnam quod quibusdam nihil eum, rem
        possimus vel excepturi fugiat. Perspiciatis officia architecto atque
        nulla doloribus. Ea nisi perferendis incidunt officiis repellat alias
        error expedita velit explicabo at? Eius sint modi dolorem ullam sunt.
        Esse ab quasi deserunt omnis sit laborum eligendi voluptates veritatis
        modi, nam quidem ex maxime tempora quis. Ex, veritatis! Cum voluptas
        perspiciatis dicta sequi? Exercitationem esse illum accusantium adipisci
        rerum excepturi, vel eveniet quo est eius, explicabo fuga. Consectetur
        nostrum blanditiis architecto quidem esse, eligendi eius sint dolor
        expedita? Facilis omnis et provident dolorum. Quam voluptatibus tenetur
        necessitatibus facilis molestias eaque vitae reprehenderit. Aut harum
        minus suscipit dolorum, accusamus eum excepturi incidunt vitae ab atque
        dolores dolor maiores maxime voluptatibus, nihil quae error. Veritatis.
        Cum consequatur dolores exercitationem quas debitis accusamus possimus
        quibusdam similique atque? Officia aut voluptatem rerum aspernatur,
        possimus doloremque alias aliquam cumque. Tempore nesciunt sit beatae
        fuga sint, similique dolor odio? Eligendi quod dolorem amet velit atque
        illum a odio ipsa, eveniet voluptatibus ex quam dolorum consectetur
        impedit eius nostrum, perferendis autem repudiandae voluptates, mollitia
        nihil dolore! Atque minima ipsa vero? Atque quas provident molestiae
        fugit facilis, id asperiores cumque delectus necessitatibus
        reprehenderit aliquam. Magni laboriosam libero deleniti minus cum nobis
        laudantium quae sed, cupiditate aliquid mollitia, vitae modi id
        corrupti. Dicta nulla, dolores impedit debitis fugiat, enim rerum
        dolorem iusto hic expedita vitae consectetur veniam ullam dolor!
        Sapiente consequuntur sunt sint ullam quisquam, atque odio. Cum eveniet
        accusamus dolore quaerat. Ipsum corporis harum maiores quis sequi,
        recusandae fugit consectetur rem asperiores vel nesciunt minima
        aspernatur enim accusantium corrupti illo dolorum, at necessitatibus
        iure. Laboriosam optio ut voluptate eaque soluta vel! Culpa labore
        repudiandae, veniam impedit quasi similique eaque. Necessitatibus,
        laborum perferendis repellendus obcaecati enim adipisci cupiditate
        doloremque saepe illo, doloribus fuga ab aliquid, expedita dolores
        exercitationem eos fugit minus suscipit. Perferendis molestias, eum
        incidunt nisi accusantium corporis deserunt culpa, architecto dicta
        exercitationem, sed at minima fuga obcaecati vero quidem quod! Alias
        eveniet quisquam ullam quis doloribus unde fugit debitis dicta! Fugiat
        eligendi in iusto impedit recusandae dolorem rem perspiciatis nobis
        tenetur molestiae. Voluptatibus similique natus cum enim minima dolore
        nobis reprehenderit facilis animi? Quia beatae veritatis incidunt id
        asperiores voluptatem! Vitae ex maiores ratione, at fugit sunt
        voluptatibus hic fugiat neque delectus ea laboriosam eveniet rerum
        consectetur dicta nisi ipsum maxime dolore dolor minus. Veritatis id
        perferendis quae nihil voluptatum! Maxime, non incidunt dolor aspernatur
        voluptate repellat hic consequatur quos atque dolorem debitis mollitia,
        perspiciatis possimus id porro deserunt illo facere quod excepturi
        obcaecati eligendi animi. Cum suscipit quos totam. Necessitatibus
        debitis eaque consequatur dolor dolorum! Maxime vitae, necessitatibus
        ipsum corporis et sed sit ad quas optio officia qui fuga, officiis
        accusantium id nemo, harum mollitia quidem asperiores voluptate sunt. In
        impedit necessitatibus aut officia expedita eos voluptatibus fugiat,
        iure reiciendis quae possimus vero voluptatem quod non error pariatur
        laboriosam nesciunt ipsam doloremque quibusdam esse dignissimos
        molestias asperiores. Architecto, non?
      </p>
    </>
  );
}

export default Home;
