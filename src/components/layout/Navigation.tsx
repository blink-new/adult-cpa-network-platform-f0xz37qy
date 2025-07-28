import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { 
  Home, 
  LayoutDashboard, 
  ShoppingCart, 
  BookOpen, 
  CreditCard, 
  Settings,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  userRole: 'trafficker' | 'model-agency'
  setUserRole: (role: 'trafficker' | 'model-agency') => void
}

export default function Navigation({ userRole, setUserRole }: NavigationProps) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/payouts', label: 'Payouts', icon: CreditCard },
    { path: '/admin', label: 'Admin', icon: Settings },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-traffic-purple to-traffic-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TH</span>
            </div>
            <span className="text-xl font-bold text-foreground">TrafficHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Role Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Role Toggle */}
            <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
              <Button
                variant={userRole === 'trafficker' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserRole('trafficker')}
                className="text-xs"
              >
                Trafficker
              </Button>
              <Button
                variant={userRole === 'model-agency' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserRole('model-agency')}
                className="text-xs"
              >
                Model/Agency
              </Button>
            </div>

            {/* Balance Badge */}
            <Badge variant="outline" className="bg-traffic-green/10 text-traffic-green border-traffic-green/20">
              $2,450.00
            </Badge>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}