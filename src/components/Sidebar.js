import Link from "./Link";

function Sidebar() {
  const links = [
    { label: 'Autocomplete', path: '/autocomplete' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3 blue-text"
        activeClassName="font-bold border-l-4 pl-2 border-pink">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sidebar">
      {renderedLinks}
    </div>
  );
}


export default Sidebar;