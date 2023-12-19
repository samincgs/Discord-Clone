'use client';

import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

interface FileUploadProps {
  endpoint: 'serverImage' | 'messageFile';
  value: string;
  onChange: (url?: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  endpoint,
  value,
  onChange,
}) => {
  if (value) {
    if (endpoint === 'serverImage') {
      return (
        <div className='relative w-24 h-24'>
          <Image
            src={value}
            alt='Server Image'
            fill
            className='rounded-full object-cover'
          />
          <button
            type='button'
            className='absolute rounded-full bg-rose-500 text-white p-1 top-1 right-1 shadow-sm'
            onClick={() => onChange('')}
          >
            <X className='w-4 h-4' />
          </button>
        </div>
      );
    }
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0]?.url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
export default FileUpload;
