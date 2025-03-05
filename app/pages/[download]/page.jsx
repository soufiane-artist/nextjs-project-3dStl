'use client';
import styles from '@/app/styles/Download.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import RelatedModels from '@/app/components/RelatedModels';
import AboutCults from '@/app/components/AboutCults';
import { useRouter,useParams } from 'next/navigation';

import axios from 'axios';

export default function Download() {
    const router = useRouter();
    const [currentImage, setCurrentImage] = useState(0);
    const [model, setModel] = useState();

    const { download } = useParams();

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



    useEffect(()=>{
        const getModel = async()=>{
            await axios.get(`http://localhost:2002/api/models/${download}`) // Ensure `id` is being used correctly
            .then((res)=>{
                setModel(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getModel()
    }, [download]); // Add `id` to the dependency array
    


    const handleDownload = () => {
        console.log('Redirecting to checkout...');
        router.push('/pages/checkout/' + download);
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
                            src={ model?.images[currentImage]}
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
                        {model?.images?.map((img, index) => (
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
                    <h1>{model?.title}</h1>
                    
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <i className="fas fa-heart"></i>
                            <span>{model?.likes} Likes</span>
                        </div>
                        <div className={styles.stat}>
                            <i className="fas fa-share"></i>
                            <span>{model?.shares} Shares</span>
                        </div>
                        <div className={styles.stat}>
                            <i className="fas fa-download"></i>
                            <span>{model?.downloads} Downloads</span>
                        </div>
                    </div>
                    <div className={styles.downloadSection}>
                        <button className={styles.downloadButton} onClick={handleDownload}>
                            PAY NOW
                            <span className={styles.price}>{model?.price.toFixed(2)} $</span>
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