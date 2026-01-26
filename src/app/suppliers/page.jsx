import React, { Suspense } from 'react'
import Suppliers from "@/src/app/suppliers/Suppliers"
import Container from '@/src/Components/Container'

const page = () => {
  return (
    <Suspense fallback={<Container><div>Wait for Suppliers...</div></Container>}>
      <Suppliers />
    </Suspense>
  )
}

export default page