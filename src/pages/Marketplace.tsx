import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { 
  Search, 
  Filter, 
  Star, 
  Globe, 
  TrendingUp,
  Users,
  Eye,
  MessageCircle
} from 'lucide-react'

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGeo, setSelectedGeo] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const offers = [
    {
      id: 1,
      title: "Premium OnlyFans Traffic - US/UK Tier 1",
      description: "High-quality traffic from premium sources with 85% retention rate. Verified conversions with detailed analytics.",
      price: "$12.50",
      unit: "per subscriber",
      rating: 4.8,
      reviews: 124,
      seller: "TopTraffic Pro",
      sellerRating: 4.9,
      tags: ["High Converting", "Tier 1", "Adult", "Premium"],
      geo: "US, UK, CA, AU",
      trafficType: "Social Media",
      stats: {
        totalSales: "2.5K",
        avgCTR: "3.2%",
        retention: "85%"
      },
      verified: true
    },
    {
      id: 2,
      title: "Fansly Targeted Campaign - European Market",
      description: "Targeted European traffic with verified conversion tracking and real-time optimization.",
      price: "$8.75",
      unit: "per referral",
      rating: 4.9,
      reviews: 89,
      seller: "EuroTraffic",
      sellerRating: 4.7,
      tags: ["Targeted", "EU GEO", "Premium", "Optimized"],
      geo: "DE, FR, IT, ES, NL",
      trafficType: "PPC",
      stats: {
        totalSales: "1.8K",
        avgCTR: "4.1%",
        retention: "78%"
      },
      verified: true
    },
    {
      id: 3,
      title: "Social Media Viral Boost Package",
      description: "Viral social media campaigns with high engagement rates and organic growth potential.",
      price: "$15.00",
      unit: "per 100 clicks",
      rating: 4.7,
      reviews: 156,
      seller: "SocialBoost",
      sellerRating: 4.8,
      tags: ["Social", "Viral", "Engagement", "Organic"],
      geo: "Worldwide",
      trafficType: "Social Media",
      stats: {
        totalSales: "3.2K",
        avgCTR: "2.8%",
        retention: "92%"
      },
      verified: true
    },
    {
      id: 4,
      title: "Adult Dating Traffic - Mobile Optimized",
      description: "Mobile-first traffic campaigns optimized for adult dating and cam sites with high conversion rates.",
      price: "$6.25",
      unit: "per signup",
      rating: 4.6,
      reviews: 67,
      seller: "MobileTraffic",
      sellerRating: 4.5,
      tags: ["Mobile", "Dating", "Cam Sites", "Optimized"],
      geo: "US, UK, DE",
      trafficType: "Mobile",
      stats: {
        totalSales: "950",
        avgCTR: "5.2%",
        retention: "65%"
      },
      verified: false
    },
    {
      id: 5,
      title: "Influencer Network - OnlyFans Promotion",
      description: "Network of verified influencers promoting OnlyFans content with authentic engagement.",
      price: "$20.00",
      unit: "per campaign",
      rating: 4.9,
      reviews: 203,
      seller: "InfluencerHub",
      sellerRating: 4.9,
      tags: ["Influencer", "Authentic", "Network", "Premium"],
      geo: "US, UK, CA",
      trafficType: "Influencer",
      stats: {
        totalSales: "4.1K",
        avgCTR: "6.8%",
        retention: "88%"
      },
      verified: true
    },
    {
      id: 6,
      title: "SEO Organic Traffic - Long-term Growth",
      description: "Sustainable organic traffic through SEO optimization and content marketing strategies.",
      price: "$4.50",
      unit: "per visitor",
      rating: 4.4,
      reviews: 45,
      seller: "SEOTraffic",
      sellerRating: 4.3,
      tags: ["SEO", "Organic", "Long-term", "Sustainable"],
      geo: "Worldwide",
      trafficType: "SEO",
      stats: {
        totalSales: "680",
        avgCTR: "1.9%",
        retention: "95%"
      },
      verified: true
    }
  ]

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offer.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesGeo = selectedGeo === 'all' || offer.geo.toLowerCase().includes(selectedGeo.toLowerCase())
    const matchesType = selectedType === 'all' || offer.trafficType.toLowerCase() === selectedType.toLowerCase()
    
    return matchesSearch && matchesGeo && matchesType
  })

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Traffic Marketplace</h1>
          <p className="text-muted-foreground">
            Discover high-converting traffic offers from verified sellers
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter Offers</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search offers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedGeo} onValueChange={setSelectedGeo}>
                <SelectTrigger>
                  <SelectValue placeholder="Geography" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="eu">Europe</SelectItem>
                  <SelectItem value="worldwide">Worldwide</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Traffic Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="social media">Social Media</SelectItem>
                  <SelectItem value="ppc">PPC</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="influencer">Influencer</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">$0 - $10</SelectItem>
                  <SelectItem value="medium">$10 - $20</SelectItem>
                  <SelectItem value="high">$20+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredOffers.length} of {offers.length} offers
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} className="border-border/50 hover:border-traffic-purple/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{offer.rating}</span>
                      <span className="text-xs text-muted-foreground">({offer.reviews})</span>
                    </div>
                    {offer.verified && (
                      <Badge className="bg-traffic-green/10 text-traffic-green border-traffic-green/20 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {offer.seller}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight mb-2">{offer.title}</CardTitle>
                <CardDescription className="text-sm">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {offer.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-medium">{offer.stats.totalSales}</div>
                    <div className="text-xs text-muted-foreground">Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{offer.stats.avgCTR}</div>
                    <div className="text-xs text-muted-foreground">Avg CTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{offer.stats.retention}</div>
                    <div className="text-xs text-muted-foreground">Retention</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Geography:</span>
                    <span>{offer.geo}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Type:</span>
                    <span>{offer.trafficType}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-traffic-green">{offer.price}</div>
                    <div className="text-sm text-muted-foreground">{offer.unit}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    <Button className="bg-traffic-purple hover:bg-traffic-purple/90">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredOffers.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Offers
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No offers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  )
}