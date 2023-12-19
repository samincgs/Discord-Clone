'use client';

import { Plus } from 'lucide-react';
import ActionTooltip from '@/components/ActionTooltip';

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip side='right' align='center' label='Add a server'>
        <button className='group flex items-center'>
          <div className='w-[48px] h-[48px] rounded-full bg-background dark:bg-neutral-700 flex items-center justify-center transition-colors group-hover:bg-emerald-500  '>
            <Plus
              className='text-emerald-500 transition group-hover:text-white'
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
export default NavigationAction;
