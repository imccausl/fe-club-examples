import { SidebarListItem } from "./SidebarListItem";
import "./Sidebar.css";

export const Sidebar = ({ openPage, deletePage, pagesList }) => (
  <nav className="Sidebar" aria-label="sidebar">
    <ul className="Sidebar--list">
      {pagesList.map((pageTitle) => (
        <SidebarListItem
          title={pageTitle}
          openPage={openPage}
          deletePage={deletePage}
          key={pageTitle.substring(0, 10)}
        />
      ))}
    </ul>
  </nav>
);
