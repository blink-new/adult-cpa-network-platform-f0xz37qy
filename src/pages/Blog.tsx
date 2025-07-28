import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { 
  Search, 
  Calendar, 
  User, 
  Heart, 
  MessageCircle,
  TrendingUp,
  BookOpen,
  Target,
  DollarSign
} from 'lucide-react'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'arbitrage', name: 'Arbitrage', icon: TrendingUp },
    { id: 'onlyfans-fansly', name: 'OnlyFans/Fansly', icon: Heart },
    { id: 'case-studies', name: 'Case Studies', icon: Target },
    { id: 'traffic-strategies', name: 'Traffic Strategies', icon: DollarSign },
  ]

  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to OnlyFans Traffic Arbitrage in 2024",
      excerpt: "Learn the most effective strategies for buying and selling OnlyFans traffic with proven ROI techniques that top affiliates use.",
      content: "Complete guide covering everything from traffic sources to conversion optimization...",
      category: "arbitrage",
      author: "TrafficHub Team",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      likes: 245,
      comments: 32,
      image: "/api/placeholder/400/240",
      featured: true,
      tags: ["OnlyFans", "Arbitrage", "ROI", "Traffic"]
    },
    {
      id: 2,
      title: "Case Study: How I Made $50K in 3 Months with Fansly Traffic",
      excerpt: "A detailed breakdown of a successful Fansly traffic campaign, including costs, conversions, and lessons learned.",
      content: "In this case study, I'll share exactly how I scaled from $0 to $50K...",
      category: "case-studies",
      author: "Alex Thompson",
      publishedAt: "2024-01-12",
      readTime: "12 min read",
      likes: 189,
      comments: 45,
      image: "/api/placeholder/400/240",
      featured: true,
      tags: ["Fansly", "Case Study", "Success", "Scaling"]
    },
    {
      id: 3,
      title: "Top 10 Traffic Sources for Adult Content in 2024",
      excerpt: "Discover the highest-converting traffic sources for adult content creators and how to leverage them effectively.",
      content: "The adult content industry continues to evolve, and so do the traffic sources...",
      category: "traffic-strategies",
      author: "Sarah Martinez",
      publishedAt: "2024-01-10",
      readTime: "6 min read",
      likes: 156,
      comments: 28,
      image: "/api/placeholder/400/240",
      featured: false,
      tags: ["Traffic Sources", "Adult Content", "Conversion"]
    },
    {
      id: 4,
      title: "OnlyFans vs Fansly: Which Platform Converts Better?",
      excerpt: "A comprehensive comparison of OnlyFans and Fansly from a traffic buyer's perspective, including conversion rates and user behavior.",
      content: "Both platforms have their strengths, but which one should you focus on?...",
      category: "onlyfans-fansly",
      author: "Mike Johnson",
      publishedAt: "2024-01-08",
      readTime: "10 min read",
      likes: 203,
      comments: 67,
      image: "/api/placeholder/400/240",
      featured: false,
      tags: ["OnlyFans", "Fansly", "Comparison", "Conversion"]
    },
    {
      id: 5,
      title: "Mobile Traffic Optimization: 5x Your Conversion Rates",
      excerpt: "Mobile traffic accounts for 70% of adult content consumption. Learn how to optimize your campaigns for mobile users.",
      content: "Mobile optimization is no longer optional in the adult traffic space...",
      category: "traffic-strategies",
      author: "Emma Wilson",
      publishedAt: "2024-01-05",
      readTime: "7 min read",
      likes: 134,
      comments: 19,
      image: "/api/placeholder/400/240",
      featured: false,
      tags: ["Mobile", "Optimization", "Conversion", "Strategy"]
    },
    {
      id: 6,
      title: "Building Long-term Relationships with Traffic Sellers",
      excerpt: "Why building relationships with quality traffic sellers is crucial for sustainable growth and better rates.",
      content: "The adult traffic industry thrives on relationships and trust...",
      category: "arbitrage",
      author: "David Chen",
      publishedAt: "2024-01-03",
      readTime: "5 min read",
      likes: 98,
      comments: 15,
      image: "/api/placeholder/400/240",
      featured: false,
      tags: ["Relationships", "Networking", "Business", "Growth"]
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">TrafficHub Blog</h1>
          <p className="text-muted-foreground">
            Expert insights, strategies, and case studies for adult traffic professionals
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 max-w-md"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="border-border/50 hover:border-traffic-purple/50 transition-all hover:shadow-lg overflow-hidden">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-traffic-purple/10 text-traffic-purple border-traffic-purple/20">
                        Featured
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === article.category)?.name}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-sm">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      <Button className="bg-traffic-purple hover:bg-traffic-purple/90">
                        Read Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <p className="text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="border-border/50 hover:border-traffic-purple/50 transition-all hover:shadow-lg overflow-hidden">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === article.category)?.name}
                    </Badge>
                    {article.featured && (
                      <Badge className="bg-traffic-green/10 text-traffic-green border-traffic-green/20 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{article.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}