'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  const handleDownload = () => {
    router.push('/');
  };

  return (
    <div onClick={handleDownload} className="logo">
      <Image 
        src="/favicon.ico"
        alt="3D STL Market Logo"
        width={32}
        height={32}
        className="logo-icon"
      />
      3D STL Market
    </div>
  );
} 