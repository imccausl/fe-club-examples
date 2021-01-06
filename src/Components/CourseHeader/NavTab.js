export const NavTab = ({ activeHash, tab }) => {
  let classes = "Header-tab";

  if (tab.hash === activeHash) {
    classes += " Header-tab--active";
  }

  return (
    <a href={tab.hash} className={classes}>
      {tab.title}
    </a>
  );
};
