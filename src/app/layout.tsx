import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500' ,'600','700','800','900']

})

export const metadata: Metadata = {
  title: 'Portifolio | Renato',
  description: 'Renato Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type='image/ico' href="/favicon.ico" sizes='any' />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}