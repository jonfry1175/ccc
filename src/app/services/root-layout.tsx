import type { ReactNode } from 'react'
import ServiceLayout from './layout'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ServiceLayout>{children}</ServiceLayout>
} 