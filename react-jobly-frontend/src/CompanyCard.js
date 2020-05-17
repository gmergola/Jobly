import React from 'react';
import { Link } from "react-router-dom";

/**CompanyCard: Child component to CompanyList
 * renders information about company
 */

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <Link className="CompanyList-Link" to={`/companies/${handle}`}>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={logoUrl} alt="company logo" />
      </div>
    </Link>
  );
}

export default CompanyCard;