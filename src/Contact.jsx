import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Who's Who</h1>
      <p className="contact-desc">Contact details of Officers/Officials of Legislative Department</p>

      {/* Minister & Personal Staff */}
      <h2 className="section-title">Minister</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Division / Section</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shri Arjun Ram Meghwal</td>
              <td>Hon'ble Minister of State</td>
              <td>MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>01123386974</td>
              <td>402-A</td>
            </tr>
            <tr>
              <td>Dr. Rajiv Kumar Verma</td>
              <td>PS</td>
              <td>PS to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23387557</td>
              <td>403-A</td>
            </tr>
            <tr>
              <td>Anshu Bhardwaj</td>
              <td>Addl. PS</td>
              <td>Addl. PS to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23387557</td>
              <td>403 (A)</td>
            </tr>
            <tr>
              <td>R.K. Mishra</td>
              <td>Addl. PS</td>
              <td>Addl. PS to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23387557</td>
              <td>403 (A)</td>
            </tr>
            <tr>
              <td>Aman Chawla</td>
              <td>PPS</td>
              <td>PPS to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23387557</td>
              <td>403-A</td>
            </tr>
            <tr>
              <td>Mukesh Kumar</td>
              <td>Asstt. PS</td>
              <td>Asstt. PS to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23070045</td>
              <td>403 (A)</td>
            </tr>
            <tr>
              <td>Teja Ram Meghwal</td>
              <td>First PA</td>
              <td>First PA to MoS (I/C) Law and Justice</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23387557</td>
              <td>403 (A)</td>
            </tr>
            <tr>
              <td>Personal Section</td>
              <td>Personal Section</td>
              <td>-</td>
              <td>mljoffice@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23070045</td>
              <td>403-A</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Secretary Section */}
      <h2 className="section-title">Secretary</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Rajiv Mani</td>
              <td>Secretary (Legislative Department)</td>
              <td>secyoffice-ld@gov.in</td>
              <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
              <td>23384617</td>
              <td>405-A</td>
            </tr>
            {/* Add other secretary section entries */}
          </tbody>
        </table>
      </div>

      {/* Additional Secretaries */}
      <h2 className="section-title">Additional Secretaries</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Division / Section</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Manoj Kumar</td>
              <td>Additional Secretary</td>
              <td>ILDR Section, Cyber Security, Information Technology Management and NIC Cell</td>
              <td>as-ld-molj@gov.in</td>
              <td>23387095</td>
              <td>423</td>
            </tr>
            <tr>
              <td>Additional Secretary Name</td>
              <td>Additional Secretary</td>
              <td>Section / Wing</td>
              <td>name@gov.in</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Joint Secretaries / Legislative Counsel */}
      <h2 className="section-title">Joint Secretaries / Legislative Counsel</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Division / Section</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joint Secretary Name</td>
              <td>Joint Secretary &amp; Legislative Counsel</td>
              <td>Section / Unit</td>
              <td>name@gov.in</td>
              <td>4th Floor, Shastri Bhawan, New Delhi</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Directors */}
      <h2 className="section-title">Directors</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Director Name</td>
              <td>Director</td>
              <td>director@gov.in</td>
              <td>4th / 7th Floor, Shastri Bhawan, New Delhi</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deputy Legislative Counsel */}
      <h2 className="section-title">Deputy Legislative Counsel</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deputy LC Name</td>
              <td>Deputy Legislative Counsel</td>
              <td>deputylc@gov.in</td>
              <td>4th Floor, Shastri Bhawan, New Delhi</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Assistant Legislative Counsel */}
      <h2 className="section-title">Assistant Legislative Counsel</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assistant LC Name</td>
              <td>Assistant Legislative Counsel</td>
              <td>assistantlc@gov.in</td>
              <td>4th Floor, Shastri Bhawan, New Delhi</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deputy Secretaries (e.g., Finance, VSP) */}
      <h2 className="section-title">Deputy Secretaries</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Room No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deputy Secretary Name</td>
              <td>Deputy Secretary</td>
              <td>deputysec@gov.in</td>
              <td>Shastri Bhawan, New Delhi</td>
              <td>00000000</td>
              <td>Room</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}