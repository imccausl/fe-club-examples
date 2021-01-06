import { SidebarListItem } from "./SidebarListItem";
import "./Sidebar.css";

export const Sidebar = ({ openPage, deletePage, pagesList }) => (
  <div className="Sidebar">
    <ul className="Sidebar--list">
      {pagesList.map((pageTitle) => (
        <SidebarListItem
          title={pageTitle}
          openPage={openPage}
          deletePage={deletePage}
          key={pageTitle.substring(10)}
        />
      ))}
    </ul>
  </div>
);
