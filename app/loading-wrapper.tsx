'use client'

import { useEffect, useState } from 'react'
import Loader from '@/components/loader'

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500) // simulate loading (or hook into actual loading logic)

    return () => clearTimeout(timeout)
  }, [])

  if (loading) return <Loader />
  return <>{children}</>
}
