'use client'

import { ThemeProvider } from 'next-themes';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Providers({children} : Props) {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}