import CreateAccountDrawer from '@/components/account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className="px-5">
      {/* Budget progress */}

      {/* Overview */}

      {/* Account Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CreateAccountDrawer>
          <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground text-center h-full">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  )
}

export default DashboardPage