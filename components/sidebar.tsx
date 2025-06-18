"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Car, CheckSquare, User, AlertTriangle, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: Home, roles: ["User", "Approver", "Driver", "Admin"] },
	{ name: "Request Vehicle", href: "/request", icon: Car, roles: ["User", "Approver", "Driver", "Admin"] },
	{ name: "Approvals", href: "/approvals", icon: CheckSquare, roles: ["Approver", "Admin"] },
	{ name: "Driver Profiles", href: "/drivers", icon: User, roles: ["Approver", "Admin"] },
	{ name: "Vehicles", href: "/vehicles", icon: Car, roles: ["Approver", "Admin"] },
	{ name: "Issues", href: "/issues", icon: AlertTriangle, roles: ["User", "Approver", "Driver", "Admin"] },
	{ name: "Admin", href: "/admin", icon: Settings, roles: ["Admin"] },
]

interface SidebarProps {
	userRole?: string
}

export function Sidebar({ userRole = "User" }: SidebarProps) {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const filteredNavigation = navigation.filter((item) => item.roles.includes(userRole as any))

	const SidebarContent = () => (
		<div className="flex h-full flex-col bg-white">
			<div className="flex h-16 items-center justify-between px-6 border-b border-gray-200">
				<Link href="/dashboard" className="flex items-center gap-2">
					<img
						className="h-8 w-auto"
						src="/placeholder-logo.svg"
						alt="Vehicle Booking System"
					/>
					{/* <span className="text-lg font-semibold">Vehicle Booking</span> */}
				</Link>
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<X className="h-5 w-5" />
				</Button>
			</div>

			<nav className="flex-1 overflow-y-auto px-3 py-4">
				<div className="space-y-1">
					{filteredNavigation.map((item) => {
						const isActive = pathname === item.href
						return (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
									isActive
										? "bg-gray-100 text-gray-900"
										: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
								)}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<item.icon className="h-5 w-5 flex-shrink-0" />
								{item.name}
							</Link>
						)
					})}
				</div>
			</nav>

			<div className="border-t border-gray-200 p-4">
				<Button
					variant="ghost"
					className="w-full justify-start gap-x-3 px-3"
					onClick={() => {
						localStorage.removeItem("user")
						window.location.href = "/login"
					}}
				>
					<LogOut className="h-5 w-5" />
					Log out
				</Button>
			</div>
		</div>
	)

	return (
		<>
			{/* Mobile menu button */}
			<Button
				variant="ghost"
				size="icon"
				className="fixed top-4 right-4 z-40 md:hidden"
				onClick={() => setIsMobileMenuOpen(true)}
			>
				<Menu className="h-5 w-5" />
			</Button>

			{/* Mobile sidebar */}
			{isMobileMenuOpen && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
					/>
					{/* Sidebar */}
					<div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-lg transition-transform md:hidden">
						<SidebarContent />
					</div>
				</>
			)}

			{/* Desktop sidebar */}
			<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
				<SidebarContent />
			</div>
		</>
	)
}
