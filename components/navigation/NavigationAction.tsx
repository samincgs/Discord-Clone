'use client';

import { Plus } from 'lucide-react';

const NavigationAction = () => {
  return (
    <div>
      <button className='group flex items-center'>
        <div className='w-[48px] h-[48px] rounded-full bg-background dark:bg-neutral-700 flex items-center justify-center transition-all group-hover:bg-emerald-500  '>
          <Plus
            className='text-emerald-500 transition group-hover:text-white'
            size={25}
          />
        </div>
      </button>
    </div>
  );
};
export default NavigationAction;
