"use client";

import './styles/globals.css'
import './styles/variables.css'
import styles from './styles/Footer.module.css'
import Script from 'next/script'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCube, FaLayerGroup, FaCloudUploadAlt, FaTags, FaBlog, FaUsers, FaQuestionCircle, FaVideo, FaClipboardList, FaEnvelope, FaFileContract, FaShieldAlt, FaMapMarkerAlt, FaPhone, FaEnvelope as FaEnvelopeIcon, FaHeart } from 'react-icons/fa'
import Navigation from './components/Navigation'
import ReduxProvider from './components/ReduxProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ReduxProvider>
          <ToastContainer position="top-right" autoClose={3000} />
          <header>
            <Navigation />
          </header>
          <main>{children}</main>
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerSection}>
                <h3>3D STL Market</h3>
                <p>Your premier destination for high-quality 3D printable STL files. Join our community of creators and bring your ideas to life!</p>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>10K+</div>
                    <div className={styles.statLabel}>Models</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>50K+</div>
                    <div className={styles.statLabel}>Users</div>
                  </div>
                </div>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                  <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                  <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                  <a href="#" className={styles.socialIcon}><FaYoutube /></a>
                </div>
              </div>

              <div className={styles.footerSection}>
                <h4>Quick Links</h4>
                <div className={styles.links}>
                  <a href="/models"><FaCube /> 3D Models</a>
                  <a href="/categories"><FaLayerGroup /> Categories</a>
                  <a href="/upload"><FaCloudUploadAlt /> Upload Model</a>
                  <a href="/pricing"><FaTags /> Pricing</a>
                  <a href="/blog"><FaBlog /> Blog</a>
                  <a href="/community"><FaUsers /> Community</a>
                </div>
              </div>

              <div className={styles.footerSection}>
                <h4>Support & Resources</h4>
                <div className={styles.links}>
                  <a href="/help-center"><FaQuestionCircle /> Help Center</a>
                  <a href="/tutorials"><FaVideo /> Tutorials</a>
                  <a href="/faq"><FaClipboardList /> FAQ</a>
                  <a href="/contact"><FaEnvelopeIcon /> Contact Us</a>
                  <a href="/terms"><FaFileContract /> Terms of Service</a>
                  <a href="/privacy"><FaShieldAlt /> Privacy Policy</a>
                </div>
              </div>

              <div className={styles.footerSection}>
                <h4>Contact Information</h4>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <FaMapMarkerAlt /> 123 3D Print Street, Digital City
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone /> +1 (555) 123-4567
                  </div>
                  <div className={styles.contactItem}>
                    <FaEnvelopeIcon /> support@3dstlmarket.com
                  </div>
                </div>
                <div className={styles.newsletter}>
                  <h4>Subscribe to Newsletter</h4>
                  <div className={styles.newsletterForm}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className={styles.newsletterInput}
                    />
                    <button className={styles.newsletterButton}>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <p>&copy; {new Date().getFullYear()} 3D STL Market. All rights reserved. | Made with <FaHeart style={{ color: '#ff7b00' }} /> by 3D Enthusiasts</p>
            </div>
          </footer>
          <Script id="tawk-script">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6795146b825083258e0b0c1b/1iif5fgsu';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </ReduxProvider>
      </body>
    </html>
  )
}
