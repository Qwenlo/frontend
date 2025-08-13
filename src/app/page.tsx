import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Bot, Brain, BarChart3, Users, Zap, Target, Globe } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-50/20 to-teal-50/30 dark:from-background dark:via-emerald-950/10 dark:to-teal-950/20">
      {/* Navigation */}
      <nav className="border-b border-emerald-100/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Qwenlo Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Qwenlo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#ai-features" className="text-muted-foreground hover:text-foreground transition-colors">AI Technology</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Lead Generation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              AI-Driven
            </span>{" "}
            Lead Generation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Revolutionize your digital presence with cutting-edge AI automation. 
            We combine intelligent lead generation, stunning web development, and 
            advanced marketing strategies to maximize your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions powered by artificial intelligence to accelerate your business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle>AI Lead Generation</CardTitle>
              <CardDescription>
                Automated systems that identify, score, and prioritize potential customers with advanced algorithms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time lead scoring models</li>
                <li>• Dynamic database management</li>
                <li>• Conversion probability analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <CardTitle>Digital Presence</CardTitle>
              <CardDescription>
                Stunning websites and mobile apps with conversion-optimized design and robust infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Modern web & mobile development</li>
                <li>• SEO optimization</li>
                <li>• Analytics integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-emerald-500" />
              </div>
              <CardTitle>AI Content Creation</CardTitle>
              <CardDescription>
                Industry-specific marketing videos and content generated with cutting-edge AI technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AI-generated marketing videos</li>
                <li>• Social media management</li>
                <li>• Performance analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-500" />
              </div>
              <CardTitle>Business Solutions</CardTitle>
              <CardDescription>
                Custom CRM & ERP systems tailored to your business needs with automated workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom CRM & ERP development</li>
                <li>• Web & mobile applications</li>
                <li>• Automated business processes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle>Social Media Bots</CardTitle>
              <CardDescription>
                Fine-tuned AI bots for multi-platform engagement with intelligent behavioral analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-platform bot networks</li>
                <li>• Behavioral analysis</li>
                <li>• Anti-detection systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-emerald-50/30 dark:to-emerald-950/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Comprehensive performance tracking with real-time data processing and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time analytics dashboard</li>
                <li>• Conversion tracking</li>
                <li>• Performance optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Technology Section */}
      <section id="ai-features" className="bg-gradient-to-r from-emerald-50/30 via-teal-50/20 to-emerald-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-emerald-950/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Infrastructure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge AI technology stack powers everything we do, from content generation to lead analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 bg-gradient-to-br from-card to-emerald-50/40 dark:to-emerald-950/30 shadow-lg shadow-emerald-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-emerald-500" />
                    Core AI Engine
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Video Generation Pipeline</span>
                    <Badge>FFmpeg + AI</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span>Voice Synthesis</span>
                    <Badge>ElevenLabs</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span>Lead Scoring Models</span>
                    <Badge>Custom ML</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span>Social Media Automation</span>
                    <Badge>Multi-Platform</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Our AI systems work 24/7 to identify opportunities, create content, and engage with potential customers 
                  across multiple platforms with human-like intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-lg border border-teal-200/50 dark:border-teal-800/50">
                  <div className="text-3xl font-bold text-teal-600">5x</div>
                  <div className="text-sm text-muted-foreground">Lead Generation</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="text-3xl font-bold text-emerald-500">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Monitoring</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-lg border border-teal-200/50 dark:border-teal-800/50">
                  <div className="text-3xl font-bold text-teal-500">85%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of businesses already leveraging our AI-powered solutions to maximize their growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100/50 bg-gradient-to-r from-emerald-50/20 to-teal-50/20 dark:from-emerald-950/10 dark:to-teal-950/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Qwenlo Logo" width={32} height={32} />
              <span className="text-2xl font-bold">Qwenlo</span>
            </div>
            <div className="text-muted-foreground">
              © 2025 Qwenlo. Transforming businesses through AI-powered innovation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
