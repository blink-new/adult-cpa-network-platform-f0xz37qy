import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Eye,
  Plus,
  MessageCircle,
  BarChart3,
  Target
} from 'lucide-react'

interface DashboardProps {
  userRole: 'trafficker' | 'model-agency'
}

export default function Dashboard({ userRole }: DashboardProps) {
  const isTrafficker = userRole === 'trafficker'

  const stats = isTrafficker ? [
    { title: 'Total Spent', value: '$12,450', change: '+12%', icon: DollarSign },
    { title: 'Active Campaigns', value: '8', change: '+2', icon: Target },
    { title: 'Total Clicks', value: '45.2K', change: '+18%', icon: Eye },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: TrendingUp },
  ] : [
    { title: 'Total Earned', value: '$8,750', change: '+15%', icon: DollarSign },
    { title: 'Active Offers', value: '5', change: '+1', icon: Target },
    { title: 'Total Subscribers', value: '1.2K', change: '+25%', icon: Users },
    { title: 'Avg. LTV', value: '$45.60', change: '+8%', icon: TrendingUp },
  ]

  const recentActivity = isTrafficker ? [
    { action: 'Purchased traffic from TopTraffic Pro', amount: '$250.00', time: '2 hours ago' },
    { action: 'Campaign "Summer Promo" completed', amount: '+$180.50', time: '5 hours ago' },
    { action: 'New message from EuroTraffic', amount: '', time: '1 day ago' },
  ] : [
    { action: 'Traffic sold to Premium Buyer', amount: '+$320.00', time: '1 hour ago' },
    { action: 'New subscriber from Campaign #12', amount: '+$12.50', time: '3 hours ago' },
    { action: 'Offer "EU Premium" approved', amount: '', time: '6 hours ago' },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold">
              {isTrafficker ? 'Trafficker Dashboard' : 'Model/Agency Dashboard'}
            </h1>
            <Badge className="bg-traffic-green/10 text-traffic-green border-traffic-green/20">
              {isTrafficker ? 'Buyer' : 'Supplier'}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {isTrafficker 
              ? 'Manage your traffic campaigns and track performance' 
              : 'Monitor your offers and subscriber growth'
            }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  {isTrafficker 
                    ? 'Manage your traffic buying activities' 
                    : 'Manage your traffic selling activities'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-traffic-purple hover:bg-traffic-purple/90 h-auto p-4 flex flex-col items-start">
                    <Plus className="w-5 h-5 mb-2" />
                    <span className="font-medium">
                      {isTrafficker ? 'Buy Traffic' : 'Create Offer'}
                    </span>
                    <span className="text-xs opacity-90">
                      {isTrafficker ? 'Browse marketplace' : 'List your traffic'}
                    </span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <BarChart3 className="w-5 h-5 mb-2" />
                    <span className="font-medium">View Analytics</span>
                    <span className="text-xs opacity-70">Detailed reports</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <MessageCircle className="w-5 h-5 mb-2" />
                    <span className="font-medium">Messages</span>
                    <span className="text-xs opacity-70">3 unread</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <DollarSign className="w-5 h-5 mb-2" />
                    <span className="font-medium">Payouts</span>
                    <span className="text-xs opacity-70">Manage payments</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>
                  {isTrafficker ? 'Campaign performance over time' : 'Subscriber growth and earnings'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Chart will be implemented here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Balance Card */}
            <Card>
              <CardHeader>
                <CardTitle>Account Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-traffic-green mb-2">$2,450.00</div>
                <p className="text-sm text-muted-foreground mb-4">Available balance</p>
                <div className="space-y-2">
                  <Button size="sm" className="w-full bg-traffic-green hover:bg-traffic-green/90">
                    {isTrafficker ? 'Add Funds' : 'Withdraw'}
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    View Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex flex-col space-y-1 pb-3 border-b border-border last:border-0">
                      <div className="text-sm">{activity.action}</div>
                      <div className="flex justify-between items-center">
                        {activity.amount && (
                          <span className={`text-sm font-medium ${
                            activity.amount.startsWith('+') ? 'text-traffic-green' : 'text-foreground'
                          }`}>
                            {activity.amount}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Messages Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 bg-traffic-purple rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-medium">TP</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">TopTraffic Pro</p>
                      <p className="text-xs text-muted-foreground truncate">
                        New premium offer available...
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-traffic-green rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-traffic-green rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-medium">ET</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">EuroTraffic</p>
                      <p className="text-xs text-muted-foreground truncate">
                        Campaign results are in...
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Messages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}