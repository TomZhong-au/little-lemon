import styles from "./Founder.module.css";

const Founders = () => {
  return (
    <section className="founders-section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textContent}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          <div className={styles.images}>
            <img
              src="./assets/Mario and Adrian A.jpg"
              alt="mario and adrian"
              className={styles.imageBack}
            />
            <img
              src="./assets/Mario and Adrian b.jpg"
              alt="mario and adrian"
              className={styles.imageFront}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
