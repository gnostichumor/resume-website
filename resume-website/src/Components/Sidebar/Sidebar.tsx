import styles from "./Sidebar.module.scss";
import profilePic from "../../assets/jpg/profilePic.jpg";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "welcome",
  "experience",
  "languages",
  "design",
  "reading",
  "learning",
  "education",
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={profilePic} alt="matthew preston" />
            </div>
            <div className={styles.profileHeader}>
              <p className={styles.profileName}>Matthew Preston</p>
              <p className={styles.profileDescription}>
                Product Manager | Data Analyst | Avid Learner
              </p>
            </div>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
