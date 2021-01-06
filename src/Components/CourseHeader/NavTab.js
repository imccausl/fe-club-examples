export const NavTab = ({ activeHash, tab }) => {
  let classes = "CourseHeader--tab";

  if (tab.hash === activeHash) {
    classes += " CourseHeader--tab--active";
  }

  return (
    <a href={tab.hash} className={classes}>
      {tab.title}
    </a>
  );
};
