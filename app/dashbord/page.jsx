'use client';
import { useState, useEffect } from 'react';
import styles from '@/app/styles/Dashboard.module.css';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [productImages, setProductImages] = useState([]);
    const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
    const [productDetails, setProductDetails] = useState({
        title: '',
        price: '',
        description: '',
        tags: [],
        category: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    // Mock statistics data (you would typically fetch this from your backend)
    const statistics = {
        totalProducts: 156,
        totalDownloads: 2389,
        totalRevenue: '$4,567',
        activeUsers: 892
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setProductImages(files);
        
        // Create preview URLs for the images
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setImagePreviewUrls(previewUrls);
    };

    // Cleanup preview URLs when component unmounts
    useEffect(() => {
        return () => {
            // Cleanup the preview URLs to avoid memory leaks
            imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
        };
    }, [imagePreviewUrls]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!productDetails.title.trim()) {
            toast.error('Please enter a product title');
            return;
        }
        if (!productDetails.price || productDetails.price <= 0) {
            toast.error('Please enter a valid price');
            return;
        }
        if (!productDetails.description.trim()) {
            toast.error('Please enter a product description');
            return;
        }
        if (productDetails.tags.length === 0) {
            toast.error('Please add at least one tag');
            return;
        }
        if (productImages.length === 0) {
            toast.error('Please select at least one image');
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        
        // Append product details
        formData.append('title', productDetails.title);
        formData.append('price', productDetails.price);
        formData.append('description', productDetails.description);
        formData.append('tags', productDetails.tags);
        formData.append('category', productDetails.category);
        
        // Append images
        productImages.forEach((image, index) => {
            formData.append('images', image);
        });
    
        try {
            const response = await axios.post('http://localhost:2002/api/models/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Product uploaded successfully!');
            // Reset form
            setProductDetails({
                title: '',
                price: '',
                description: '',
                tags: [],
                category: '',
            });
            setProductImages([]);
            setImagePreviewUrls([]);
            
        } catch (error) {
            toast.error(error.response?.data?.message || 'Upload failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Statistics Section */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Total Products</h3>
                    <p>{statistics.totalProducts}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Total Downloads</h3>
                    <p>{statistics.totalDownloads}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Total Revenue</h3>
                    <p>{statistics.totalRevenue}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Active Users</h3>
                    <p>{statistics.activeUsers}</p>
                </div>
            </div>

            {/* Upload Form */}
            <div className={styles.uploadSection}>
                <h2>Upload New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Product Title</label>
                        <input 
                            type="text"
                            value={productDetails.title}
                            onChange={(e) => setProductDetails({...productDetails, title: e.target.value})}
                            placeholder="Enter product title"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Price ($)</label>
                        <input 
                            type="number"
                            step="0.01"
                            value={productDetails.price}
                            onChange={(e) => setProductDetails({...productDetails, price: e.target.value})}
                            placeholder="Enter price"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Description</label>
                        <textarea 
                            value={productDetails.description}
                            onChange={(e) => setProductDetails({...productDetails, description: e.target.value})}
                            placeholder="Enter product description"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Tags (comma-separated)</label>
                        <input 
                            type="text"
                            onChange={(e) => setProductDetails({
                                ...productDetails, 
                                tags: e.target.value.split(',').map(tag => tag.trim())
                            })}
                            placeholder="Enter tags, separated by commas"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>category (comma-separated)</label>
                        <input 
                            type="text"
                            onChange={(e) => setProductDetails({
                                ...productDetails, 
                                category: e.target.value.split(',').map(tag => tag.trim())
                            })}
                            placeholder="Enter category, separated by commas"
                        />
                    </div>

                    <div className={styles.imageUpload}>
                        <label>Product Images</label>
                        <input 
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <div className={styles.imagePreview}>
                            {imagePreviewUrls.map((previewUrl, index) => (
                                <div key={index} className={styles.previewImage}>
                                    <Image 
                                        src={previewUrl}
                                        alt={`Preview ${index + 1}`}
                                        width={100}
                                        height={100}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? (
                            <div className={styles.spinner}></div>
                        ) : (
                            'Upload Product'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}