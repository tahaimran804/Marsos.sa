'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-[#2D5016]">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="flex gap-3 mt-6">
        <Link href="/" className="px-5 py-2 bg-[#2D5016] text-white rounded">
          Go Home
        </Link>
      </div>
    </div>
  )
}
