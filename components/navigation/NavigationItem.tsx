'use client';

import ActionTooltip from '@/components/ActionTooltip';
import { cn } from '@/lib/utils';
import { group } from 'console';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  name,
  imageUrl,
}) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side='right' align='center' label={name}>
      <button onClick={onClick} className='group relative flex items-center'>
        <div
          className={cn(
            'absolute left-0 bg-primary rounded-r-full transition-all w-[4px]',
            params?.serverId !== id && 'group-hover:h-[20px]',
            params?.serverId === id ? 'h-[36px]' : 'h-[8px]'
          )}
        />
        <div
          className={cn(
            'relative flex mx-3 h-[48px] w-[48px] rounded-full   overflow-hidden'
          )}
        >
          <Image src={imageUrl} alt='Server Image' fill />
        </div>
      </button>
    </ActionTooltip>
  );
};
export default NavigationItem;
