'use client';

import { useEffect, useState } from 'react';
import CreateServerModal from '@/components/modals/CreateServerModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <CreateServerModal />
    </>
  );
};
export default ModalProvider;
