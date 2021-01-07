import { ButtonWithTooltip } from "../Tooltip";

export const SidebarListItem = ({ title, openPage, deletePage }) => (
  <li className="Sidebar--item" key={title.substring(10)}>
    <button onClick={() => openPage(title)} className="Sidebar--button">
      {title.replaceAll("-", " ")}
    </button>
    <ButtonWithTooltip
      className="Sidebar--delete"
      onClick={() => deletePage(title)}
      tooltipContent="Delete item!"
    >
      -
    </ButtonWithTooltip>
  </li>
);
