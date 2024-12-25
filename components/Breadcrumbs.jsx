// src/components/Breadcrumbs.jsx
import { Link } from 'react-router-dom';

// Title case function with acronym handling
function toTitleCase(str) {
  const acronyms = ['AC', 'CCTV', 'HVOC']; // List of acronyms to preserve in uppercase
  return str
    .toLowerCase()
    .split(' ')  // Split by spaces
    .map(word => {
      // If the word is an acronym, keep it in uppercase
      return acronyms.includes(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');  // Join the array back into a string
}

export default function Breadcrumbs({ location }) {
  const pathParts = location.pathname.split('/').filter(part => part); // Split path into segments and remove empty strings

  const breadcrumbs = pathParts.map((part, index) => {
    // Generate href for each breadcrumb by slicing the path
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    return {
      text: toTitleCase(part.replace("%20", ' ')), // Use toTitleCase function here
      href,
    };
  });

  return (
    <div className="breadcrumbs-container">
      <nav>
        <ol className="breadcrumbs-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb-item">
              {index > 0 && <span className="breadcrumb-separator">&gt;</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="breadcrumb-link">
                  {crumb.text}
                </Link>
              ) : (
                <span className="breadcrumb-text">{crumb.text}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
