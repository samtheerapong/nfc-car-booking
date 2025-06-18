"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, CheckSquare, AlertTriangle, Calendar, TrendingUp } from "lucide-react"
import { getDashboardStats, mockBookingRequests, mockIssues } from "@/lib/mock-data"

interface User {
  name: string
  email: string
  role: string
  department: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [])

  // Redirect to login if no user is found
  if (!isLoading && !user) {
    redirect("/login")
  }

  // Don't render anything while checking authentication
  if (isLoading || !user) {
    return null
  }

  const dashboardStats = getDashboardStats()

  const stats = [
    {
      title: "Total Vehicles",
      value: dashboardStats.totalVehicles.toString(),
      description: `${dashboardStats.availableVehicles} available now`,
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Bookings",
      value: dashboardStats.activeBookings.toString(),
      description: `${dashboardStats.pendingApprovals} pending approval`,
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Pending Approvals",
      value: dashboardStats.pendingApprovals.toString(),
      description: "Requires attention",
      icon: CheckSquare,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Open Issues",
      value: dashboardStats.openIssues.toString(),
      description: "Active reports",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <DashboardLayout userRole={user.role}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Recent vehicle booking requests</CardDescription>
            </CardHeader>
            <CardContent>
              {mockBookingRequests.map((booking, index) => (
                <div key={index} className="mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Vehicle Request</div>
                    <div className="text-sm text-gray-600">Booking request</div>
                  </div>
                  <Badge
                    className={
                      booking.status === "Approved"
                        ? "ml-auto bg-green-100 text-green-800"
                        : booking.status === "Pending"
                        ? "ml-auto bg-yellow-100 text-yellow-800"
                        : "ml-auto bg-red-100 text-red-800"
                    }
                  >
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Issues</CardTitle>
              <CardDescription>Latest reported vehicle issues</CardDescription>
            </CardHeader>
            <CardContent>
              {mockIssues.map((issue, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        issue.priority === "High"
                          ? "bg-red-500"
                          : issue.priority === "Medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    />
                    <div className="font-semibold">Vehicle Issue</div>
                    <Badge variant="secondary" className="ml-auto">
                      {issue.priority}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 pl-6">
                    {issue.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
