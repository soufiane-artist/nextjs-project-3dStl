import styles from './styles/Home.module.css';
import { models } from './data/models';
import Three from './components/Three';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <span className={styles.welcome}>Welcome to the Future of 3D Printing</span>
        <h1>Unlock Premium 3D Models for Your Next Creation</h1>
        <p>Access thousands of high-quality 3D printable designs, ready to bring your ideas to life</p>
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5000+</span>
            <span className={styles.statLabel}>Premium Models</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100k+</span>
            <span className={styles.statLabel}>Happy Creators</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Expert Support</span>
          </div>
        </div>
      </section>

      <div className={styles.movingTextContainer}>
        <div className={styles.movingText}>
          <span>3D STL PRINTING THE FUTURE</span>
          <span>•</span>
          <span>UNLIMITED ACCESS</span>
          <span>•</span>
          <span>PREMIUM MODELS</span>
          <span>•</span>
          <span>JOIN TELEGRAM NOW</span>
          <span>•</span>
          <span>3D STL PRINTING THE FUTURE</span>
          <span>•</span>
          <span>UNLIMITED ACCESS</span>
          <span>•</span>
          <span>PREMIUM MODELS</span>
          <span>•</span>
          <span>JOIN TELEGRAM NOW</span>
          <span>•</span>
        </div>
      </div>

    <Three/>

      <section className={styles.features}>
        <h2>Join Telegram To Get Unlimited Files</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>Instant Access</h3>
            <p>Get immediate access to all models as soon as they're uploaded</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>♾️</span>
            <h3>Unlimited Downloads</h3>
            <p>Download as many models as you want, no restrictions</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>💎</span>
            <h3>Premium Models</h3>
            <p>Access to exclusive and high-quality STL files</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>👥</span>
            <h3>Active Community</h3>
            <p>Join thousands of 3D printing enthusiasts and share experiences</p>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Available Categories</h2>
        <div className={styles.filterBar}>
          <button className={`${styles.filterButton} ${styles.active}`}>All</button>
          <button className={styles.filterButton}>Fantasy</button>
          <button className={styles.filterButton}>Mechanical</button>
          <button className={styles.filterButton}>Jewelry</button>
          <button className={styles.filterButton}>Characters</button>
          <button className={styles.filterButton}>Architecture</button>
        </div>
      </section>

      <section className={styles.featuredModels}>
        <div className={styles.sectionHeader}>
          <h2>Preview Models</h2>
          <p>Join Telegram to get unlimited access to all these models and more</p>
        </div>

        <div className={styles.grid}>
          {models.map((model) => (
            <div key={model.id} className={styles.card}>
              <div className={styles.cardBadge}>Premium</div>
              <img
                src={model.image}
                alt={model.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{model.title}</h3>
                <div className={styles.cardMeta}>
                  <p className={styles.cardPrice}>${model.price}</p>
                  <span className={styles.cardDownloads}>Free on Telegram</span>
                </div>
                <button className={styles.downloadButton}>
                  Join Telegram
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>How to Get Unlimited Files</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Join Telegram</h3>
            <p>Download Telegram app and create an account if you haven't already</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Join Our Channel</h3>
            <p>Click the invite link to join our premium STL files channel</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Start Downloading</h3>
            <p>Get unlimited access to all models instantly</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Get Unlimited STL Files Now</h2>
          <p>Join our Telegram channel today and get unlimited access to thousands of premium models</p>
          <button className={styles.ctaButton}>Get Unlimited Files on Telegram</button>
        </div>
      </section>
    </div>
  );
}
