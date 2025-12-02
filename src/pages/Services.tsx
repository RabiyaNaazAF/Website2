import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Home, MapIcon, Ruler, CheckCircle } from "lucide-react";
import constructionImg from "@/assets/construction.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import landDevImg from "@/assets/land-development.jpg";
import architectureImg from "@/assets/architecture.jpg";

const Services = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Construction",
      description:
        "From residential homes to large commercial complexes, we deliver construction excellence at every scale.",
      image: constructionImg,
      features: [
        "Residential Construction",
        "Commercial Buildings",
        "Industrial Projects",
        "Renovation & Remodeling",
        "Quality Assurance",
        "Timely Delivery",
      ],
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Real Estate",
      description:
        "Comprehensive real estate solutions including property sales, consultation, and investment guidance.",
      image: realEstateImg,
      features: [
        "Property Listings",
        "Sales & Purchase Support",
        "Property Valuation",
        "Market Analysis",
        "Investment Consulting",
        "Legal Documentation",
      ],
    },
    {
      icon: <MapIcon className="h-12 w-12" />,
      title: "Land Development",
      description:
        "Expert land development services from site analysis to final plotting and government approvals.",
      image: landDevImg,
      features: [
        "Site Planning",
        "Land Plotting",
        "Infrastructure Development",
        "Government Approvals",
        "Utility Planning",
        "Environmental Assessment",
      ],
    },
    {
      icon: <Ruler className="h-12 w-12" />,
      title: "Architecture",
      description:
        "Innovative architectural designs that blend aesthetics with functionality for modern and traditional buildings.",
      image: architectureImg,
      features: [
        "Modern Architecture",
        "Traditional Designs",
        "3D Visualization",
        "Interior Design",
        "Sustainable Design",
        "Project Management",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: `url(${constructionImg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-lg md:text-xl text-white">
              Comprehensive solutions for construction, real estate, land development, and architecture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-2 hover:border-accent transition-all duration-300">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`relative h-64 lg:h-auto ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    </div>

                    <CardContent
                      className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="text-accent mb-4">{service.icon}</div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="default" asChild>
                        <Link to="/contact">Get a Quote</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Our team is here to guide you through every step of your project
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
