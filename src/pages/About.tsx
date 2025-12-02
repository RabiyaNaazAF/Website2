import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Award, Users, Trophy, Calendar, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description:
        "To deliver exceptional construction and real estate solutions that exceed client expectations while maintaining the highest standards of quality and professionalism.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Vision",
      description:
        "To be the leading construction and development company in Karnataka, known for innovation, reliability, and creating structures that stand the test of time.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Core Values",
      description:
        "Integrity, Excellence, Innovation, Client-Focus, and Sustainability form the foundation of everything we do at AJ Groups.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: "url('/imgc.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About AJ Groups</h1>
            <p className="text-lg md:text-xl text-white">
              Design for Decades - Building Excellence Since Inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={contentRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  AJ Groups was founded with a vision to transform the construction and real estate
                  landscape in Bhadravathi, Karnataka. What began as a small construction firm has
                  evolved into a comprehensive development powerhouse, offering end-to-end solutions
                  in construction, real estate, land development, and architectural design.
                </p>
                <p>
                  Our journey started with a simple belief: that every structure we build should
                  tell a story of excellence, innovation, and lasting value. This philosophy has
                  guided us through over two decades of growth and transformation in the industry.
                </p>
                <p>
                  Our tagline "Design for Decades" reflects our commitment to creating structures
                  that not only meet current needs but stand as testaments to quality and durability
                  for generations to come. We believe in building relationships as strong as the
                  structures we create, fostering trust and partnership with every client.
                </p>
                <p>
                  Today, with over 250 completed projects and 500+ satisfied clients across Karnataka,
                  we have established ourselves as a trusted name in the industry. Our team of
                  experienced professionals brings together expertise in various domains to deliver
                  comprehensive solutions tailored to each client's unique needs and aspirations.
                </p>
                <p>
                  As we continue to grow and innovate, our focus remains on delivering exceptional
                  value through sustainable practices, cutting-edge technology, and unwavering
                  commitment to quality. Every project is an opportunity to exceed expectations
                  and create spaces that enhance lives and communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-accent mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that define our journey of excellence and innovation in construction and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Trophy className="h-8 w-8" />, number: "150+", label: "Projects Completed", desc: "Across Karnataka" },
              { icon: <Users className="h-8 w-8" />, number: "300+", label: "Happy Clients", desc: "Satisfied families" },
              { icon: <Calendar className="h-8 w-8" />, number: "10+", label: "Years Experience", desc: "Industry expertise" },
              { icon: <MapPin className="h-8 w-8" />, number: "30+", label: "Locations Served", desc: "Throughout Karnataka" },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-accent mb-4 flex justify-center">{achievement.icon}</div>
                    <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before-After Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Witness the incredible transformations we've brought to life through our construction expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Complex",
                location: "Bengalore",
                before: "/img1-1.png",
                after: "/img1-2.png",
                description: "Complete renovation of a 3-story residential building"
              },
              {
                title: "Commercial Space",
                location: "Shimoga",
                before: "/img3-2.png",
                after: "/img3-1.png",
                description: "Modern office complex transformation"
              },
              {
                title: "Villa Makeover",
                location: "Davangere",
                before: "/img2-1.png",
                after: "/img2-2.png",
                description: "Luxury villa renovation and expansion"
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="relative">
                        <img
                          src={project.before}
                          alt={`${project.title} Before`}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-red-500">Before</Badge>
                      </div>
                      <div className="relative">
                        <img
                          src={project.after}
                          alt={`${project.title} After`}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-green-500">After</Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                    <p className="text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind AJ Groups' success, bringing expertise and dedication to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mohammed Afeef Hussain",
                role: "Founder & CEO",
                experience: "9+ years",
                specialization: "Construction Management",
                image: "/placeholder.svg"
              },
              {
                name: "Javeed",
                role: "Chief Architect",
                experience: "7+ years",
                specialization: "Sustainable Design",
                image: "/placeholder.svg"
              },
              {
                name: "Mohammed Afeef Hussain",
                role: "Project Manager",
                experience: "9+ years",
                specialization: "Quality Assurance",
                image: "/placeholder.svg"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience} in {member.specialization}</p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose AJ Groups?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "10+ years of industry experience and expertise",
                "100+ successfully completed projects across Karnataka",
                "150+ satisfied clients and growing community",
                "Comprehensive end-to-end construction solutions",
                "Expert team of architects, engineers, and specialists",
                "Commitment to timely project delivery and quality",
                "Use of premium quality materials and modern techniques",
                "Transparent pricing, processes, and communication",
                "Sustainable and eco-friendly construction practices",
                "24/7 customer support and post-construction services",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
