'use client';

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
  return <div>FileUpload</div>;
};
export default FileUpload;
