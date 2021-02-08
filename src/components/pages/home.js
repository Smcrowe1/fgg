import React, { useState } from "react";
import Nav from "../partials/nav";
import img1 from "../../assets/img4.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import { Link } from "react-router-dom";
import Footer from "../partials/footer";

const Home = () => {
  const [translate, setTranslate] = useState(0);
  return (
    <div className="home" id="home">
      <div className="header">
        <div className="overlay" />
        <Nav />
        <div className="introduction">
          <div className="left">
            <h1>Federal Government Grant</h1>
            <p>Making funds accesible to every one.</p>
            <div className="action-container">
              <Link to="/claim-funds" className="claim-fund">
                Claim your fund
              </Link>
              <Link to="/beneficiary-list" className="bene">
                Beneficiary list
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="about" id="aboutus">
        <div className="left">
          <h1>About FGG</h1>
          <p>
            The Federal Government Grant(NLF), Is a non-departmental public body
            responsible for distributing funds raised by the National Lottery
            for "good causes". Since 2004 it has awarded over $6 billion to more
            than 130,000 projects in the US. The Community Fund aims to support
            projects which help communities and people it considers most in
            need. Over 80 per cent of our funds go to voluntary and community
            organisations, it also makes grants to statutory bodies, local
            authorities and social enterprises. We also fund projects working in
            health, education and the environment and the charitable sector. We
            fund projects in line with objectives set by the government but does
            not fund services which other parts of government have a statutory
            responsibility to deliver.
          </p>
        </div>
        <div className="right">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="aim"></div>
      <div className="form-part" id="contact">
        <div className="left">
          <img src={img3} alt="" width={500} />
        </div>
        <div className="right">
          <h2 className="title">We would love to hear from you ?</h2>
          <div className="form-container">
            <form>
              <div>
                <label>Fullname</label>
                <input type="text" placeholder="Fullname" />
              </div>
              <div>
                <label>Email</label>

                <input type="email" placeholder="Email" />
              </div>
              <div>
                <label>Occupation</label>

                <input type="text" placeholder="Occupation" />
              </div>
              <div>
                <label>Income</label>

                <input type="number" placeholder="Income" />
              </div>
              <div>
                <label>Number</label>

                <input type="phone" placeholder="Phone number" />
              </div>
              <div>
                <label>Zipcode</label>

                <input type="number" placeholder="Zipcode" />
              </div>
              <div className="button">
                <button className="">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="reviews" id="testimony">
        <button
          className="scroll-btn left"
          onClick={() => {
            if (translate < 0) {
              setTranslate(translate + 400);
            }
          }}
        >
          &lt;
        </button>
        <button
          className="scroll-btn right"
          onClick={() => {
            if (translate !== -800) {
              setTranslate(translate - 400);
            }
          }}
        >
          &gt;
        </button>
        <div className="review_holder">
          <div
            className="review-scroll"
            style={{ transform: `translateX(${translate}px)` }}
          >
            <div className="review">
              <p>
                Thank you so much. I contacted the Agent Raymond Tony by 9:23AM
                and I got my Fund before 6:00PM. I was asked to pay the shipping
                Costs and I did. I cannot believe now I have $150,000. God bless
                you for this opportunity you have given me.
              </p>

              <h3 className="name">Dana Lorem</h3>
            </div>
            <div className="review">
              <p>
                “Thank you so very much for this amazing assistance! It will
                help so much to get me back to where I need to be after the
                financial disaster I was sadly left in for so long. This will
                enable me to catch up, and keep my attorney that is helping me
                do everything possible to keep my daughter safe. It is such a
                relief, and I am so very thankful for your foundation being able
                to assist me in this horrible period of my life”
              </p>

              <h3 className="name">Linda Guthrie</h3>
            </div>
            <div className="review">
              <p>
                I was in doubt at first, until a friend of mine told me she got
                her funds successfully from this website. I was required to pay
                $3,000 at first, i did pay and the next morning the UPS service
                came to my doorstep with my fund. I feel so great right now.
                Thank you Lord for a breakthrough financially. You can trust
                this site 100%! Gracias!
              </p>

              <h3 className="name">Cynthia Henry</h3>
            </div>
            <div className="review">
              <p>
                I was asked to pay for the shipping. First I found it hard to
                believe, after I paid them, I got my funds the next day.
                $200,000. There was some delay for 7 hours but I still got my
                funds the next morning. Thanks.
              </p>

              <h3 className="name">Sharon Fred</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
