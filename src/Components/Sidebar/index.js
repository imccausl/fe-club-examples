import { SidebarListItem } from "./SidebarListItem";

export const Sidebar = ({ openPage, deletePage, pagesList }) => (
  <div className="App-sidebar">
    <ul className="Sidebar-list">
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
