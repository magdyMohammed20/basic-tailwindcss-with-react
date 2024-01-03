import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";
import PropTypes from "prop-types";

const Group = ({ src, title, desc }) => {
  return (
    <div className={`${styles.group} group dark:bg-gray-800 bg-slate-600`}>
      <div className={styles.inner_parent}>
        <img
          src={src}
          loading="lazy"
          width="200"
          height="200"
          className={styles.img_style}
        />
        <div className="space-y-8">
          <h5 className={styles.group_header}>{title}</h5>
          <p className="text-gray-300">{desc}</p>
          <div className={styles.flex_con}>
            <a
              href="#"
              className={`${styles.read_more_link} dark:group-hover:text-orange-400 text-black hover:text-black dark:text-slate-400`}>
              Read More
            </a>
            <ArrowRight
              className={`${styles.read_more_arrow} dark:text-orange-400 text-white`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;

Group.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
