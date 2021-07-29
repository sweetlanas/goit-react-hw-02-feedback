import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={s.sectionTitle}>
      {title}
      {children}
    </section>
  );
};

export default Section;
