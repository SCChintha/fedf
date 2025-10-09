import React from "react";

export default function Resources() {
  const constitutionParts = [
    { id: 1, title: "Part I", description: "THE UNION AND ITS TERRITORY (Articles 1-4)" },
    { id: 2, title: "Part II", description: "CITIZENSHIP (Articles 5-11)" },
    { id: 3, title: "Part III", description: "FUNDAMENTAL RIGHTS (Articles 12-35)" },
    { id: 4, title: "Part IV", description: "DIRECTIVE PRINCIPLES OF STATE POLICY (Articles 36-51)" },
    { id: 5, title: "Part IVA", description: "FUNDAMENTAL DUTIES (Article 51A)" },
    // Add more parts as needed
  ];

  const constitutionResources = [
    {
      title: "Constitution of India (Original)",
      link: "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
      description: "Official PDF version of the Constitution in English"
    },
    {
      title: "Constitution of India (Hindi)",
      link: "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2025/03/202503201580504504.pdf",
      description: "Official PDF version of the Constitution in Hindi"
    },
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Constitution of India Resources</h1>
      
      <section className="resources-section">
        <h2>Official Documents</h2>
        <div className="resources-grid">
          {constitutionResources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section">
        <h2>Parts of the Constitution</h2>
        <div className="parts-grid">
          {constitutionParts.map((part) => (
            <div key={part.id} className="part-card">
              <h3>{part.title}</h3>
              <p>{part.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <ul className="resources-list">
          <li>Amendments to the Constitution</li>
          <li>Historical Background</li>
          <li>Constituent Assembly Debates</li>
          <li>Important Judgments</li>
        </ul>
      </section>
    </div>
  );
}