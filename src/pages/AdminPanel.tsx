import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  Settings
} from 'lucide-react'

export default function AdminPanel() {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    { title: 'Total Users', value: '15,247', change: '+12%', icon: Users },
    { title: 'Active Offers', value: '1,856', change: '+8%', icon: ShoppingCart },
    { title: 'Total Revenue', value: '$2.5M', change: '+25%', icon: DollarSign },
    { title: 'Growth Rate', value: '18.5%', change: '+3.2%', icon: TrendingUp },
  ]

  const users = [
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex@example.com',
      role: 'trafficker',
      status: 'active',
      joinDate: '2024-01-15',
      totalSpent: '$12,450',
      lastActive: '2 hours ago',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      email: 'sarah@example.com',
      role: 'model-agency',
      status: 'active',
      joinDate: '2024-01-12',
      totalEarned: '$8,750',
      lastActive: '1 day ago',
      verified: true
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'trafficker',
      status: 'suspended',
      joinDate: '2024-01-10',
      totalSpent: '$3,200',
      lastActive: '5 days ago',
      verified: false
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      role: 'model-agency',
      status: 'pending',
      joinDate: '2024-01-20',
      totalEarned: '$0',
      lastActive: '1 hour ago',
      verified: false
    }
  ]

  const offers = [
    {
      id: 1,
      title: 'Premium OnlyFans Traffic - US/UK',
      seller: 'TopTraffic Pro',
      price: '$12.50',
      status: 'approved',
      category: 'Adult',
      createdAt: '2024-01-18',
      sales: 245,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Fansly Targeted Campaign - EU',
      seller: 'EuroTraffic',
      price: '$8.75',
      status: 'pending',
      category: 'Adult',
      createdAt: '2024-01-20',
      sales: 0,
      rating: 0
    },
    {
      id: 3,
      title: 'Social Media Boost Package',
      seller: 'SocialBoost',
      price: '$15.00',
      status: 'rejected',
      category: 'Social',
      createdAt: '2024-01-19',
      sales: 0,
      rating: 0
    }
  ]

  const transactions = [
    {
      id: 1,
      user: 'Alex Thompson',
      type: 'purchase',
      amount: '$250.00',
      status: 'completed',
      date: '2024-01-20',
      offer: 'Premium OnlyFans Traffic'
    },
    {
      id: 2,
      user: 'Sarah Martinez',
      type: 'withdrawal',
      amount: '$180.50',
      status: 'pending',
      date: '2024-01-19',
      method: 'USDT'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      type: 'purchase',
      amount: '$95.25',
      status: 'failed',
      date: '2024-01-18',
      offer: 'Social Media Boost'
    }
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-traffic-green/10 text-traffic-green border-traffic-green/20',
      pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      suspended: 'bg-red-500/10 text-red-500 border-red-500/20',
      approved: 'bg-traffic-green/10 text-traffic-green border-traffic-green/20',
      rejected: 'bg-red-500/10 text-red-500 border-red-500/20',
      completed: 'bg-traffic-green/10 text-traffic-green border-traffic-green/20',
      failed: 'bg-red-500/10 text-red-500 border-red-500/20'
    }
    return variants[status as keyof typeof variants] || 'bg-muted text-muted-foreground'
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'approved':
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-traffic-green" />
      case 'suspended':
      case 'rejected':
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />
      case 'pending':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <Badge className="bg-traffic-purple/10 text-traffic-purple border-traffic-purple/20">
              Administrator
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Manage users, offers, and platform settings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-traffic-green">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Manage user accounts and permissions
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-traffic-purple to-traffic-green rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{user.name}</span>
                            {user.verified && (
                              <CheckCircle className="w-4 h-4 text-traffic-green" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                            <span>Role: {user.role}</span>
                            <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
                            <span>Last active: {user.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">
                            {user.totalSpent || user.totalEarned}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {user.totalSpent ? 'Total Spent' : 'Total Earned'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(user.status)}
                          <Badge className={`text-xs ${getStatusBadge(user.status)}`}>
                            {user.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Offers Tab */}
          <TabsContent value="offers" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Offer Management</CardTitle>
                    <CardDescription>
                      Review and moderate traffic offers
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offers.map((offer) => (
                    <div key={offer.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{offer.title}</span>
                          <Badge variant="outline" className="text-xs">
                            {offer.category}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          By {offer.seller} • Created {new Date(offer.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                          <span>Price: {offer.price}</span>
                          <span>Sales: {offer.sales}</span>
                          {offer.rating > 0 && <span>Rating: {offer.rating}/5</span>}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(offer.status)}
                          <Badge className={`text-xs ${getStatusBadge(offer.status)}`}>
                            {offer.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Transaction Management</CardTitle>
                    <CardDescription>
                      Monitor and approve transactions
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{transaction.user}</span>
                          <Badge variant="outline" className="text-xs">
                            {transaction.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.offer || transaction.method} • {new Date(transaction.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{transaction.amount}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(transaction.status)}
                          <Badge className={`text-xs ${getStatusBadge(transaction.status)}`}>
                            {transaction.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Commission Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Configure platform commission rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Trafficker Commission (%)</label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Model/Agency Commission (%)</label>
                    <Input type="number" defaultValue="10" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Referral Bonus (%)</label>
                    <Input type="number" defaultValue="2" />
                  </div>
                  <Button className="w-full bg-traffic-purple hover:bg-traffic-purple/90">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Statistics</CardTitle>
                  <CardDescription>
                    Real-time platform metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Active Users (24h)</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pending Approvals</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Transactions</span>
                      <span className="font-medium">45,678</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Platform Revenue</span>
                      <span className="font-medium text-traffic-green">$125,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}