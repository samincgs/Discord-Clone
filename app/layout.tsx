import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

import './globals.css';
import ModalProvider from '@/components/providers/ModalProvider';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord Clone',
  description:
    'This is a fully-featured discord clone crafted for immersive communication within communities. Explore text channels, voice chats, and more on this dynamic platform designed for vibrant community interactions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='discord-theme'
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
