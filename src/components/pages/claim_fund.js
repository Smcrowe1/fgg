import React from "react";
import Nav from "../partials/nav";
import "../../styles/other.css";
import img6 from "../../assets/img6.jpeg";

const ClaimFund = () => {
  return (
    <React.Fragment>
      <div className="claim-fund">
        <Nav />
        <main>
          <div className="left">
            <p>
              {" "}
              To claim funds, you must be above 18 years. You can choose any
              amount you would like to claim, Once you fill up the informations
              our Agents are online to run a database check thereafter you will
              be contacted within some hours to let you know if you are
              accredited for the amount you want to be granted. In some cases
              when you’re not accredited we will give you choices of other
              amount you can claim. The funds are totally free and not a loan or
              refundable. The National Lottery Fund and OFID are in partnership
              with the World bank to support and eradicate poverty all over the
              world. Once you have been accredited and you’ve met the Grant
              Charge Fee (GCF)/Shipping which includes the TAX and VAT for each
              monetary category, We will contact you about how you want the
              Grant delivered to you which takes not less 24 hours as soon as
              you have been completed. Choose any amount you want to be granted
              below.
            </p>{" "}
            <p>Pay £1,500 to be granted £50,000.00.</p>
            <p>Pay £2,000 to be granted £80,000.00.</p>
            <p>Pay £3,000 to be granted £100,000.00.</p>
            <p>Pay £3,500 to be granted £150,000.00.</p>
            <p>Pay £4,000 to be granted £250,000.00.</p>
            <p>Pay £5,000 to be granted £300,000.00.</p>
            <p>Pay £5,500 to be granted £350, 000.00.</p>
            <p>Pay £6,000 to be granted £400,000.00.</p>
            <p>Pay £6,500 to be granted £450,000.00.</p>
            <p>Pay £7,000 to be granted £500,000.00</p>
            <p>Pay £7,500 to be granted £550,000.00</p>
            <p>Pay £8,000 to be granted £600,000.00</p>
            <p>Pay £9,500 to be granted £650,000.00.</p>
            <p>Pay £11,000 to be granted £700,000.00.</p>
            <p>Pay £12,000 to be granted £750,000.00</p>
            <p>Pay £13,000 to be granted £800,000.00</p>{" "}
            <p>Pay £14,000 to be granted £850,000.00 </p>
            <p>Pay £25,000 to be granted £900,000.00</p>
            <p>Pay £30,000 to be granted £1,000,000,00.</p>{" "}
            <p>Pay £40,000 to be granted £2,000,000,00.</p>
            <p>Pay £50,000 to be granted £3,000,000,00.</p>
            <p></p>
            <p>Pay £100,000 to be granted £5,000,000,00</p>{" "}
            <p>
              Contact our Registered agent via E-mail @
              consultancynlf@outlook.com
            </p>
          </div>
          <img src={img6} alt="" />
        </main>
      </div>
      <footer id="contact-us">
        <div>
          <p>Address</p>
          <p>120 Independent Avenue, S.W USA 2020</p>
        </div>
        <div>
          <p>consultantfgg@outlook.com</p>
          <p>ffgconsultant@gmail.com</p>
        </div>
        <div>
          <p>Copyright &copy;2021 Federal Government Grant</p>
          <p>(251) 999-6176</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default ClaimFund;
