import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
  return (
    <div className="px-5">
        <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent inline-block">
            Dashboard
        </h1>

        {/* Dashboard Page */}
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#2e82e8" />}>
            <DashboardPage />
        </Suspense>
    </div>
  )
}

export default DashboardLayout