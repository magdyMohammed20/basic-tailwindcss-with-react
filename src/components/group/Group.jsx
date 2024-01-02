import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";
const Group = ({ src, title, desc }) => {
  return (
    <div className={`${styles.group} group`}>
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
            <a href="#" className={styles.read_more_link}>
              Read More
            </a>
            <ArrowRight className={styles.read_more_arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
