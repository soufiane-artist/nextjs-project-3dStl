'use client';

import styles from '../styles/Contact.module.css';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have questions about our 3D models? We're here to help and would love to hear from you!
                    </p>
                </div>
                
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="subject" className={styles.label}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={styles.input}
                                placeholder="What's your message about?"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder="Tell us about your project or question..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}