import Link from "./Link";

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
    { label: 'Autocomplete', path: '/autocomplete' },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-violet-400 pl-2">
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

//ask hanna how to get the sidebar to stop getting overlapped

export default Sidebar;