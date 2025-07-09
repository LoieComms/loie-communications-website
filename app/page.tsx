import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Palette, TrendingUp, Target, Shield, Users, Calendar, Mail, MapPin, ArrowRight } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Palette,
      title: "Visual Design",
      description:
        "End-to-end creative projects that transform brand vision into compelling visual assets. We manage design partnerships and ensure brand consistency.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Solutions",
      description:
        "Tailored marketing strategies that maximize impact with focused resources. We develop comprehensive content strategies that drive audience engagement and measurable growth.",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description:
        "Define and articulate your unique value proposition in competitive markets. We help establish brand positioning that resonates with target audiences.",
    },
    {
      icon: Shield,
      title: "Crisis Communications",
      description:
        "Navigate complex situations while protecting brand reputation. We develop crisis response plans and provide leadership guidance during critical moments.",
    },
    {
      icon: Users,
      title: "Internal Communications",
      description:
        "Design and implement internal communication systems that enhance employee engagement and organizational efficiency.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description:
        "Comprehensive event content and logistics that deliver meaningful experiences from speaker selection to seamless execution.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Loie Communications
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Services
              </a>
              <a href="/portfolio" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                  Strategic Communications
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Amplify Your{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    Impact
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Great communication is the difference between being heard and being remembered. We partner with
                  businesses to craft strategic messaging, create engaging content, and build authentic connections that
                  drive growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  <a href="/portfolio">View Our Work</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/hero-image.jpg"
                  alt="Amplify Your Impact"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  About Us
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Proven Expertise, Exceptional Results</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We combine decades of strategic communications expertise with proven results across small businesses,
                  digital media, and leading technology companies. Our team understands the complexities of modern brand
                  communications.
                </p>
                <p>
                  Having delivered solutions that scale from local markets to global audiences of millions, we bring
                  enterprise-level experience from organizations like Amazon and AWS, where our methodologies have
                  driven ROI and consistently exceeded performance objectives.
                </p>
                <p className="font-medium text-slate-900">
                  Our mission is to empower your organization with communications solutions that drive growth,
                  streamline operations, and amplify brand impact.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden">
                <img
                  src="/about-image.jpg"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Comprehensive Communication Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end communication services that drive results and amplify
              your brand's impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ready to Elevate Your Communications?</h2>
                <p className="text-xl text-slate-600">
                  We're here to help you achieve your goals with personalized solutions that drive real results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Locations</div>
                    <div className="text-slate-600">Seattle, WA | Boise, ID</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a
                      href="mailto:info@loiecommunications.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@loiecommunications.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/xyzjbdwl" method="POST" className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      required
                      rows={4}
                      className="border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Loie Communications</span>
            </div>
            <div className="text-slate-400">© 2025 Loie Communications. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
