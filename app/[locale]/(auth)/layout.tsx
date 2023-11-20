import React from 'react'

// const locales = ['en', 'de', 'es', 'jp'];
// locale={locale}

export default function AuthLayout({children, params: {locale}}: {children: React.ReactNode, params: any}) {
  return (
    <div>{children}</div>
  )
}