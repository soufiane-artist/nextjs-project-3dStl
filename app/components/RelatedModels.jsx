'use client';
import styles from '@/app/styles/RelatedModels.module.css';
import Link from 'next/link';

const relatedModels = [
    {
        id: 1,
        title: 'Dragon Sculpture',
        price: '4.99 $',
        image: 'https://media0.giphy.com/media/Xmz9PLWph4djcFi9NG/giphy.gif?cid=6c09b952namdrxqfqxpbn1e0b07m3juzckk2q6v79zx0xrxu&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        likes: 234,
        author: 'DragonForge'
    },
    {
        id: 2,
        title: 'Medieval Sword',
        price: '3.99 $',
        image: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2020/04/11/706597/507672/stl_file_angel_with_flower_for_cnc_router_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_5205677_m.jpg',
        likes: 189,
        author: 'BlacksmithArt'
    },
    {
        id: 3,
        title: 'Fantasy Shield',
        price: '5.99 $',
        image: 'https://file.pixup3d.com/uploads/post_img/file/57776/x3_1000X1000_%E6%96%B0%E5%B9%B4%E9%BE%8D.gif',
        likes: 156,
        author: 'EpicProps'
    },
    {
        id: 4,
        title: 'Ancient Relic',
        price: '6.99 $',
        image: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2020/04/11/706597/507672/stl_file_angel_with_flower_for_cnc_router_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_5205677_m.jpg',
        likes: 312,
        author: 'ArtifactMaster'
    },
    {
        id: 5,
        title: 'Crystal Dragon',
        price: '7.99 $',
        image: 'https://file.pixup3d.com/uploads/post_img/file/57776/x3_1000X1000_%E6%96%B0%E5%B9%B4%E9%BE%8D.gif',
        likes: 423,
        author: 'CrystalForge'
    }
];

const RelatedModels = () => {
    return (
        <section className={styles.relatedModels}>
            <h2>Related Models</h2>
            <p className={styles.subtitle}>Discover more amazing 3D models</p>
            <div className={styles.modelGrid}>
                {relatedModels.map((model) => (
                    <Link href={`/model/${model.id}`} key={model.id} className={styles.modelCard}>
                        <div className={styles.imageContainer}>
                            <img
                                src={model.image}
                                alt={model.title}
                                className={styles.modelImage}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.modelInfo}>
                            <h3>{model.title}</h3>
                            <p className={styles.author}>by {model.author}</p>
                            <div className={styles.modelStats}>
                                <span className={styles.price}>{model.price}</span>
                                <span>❤️ {model.likes}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedModels;
