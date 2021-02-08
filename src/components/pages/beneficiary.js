import React from "react";
import Nav from "../partials/nav";
import "../../styles/other.css";
import img4 from "../../assets/img4.jpeg";

const Beneficiary = () => {
  const listOfBen = [
    { name: "Sarah Jane Dymock", status: 2 },
    { name: "Carolyn Monroe", status: 1 },
    { name: "Billy Crombie", status: 2 },
    { name: "Ivery Anderson", status: 1 },
    { name: "Jeanie Simon", status: 1 },
    { name: "Sarah Smith", status: 2 },
    { name: "And Swindle", status: 1 },
    { name: "Marilyn Hettich Surratt", status: 1 },
    { name: "Pete Phillips", status: 1 },
    { name: "Alexander A Zamorano", status: 0 },
    { name: "Doe Arnot", status: 2 },
    { name: "Betty Kenny", status: 2 },
    { name: "Mark Kimball", status: 2 },
    { name: "Eric Clifford", status: 1 },
    { name: "Geraldine Cooper Bentley", status: 2 },
    { name: "Darcey Kujala", status: 2 },
    { name: "Jeanette Sheldrick", status: 1 },
    { name: "Clayton Gutzmore", status: 2 },
    { name: "Mr Eddie", status: 2 },
    { name: "Donnie Watkins", status: 2 },
    { name: "Mr Wesley", status: 1 },
    { name: "Kelvin Esemomoh", status: 1 },
    { name: "Tina Chister", status: 1 },
    { name: "Susan George", status: 2 },
    { name: "Puggy Cole Hall", status: 2 },
    { name: "Elanie Thomas K", status: 1 },
    { name: "Richard D Bowles", status: 0 },
    { name: "Crystal Lewis", status: 2 },
    { name: "Nathan J Hofstee", status: 2 },
    { name: "Mrs Darlene", status: 2 },
    { name: "Ednard Langley", status: 1 },
    { name: "Alice Brouillard", status: 1 },
    { name: "Bitsy Mckay", status: 2 },
    { name: "Danielle Been", status: 1 },
    { name: "Ken Schmit", status: 1 },
    { name: "Erwin Lola Petitt", status: 0 },
    { name: "Jennifer f.Adreas", status: 2 },
    { name: "Gregory A Betts", status: 2 },
  ];

  const renderBeneficiary = listOfBen.map((entry, index) => {
    return (
      <tr>
        <td>{entry.name}</td>
        <td>
          {entry.status === 1
            ? "Delivered"
            : entry.status === 2
            ? "Not claimed"
            : "Not Delivered"}
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <div className="claim-fund">
        <Nav />
        <main>
          <div className="left">
            <h1>Beneficiary List</h1>
            <p>Beneficiary List and Delivery Status</p>
            <table>
              <tr>
                <td>Name</td>
                <td>Status</td>
              </tr>
              {renderBeneficiary}
            </table>
          </div>
          <img src={img4} alt="" />
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

export default Beneficiary;
