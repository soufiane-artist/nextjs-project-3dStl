'use client';
import styles from '@/app/styles/AboutCults.module.css';

export default function AboutCults() {
    return (
        <div className={styles.aboutSection}>
            <h2>About Cults - Your Premier 3D Model Marketplace</h2>
            <div className={styles.content}>
                <div className={styles.infoBlock}>
                    <h3>What is Cults?</h3>
                    <p>
                        Cults is a leading marketplace for 3D printable files, connecting talented designers 
                        with 3D printing enthusiasts worldwide. Our platform offers high-quality STL files, 
                        3D models, and digital designs for both personal and commercial use.
                    </p>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <h4>✨ Quality Assurance</h4>
                        <p>All models are verified for printability and quality before listing</p>
                    </div>
                    <div className={styles.feature}>
                        <h4>🛡️ Secure Downloads</h4>
                        <p>Safe and instant access to your purchased 3D models</p>
                    </div>
                    <div className={styles.feature}>
                        <h4>💰 Fair Pricing</h4>
                        <p>Competitive prices supporting independent creators</p>
                    </div>
                </div>

                <div className={styles.seoContent}>
                    <h3>Why Choose Cults for 3D Models?</h3>
                    <ul>
                        <li>Extensive collection of STL files for 3D printing</li>
                        <li>Active community of designers and makers</li>
                        <li>Regular updates with new 3D printable models</li>
                        <li>Comprehensive support for various 3D printer types</li>
                        <li>Detailed model specifications and printing instructions</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
