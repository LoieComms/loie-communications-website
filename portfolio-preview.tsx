"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, Palette, Calendar, PenTool, Camera } from "lucide-react"

export default function PortfolioPreview() {
  const [currentGraphicIndex, setCurrentGraphicIndex] = useState(0)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const graphics = [
    { src: "images/graphics/graphic-1.jpeg", alt: "Graphic 1" },
    { src: "images/graphics/graphic-2.jpeg", alt: "Graphic 2" },
    { src: "images/graphics/graphic-3.jpeg", alt: "Graphic 3" },
    { src: "images/graphics/graphic-4.jpeg", alt: "Graphic 4" },
    { src: "images/graphics/graphic-5.jpeg", alt: "Graphic 5" },
  ]

  const photos = [
    { src: "images/photos/image-1.jpeg", alt: "Photo 1" },
    { src: "images/photos/image-2.jpeg", alt: "Photo 2" },
    { src: "images/photos/image-3.jpeg", alt: "Photo 3" },
    { src: "images/photos/image-4.jpeg", alt: "Photo 4" },
    { src: "images/photos/image-5.jpeg", alt: "Photo 5" },
    { src: "images/photos/image-6.jpeg", alt: "Photo 6" },
    { src: "images/photos/image-7.jpeg", alt: "Photo 7" },
    { src: "images/photos/image-8.jpeg", alt: "Photo 8" },
    { src: "images/photos/image-9.jpeg", alt: "Photo 9" },
    { src: "images/photos/image-10.jpeg", alt: "Photo 10" },
  ]

  const articles = [
    {
      image: "images/articles/image-12.jpeg",
      title: "Devastating 'ARk' storm envisioned for California",
      description:
        "As part of our extensive weather coverage, we identified the primary risks to the state and pursued interviews to update the scientific materials.",
      link: "https://www.10news.com/news/local-news/devastating-ark-storm-envisioned-for-california-by-u-s-geological-survey",
    },
    {
      image: "images/articles/image-11.jpeg",
      title: "What to see, do, and taste at Disneyland Halloween Time",
      description:
        "Feature articles were the key traffic driver for 10News.com – and Disneyland's holiday celebrations were among the top ten articles of every year. We created an interactive map to share the food and special attractions of the annual event.",
      link: "https://www.10news.com/lifestyle/exploring-san-diego/interactive-map-what-to-see-do-and-taste-at-disneyland-halloween-time",
    },
    {
      image: "images/articles/image-13.jpeg",
      title: "Advisor gains power over Sweetwater Union finances",
      description:
        "Accuracy and persistence are critical when parents send their children to overcrowded classrooms. The article is short, but it's the result of the careful reading of two feet of legal documents.",
      link: "https://www.10news.com/news/local-news/san-diego-county-office-of-education-gives-financial-power-over-sweetwater-union-schools-to-advisor",
    },
  ]

  const nextGraphic = () => {
    setCurrentGraphicIndex((prev) => (prev + 1) % graphics.length)
  }

  const prevGraphic = () => {
    setCurrentGraphicIndex((prev) => (prev - 1 + graphics.length) % graphics.length)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

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
              <a href="#" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                About
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-teal-600 font-medium">
                Portfolio
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </button>
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                Our Work
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Featured{" "}
                 <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    Work
                     </span>
                     </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive portfolio showcasing strategic communications, visual design, content
                creation, and impactful storytelling across diverse industries and audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    Visual Design
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Graphics</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                When it comes to visuals, one size never fits all. We carefully assess what each audience needs to see
                and feel. This means fine-tuning every visual element to serve the specific story we're telling, whether
                that calls for the authentic warmth of hand-drawn illustrations or the possibilities that emerge when
                imagination meets AI assistance. The goal is always the same: creating visuals that don't just look good
                but actively support and amplify your core message.
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={graphics[currentGraphicIndex].src || "/placeholder.svg"}
                    alt={graphics[currentGraphicIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                    onClick={prevGraphic}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                    onClick={nextGraphic}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {graphics.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentGraphicIndex ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setCurrentGraphicIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Event Management
                </Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Event Content</h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We deliver comprehensive event content management from initial concept to final execution. Whether
                orchestrating 100+ sessions for large-scale conferences or hands-on workshops, we manage the full
                spectrum: sourcing and vetting speakers who align with your goals, crafting compelling presentations
                that maintain audience engagement throughout, and ensuring seamless content flow that keeps participants
                invested from opening remarks to closing thoughts.
              </p>

              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Featured Work</h3>
                  <p className="text-blue-100 text-lg">
                    See our contributions to <strong>Amazon re:MARS</strong>, focusing on Machine Learning, Automation,
                    Robotics, and Space.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <PenTool className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                    Content Creation
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Writing</h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Drawing from decades in journalism, we bring a unique perspective to business communications that goes
                beyond traditional marketing approaches. Our foundations have honed two essential skills: an instinctive
                curiosity to identify the messages that will reach your customers, and the ability to uncover the
                narrative that truly matters. Just as we once sought the human angle in every news story, we now dig
                deep to discover the authentic core message that sets each business apart. We apply this storytelling
                expertise across all forms of business content—from in-depth white papers that establish thought
                leadership to engaging eBooks that educate and convert prospects.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
                            {article.title}
                          </h3>
                          <Button variant="ghost" size="sm" className="flex-shrink-0 ml-4" asChild>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{article.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={photos[currentPhotoIndex].src || "/placeholder.svg"}
                    alt={photos[currentPhotoIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                    onClick={prevPhoto}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                    onClick={nextPhoto}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentPhotoIndex ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setCurrentPhotoIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                    Visual Storytelling
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Photography</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Whether capturing products to showcase their best features, documenting events that tell your company's
                story, or creating other visual content your business needs, we approach each shot with a photographer's
                eye for the decisive moment and authentic detail. From executive portraits that convey authority and
                approachability to product photography that highlights key benefits, we understand that every image is
                an opportunity to strengthen your brand narrative.
              </p>
            </div>
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
