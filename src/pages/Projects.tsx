import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import constructionImg from "@/assets/construction.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import landDevImg from "@/assets/land-development.jpg";
import architectureImg from "@/assets/architecture.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "construction", name: "Construction" },
    { id: "real-estate", name: "Real Estate" },
    { id: "land-dev", name: "Land Development" },
    { id: "architecture", name: "Architecture" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      category: "construction",
      location: "Bhadravathi",
      status: "Completed",
      image: constructionImg,
      description: "Modern residential complex with 50+ units featuring contemporary design",
      gallery: ["/imgc1.jpg", "/imgc2.jpg", "/imgc3.jpg"]
    },
    {
      id: 2,
      title: "Premium Villa Project",
      category: "real-estate",
      location: "Shimoga",
      status: "Ongoing",
      image: "/imgr3.jpg",
      description: "Exclusive villa development with world-class amenities",
      gallery: ["/imgr1.jpg", "/imgr2.jpg", "/imgr3.jpg"]
    },
    {
      id: 3,
      title: "Industrial Park Development",
      category: "land-dev",
      location: "Bhadravathi",
      status: "Completed",
      image: landDevImg,
      description: "Comprehensive industrial park with infrastructure planning",
      gallery: ["/imgl1.jpg", "/imgl2.jpg", "/imgl3.jpg"]
    },
    {
      id: 4,
      title: "Contemporary Office Building",
      category: "architecture",
      location: "Shimoga",
      status: "Completed",
      image: architectureImg,
      description: "Award-winning architectural design for commercial space",
      gallery: ["/imgc1.jpg", "/imga2.jpg", "/imga1.jpg"]
    },
   
    {
      id: 6,
      title: "Commercial Plaza",
      category: "real-estate",
      location: "Bangalore",
      status: "Completed",
      image: "/imgr2.jpg",
      description: "Multi-level commercial plaza in prime location",
      gallery: ["/imgr1.jpg", "/imgr2.jpg", "/imgr3.jpg"]
    },
    {
      id: 7,
      title: "Modern Apartment Complex",
      category: "construction",
      location: "Davangere",
      status: "Completed",
      image: "/imgc1.jpg",
      description: "High-rise apartment complex with premium facilities",
      gallery: ["/imgc2.jpg", "/imgc3.jpg", "/imgc4.jpg"]
    },
    {
      id: 8,
      title: "Luxury Boutique Hotel",
      category: "architecture",
      location: "Chikmagalur",
      status: "Ongoing",
      image: "/imga1.jpg",
      description: "Boutique hotel with contemporary design and luxury amenities",
      gallery: ["/imga1.jpg", "/imga2.jpg", "/imgr3.jpg"]
    },
    {
      id: 9,
      title: "Eco-Friendly Residential",
      category: "real-estate",
      location: "Hassan",
      status: "Planning",
      image: "/imgr1.jpg",
      description: "Sustainable residential project with green building practices",
      gallery: ["/imgr1.jpg", "/imgr2.jpg", "/imgr3.jpg"]
    },
    {
      id: 10,
      title: "Smart City Development",
      category: "land-dev",
      location: "Mangalore",
      status: "Ongoing",
      image: "/imgl1.jpg",
      description: "Integrated smart city project with modern infrastructure",
      gallery: ["/imgl1.jpg", "/imgl2.jpg", "/imgl3.jpg"]
    },
    {
      id: 11,
      title: "Heritage Restoration",
      category: "architecture",
      location: "Mysore",
      status: "Completed",
      image: "/imga2.jpg",
      description: "Restoration and modernization of historic building",
      gallery: ["/imga1.jpg", "/imga2.jpg", "/imgc3.jpg"]
    },
    {
      id: 12,
      title: "Mixed-Use Development",
      category: "construction",
      location: "Hubli",
      status: "Ongoing",
      image: "/imgc4.jpg",
      description: "Mixed-use development combining residential and commercial spaces",
      gallery: ["/imgc1.jpg", "/imgc2.jpg", "/imgc3.jpg"]
    }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/imgc2.jpg)` }} />
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Images */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/img1-1.png"
            alt="Construction"
            className="absolute top-20 left-10 w-24 h-24 object-cover rounded-lg shadow-lg opacity-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            src="/imgr.jpg"
            alt="Architecture"
            className="absolute top-32 right-16 w-32 h-32 object-cover rounded-lg shadow-lg opacity-15"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img
            src="/imgc1.jpg"
            alt="Real Estate"
            className="absolute bottom-20 left-20 w-28 h-28 object-cover rounded-lg shadow-lg opacity-25"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.img
            src="/img3-1.png"
            alt="Development"
            className="absolute bottom-32 right-10 w-20 h-20 object-cover rounded-lg shadow-lg opacity-20"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore our portfolio of successfully completed and ongoing projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-primary rounded-sm"></div>
            ))}
          </div>
        </div>

        {/* Decorative Images */}
        <div className="absolute left-8 top-4 opacity-10">
          <img src="/img1-2.png" alt="Decoration" className="w-16 h-16 object-cover rounded" />
        </div>
        <div className="absolute right-8 bottom-4 opacity-10">
          <img src="/imgc3.jpg" alt="Decoration" className="w-20 h-20 object-cover rounded" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Filter by Category</h2>
            <p className="text-muted-foreground">Choose a category to explore our specialized projects</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full px-6 py-2 hover:scale-105 transition-transform"
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-4 opacity-5">
            <img src="/img2-1.png" alt="Decoration" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="absolute top-20 right-8 opacity-5">
            <img src="/imgc4.jpg" alt="Decoration" className="w-24 h-24 object-cover rounded-lg" />
          </div>
          <div className="absolute bottom-20 left-12 opacity-5">
            <img src="/imgr1.jpg" alt="Decoration" className="w-28 h-28 object-cover rounded" />
          </div>
          <div className="absolute bottom-10 right-4 opacity-5">
            <img src="/img1-2.png" alt="Decoration" className="w-20 h-20 object-cover rounded-full" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse portfolio showcasing excellence in construction, architecture, and real estate development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm opacity-90">{project.location}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => openGallery(project)}
                    >
                      <Images className="w-4 h-4 mr-2" />
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us bring your vision to life
            </p>
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeGallery}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          {selectedProject && (
            <div className="relative w-full h-full">
              <img
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                onClick={closeGallery}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
                {selectedProject.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-12 h-12 rounded overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-white' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
