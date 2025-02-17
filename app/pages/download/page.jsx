'use client';
import styles from '@/app/styles/Download.module.css';
import Image from 'next/image';
import { useState } from 'react';
import RelatedModels from '@/app/components/RelatedModels';
import AboutCults from '@/app/components/AboutCults';
import { useRouter } from 'next/navigation';

export default function Download() {
    const router = useRouter();
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif',
        'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif',
        'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif',
        'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif',
        'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif',
    ];
    
    const productDetails = {
        title: 'T-60 POWER ARMOR HELMET',
        price: '4.99 $',
        likes: 877,
        shares: 27,
        downloads: 23,
        author: 'PETERRETROPRINTS',
        publishDate: '2024-01-25',
        designNumber: '2938197',
        description: 'Highly detailed and functional T-60 Power Armor helmet! Experience design includes moveable parts/visor/scope, just like in the TV show, and a working headlight that turns off with a push of a button.',
        tags: ['FALLOUT POWER ARMOR', 'FALLOUT', 'FALLOUT COSPLAY', 'POWER ARMOR HELMET']
    };

    const handleDownload = () => {
        console.log('Redirecting to checkout...');
        router.push('/pages/checkout');
    };

    const handleImageClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <>
            <div className={styles.productContainer}>
                <div className={styles.productGallery}>
                    <div className={styles.mainImage}>
                        <img
                            src={images[currentImage]}
                            alt={productDetails.title}
                            style={{ 
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                backgroundColor: '#f5f5f5'
                            }}
                        />
                    </div>
                    <div className={styles.thumbnails}>
                        {images.map((img, index) => (
                            <div 
                                key={index} 
                                className={`${styles.thumbnail} ${currentImage === index ? styles.active : ''}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <h1>{productDetails.title}</h1>
                    
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <i className="fas fa-heart"></i>
                            <span>{productDetails.likes} Likes</span>
                        </div>
                        <div className={styles.stat}>
                            <i className="fas fa-share"></i>
                            <span>{productDetails.shares} Shares</span>
                        </div>
                        <div className={styles.stat}>
                            <i className="fas fa-download"></i>
                            <span>{productDetails.downloads} Downloads</span>
                        </div>
                    </div>
                    <div className={styles.downloadSection}>
                        <button className={styles.downloadButton} onClick={handleDownload}>
                            DOWNLOAD
                            <span className={styles.price}>{productDetails.price}</span>
                        </button>
                    </div>
          
                    <div className={styles.productDetails}>
                        <div className={styles.detail}>
                            <span>PUBLICATION DATE:</span>
                            <span>{productDetails.publishDate}</span>
                        </div>
                        <div className={styles.detail}>
                            <span>DESIGN NUMBER:</span>
                            <span>{productDetails.designNumber}</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <h2>3D MODEL DESCRIPTION</h2>
                        <p>{productDetails.description}</p>
                    </div>
                    <div className={styles.authorInfo}>
                        <div className={styles.authorProfile}>
                            <Image
                                src="/author-avatar.jpg"
                                alt="Author"
                                width={50}
                                height={50}
                                className={styles.avatar}
                            />
                            <div className={styles.authorDetails}>
                                <h3>{productDetails.author}</h3>
                                <button className={styles.followButton}>FOLLOW</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tags}>
                        {productDetails.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
            
            <RelatedModels />
            <AboutCults />
        </>
    );
}