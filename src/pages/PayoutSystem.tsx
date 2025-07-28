import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Bitcoin,
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter
} from 'lucide-react'

export default function PayoutSystem() {
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [selectedCrypto, setSelectedCrypto] = useState('usdt')
  const [walletAddress, setWalletAddress] = useState('')

  const cryptoOptions = [
    { id: 'usdt', name: 'USDT (Tether)', symbol: 'USDT', fee: '1%', minAmount: '$10' },
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', fee: '0.5%', minAmount: '$25' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', fee: '0.8%', minAmount: '$20' },
  ]

  const stats = [
    { title: 'Available Balance', value: '$2,450.00', change: '+$320.50', icon: DollarSign, color: 'text-traffic-green' },
    { title: 'Pending Payouts', value: '$180.00', change: '2 pending', icon: Clock, color: 'text-yellow-500' },
    { title: 'Total Earned', value: '$15,750.00', change: '+12%', icon: TrendingUp, color: 'text-traffic-purple' },
    { title: 'This Month', value: '$1,890.00', change: '+25%', icon: Calendar, color: 'text-traffic-green' },
  ]

  const transactions = [
    {
      id: 1,
      type: 'withdrawal',
      amount: -250.00,
      currency: 'USDT',
      status: 'completed',
      date: '2024-01-20',
      txHash: '0x1234...5678',
      fee: 2.50,
      description: 'Crypto withdrawal to wallet'
    },
    {
      id: 2,
      type: 'earning',
      amount: 180.50,
      currency: 'USD',
      status: 'completed',
      date: '2024-01-19',
      description: 'Commission from TopTraffic Pro'
    },
    {
      id: 3,
      type: 'earning',
      amount: 95.25,
      currency: 'USD',
      status: 'completed',
      date: '2024-01-18',
      description: 'Traffic sale to Premium Buyer'
    },
    {
      id: 4,
      type: 'withdrawal',
      amount: -150.00,
      currency: 'BTC',
      status: 'pending',
      date: '2024-01-17',
      fee: 0.75,
      description: 'Crypto withdrawal to wallet'
    },
    {
      id: 5,
      type: 'earning',
      amount: 320.00,
      currency: 'USD',
      status: 'completed',
      date: '2024-01-16',
      description: 'Bulk traffic sale'
    },
    {
      id: 6,
      type: 'withdrawal',
      amount: -500.00,
      currency: 'USDT',
      status: 'completed',
      date: '2024-01-15',
      txHash: '0xabcd...efgh',
      fee: 5.00,
      description: 'Crypto withdrawal to wallet'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-traffic-green" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-traffic-green/10 text-traffic-green border-traffic-green/20',
      pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      failed: 'bg-red-500/10 text-red-500 border-red-500/20'
    }
    return variants[status as keyof typeof variants] || 'bg-muted text-muted-foreground'
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Payout System</h1>
          <p className="text-muted-foreground">
            Manage your earnings and withdraw funds via crypto or traditional methods
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
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Withdrawal Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5" />
                  <span>Withdraw Funds</span>
                </CardTitle>
                <CardDescription>
                  Withdraw your earnings to crypto wallets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Amount (USD)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Available: $2,450.00
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cryptocurrency</label>
                  <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptoOptions.map((crypto) => (
                        <SelectItem key={crypto.id} value={crypto.id}>
                          <div className="flex items-center space-x-2">
                            <Bitcoin className="w-4 h-4" />
                            <span>{crypto.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedCrypto && (
                    <div className="mt-2 p-2 bg-muted/20 rounded text-xs">
                      <div className="flex justify-between">
                        <span>Fee:</span>
                        <span>{cryptoOptions.find(c => c.id === selectedCrypto)?.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Min Amount:</span>
                        <span>{cryptoOptions.find(c => c.id === selectedCrypto)?.minAmount}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Wallet Address</label>
                  <Input
                    placeholder="Enter your wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                </div>

                <Button className="w-full bg-traffic-green hover:bg-traffic-green/90">
                  <Wallet className="w-4 h-4 mr-2" />
                  Request Withdrawal
                </Button>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Withdrawals are processed within 24 hours</p>
                  <p>• Minimum withdrawal amount varies by currency</p>
                  <p>• Network fees apply for crypto withdrawals</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Commission Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Traffic Sales</span>
                    <span className="font-medium">$1,250.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Referral Bonus</span>
                    <span className="font-medium">$180.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Performance Bonus</span>
                    <span className="font-medium">$95.25</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-medium">
                    <span>Total This Month</span>
                    <span className="text-traffic-green">$1,525.75</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>
                      View all your earnings and withdrawals
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="earnings">Earnings</TabsTrigger>
                    <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-6">
                    <div className="space-y-4">
                      {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                              {transaction.type === 'earning' ? (
                                <ArrowDownRight className="w-5 h-5 text-traffic-green" />
                              ) : (
                                <ArrowUpRight className="w-5 h-5 text-traffic-purple" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{transaction.description}</div>
                              <div className="text-sm text-muted-foreground flex items-center space-x-2">
                                <span>{new Date(transaction.date).toLocaleDateString()}</span>
                                {getStatusIcon(transaction.status)}
                                <Badge className={`text-xs ${getStatusBadge(transaction.status)}`}>
                                  {transaction.status}
                                </Badge>
                              </div>
                              {transaction.txHash && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  TX: {transaction.txHash}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-medium ${
                              transaction.amount > 0 ? 'text-traffic-green' : 'text-foreground'
                            }`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.currency}
                            </div>
                            {transaction.fee && (
                              <div className="text-xs text-muted-foreground">
                                Fee: ${transaction.fee.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="earnings" className="mt-6">
                    <div className="space-y-4">
                      {transactions.filter(t => t.type === 'earning').map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-traffic-green/10 flex items-center justify-center">
                              <ArrowDownRight className="w-5 h-5 text-traffic-green" />
                            </div>
                            <div>
                              <div className="font-medium">{transaction.description}</div>
                              <div className="text-sm text-muted-foreground">
                                {new Date(transaction.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-traffic-green">
                              +${transaction.amount.toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.currency}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="withdrawals" className="mt-6">
                    <div className="space-y-4">
                      {transactions.filter(t => t.type === 'withdrawal').map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-traffic-purple/10 flex items-center justify-center">
                              <ArrowUpRight className="w-5 h-5 text-traffic-purple" />
                            </div>
                            <div>
                              <div className="font-medium">{transaction.description}</div>
                              <div className="text-sm text-muted-foreground flex items-center space-x-2">
                                <span>{new Date(transaction.date).toLocaleDateString()}</span>
                                {getStatusIcon(transaction.status)}
                                <Badge className={`text-xs ${getStatusBadge(transaction.status)}`}>
                                  {transaction.status}
                                </Badge>
                              </div>
                              {transaction.txHash && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  TX: {transaction.txHash}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              -${Math.abs(transaction.amount).toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.currency}
                            </div>
                            {transaction.fee && (
                              <div className="text-xs text-muted-foreground">
                                Fee: ${transaction.fee.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}