import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home as HomeIcon, MapIcon, Ruler } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StatCounter from "@/components/StatCounter";
import Testimonials from "@/components/Testimonials";
import ProcessTimeline from "@/components/ProcessTimeline";
import VideoShowcase from "@/components/VideoShowcase";
import ParallaxSection from "@/components/ParallaxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import heroImage from "@/assets/hero-architecture.jpg";
import { useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setShowLoginPrompt(true);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setShowLoginPrompt(true);
      } else {
        setShowLoginPrompt(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Construction",
      description: "Residential, commercial, and industrial construction with unmatched quality and precision.",
      link: "/services",
    },
    {
      icon: <HomeIcon className="h-10 w-10" />,
      title: "Real Estate",
      description: "Property listings, sales support, and comprehensive real estate solutions.",
      link: "/services",
    },
    {
      icon: <MapIcon className="h-10 w-10" />,
      title: "Land Development",
      description: "Expert site planning, plotting, and approval services for your land.",
      link: "/services",
    },
    {
      icon: <Ruler className="h-10 w-10" />,
      title: "Architecture",
      description: "Modern and traditional building designs that stand the test of time.",
      link: "/services",
    },
  ];

  return (
    <div>
      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-background rounded-lg p-6 max-w-md w-full shadow-2xl border"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold">Welcome to AJ Groups</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Please login to access our services and explore our projects.
            </p>
            <Button
              onClick={() => navigate("/auth")}
              className="w-full"
            >
              Login
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/imgr2.jpg)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block border-2 border-accent px-6 py-2 rounded-full text-accent font-semibold text-sm tracking-wider mb-8 animate-pulse">
              10+ YEARS OF EXCELLENCE
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            AJ Groups
            <motion.span
              className="block text-accent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
               Design for Decades
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Excellence in Construction, Real Estate, Land Development & Architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" variant="default" asChild className="text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all duration-300">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 border-2 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-20 w-20 h-20 border border-accent/30 rounded-lg hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-20 w-32 h-32 border border-accent/30 rounded-full hidden lg:block"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={100} suffix="+" label="Projects Completed" />
            <StatCounter end={150} suffix="+" label="Happy Clients" />
            <StatCounter end={25} suffix="+" label="Ongoing Projects" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your construction and real estate needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
                  <CardContent className="p-6">
                    <div className="text-accent mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-primary hover:underline font-medium text-sm"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Parallax CTA Section */}
      <ParallaxSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with our expertise, dedication, 
              and commitment to excellence. Your dream project is just a conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-6 shadow-2xl">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-10 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
