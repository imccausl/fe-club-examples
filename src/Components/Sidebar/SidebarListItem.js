export const SidebarListItem = ({ title, openPage, deletePage }) => (
  <li className="Sidebar-listitem" key={title.substring(10)}>
    <button onClick={() => openPage(title)} className="Sidebar-link">
      {title.replaceAll("-", " ")}
    </button>
    <button className="Sidebar-deleteitem" onClick={() => deletePage(title)}>
      -
    </button>
  </li>
);
