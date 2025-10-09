import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Who's Who</h1>
      <p className="contact-desc">Contact details of Officers/Officials of Legislative Department</p>

      {/* Minister Section */}
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

      {/* Additional Secretary / Joint Secretary Section */}
      <h2 className="section-title">Additional Secretary / Joint Secretary</h2>
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
            {/* Add other additional secretary entries */}
          </tbody>
        </table>
      </div>

      {/* Add similar sections for other designations */}
    </div>
  );
}