import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  DollarSign,
  Star,
  Globe,
  Shield,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const featuredOffers = [
    {
      id: 1,
      title: "Premium OnlyFans Traffic - US/UK",
      price: "$12.50",
      unit: "per subscriber",
      rating: 4.8,
      seller: "TopTraffic Pro",
      tags: ["High Converting", "Tier 1", "Adult"],
      description: "High-quality traffic from premium sources with 85% retention rate"
    },
    {
      id: 2,
      title: "Fansly Targeted Campaign - EU",
      price: "$8.75",
      unit: "per referral",
      rating: 4.9,
      seller: "EuroTraffic",
      tags: ["Targeted", "EU GEO", "Premium"],
      description: "Targeted European traffic with verified conversion tracking"
    },
    {
      id: 3,
      title: "Social Media Boost Package",
      price: "$15.00",
      unit: "per 100 clicks",
      rating: 4.7,
      seller: "SocialBoost",
      tags: ["Social", "Viral", "Engagement"],
      description: "Viral social media campaigns with high engagement rates"
    }
  ]

  const workflowSteps = [
    {
      step: 1,
      title: "Register",
      description: "Create your account and choose your role as trafficker or model/agency",
      icon: Users
    },
    {
      step: 2,
      title: "Drive Traffic",
      description: "Browse offers, create campaigns, or list your traffic sources",
      icon: TrendingUp
    },
    {
      step: 3,
      title: "Get Paid",
      description: "Earn commissions with automatic payouts in crypto or fiat",
      icon: DollarSign
    }
  ]

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with traffickers and models worldwide"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Crypto and traditional payment methods supported"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Track performance with detailed conversion metrics"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-traffic-lighter via-background to-traffic-gray py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-traffic-purple/10 text-traffic-purple border-traffic-purple/20 mb-4">
              #1 Adult CPA Network
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-traffic-purple to-traffic-green bg-clip-text text-transparent">
              Buy and Sell Traffic for OnlyFans/Fansly Models
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The premier marketplace connecting traffickers with OnlyFans and Fansly creators. 
              Drive high-converting traffic and maximize your earnings with our advanced CPA network.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-traffic-purple hover:bg-traffic-purple/90 text-white px-8 py-3"
              asChild
            >
              <Link to="/dashboard">
                Become a Buyer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-traffic-green text-traffic-green hover:bg-traffic-green hover:text-black px-8 py-3"
              asChild
            >
              <Link to="/dashboard">
                Become a Supplier
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-traffic-green mb-2">$2.5M+</div>
              <div className="text-muted-foreground">Total Payouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-traffic-purple mb-2">15K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-traffic-green mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and begin earning with our proven system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.step} className="text-center border-border/50 hover:border-traffic-purple/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-traffic-purple to-traffic-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-traffic-purple mb-2">Step {step.step}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Offers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Top-performing traffic offers from verified sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOffers.map((offer) => (
              <Card key={offer.id} className="border-border/50 hover:border-traffic-purple/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{offer.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {offer.seller}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-traffic-green">{offer.price}</div>
                      <div className="text-sm text-muted-foreground">{offer.unit}</div>
                    </div>
                    <Button className="bg-traffic-purple hover:bg-traffic-purple/90">
                      View Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/marketplace">
                View All Offers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TrafficHub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for professionals who demand results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-traffic-purple to-traffic-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-traffic-purple to-traffic-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Traffic Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful traffickers and models earning with TrafficHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
              <Link to="/dashboard">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-traffic-purple px-8 py-3" asChild>
              <Link to="/blog">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}