'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect } from 'react'

export default function VisitConversionTracker(): React.ReactNode {    
    useEffect(() => {
        sendGTMEvent({
            event: 'conversion',
            'send_to': 'AW-11565537272/W0gdCLmEkIwaEPiv8Ior'
        })
    }, [])


    return null
}
