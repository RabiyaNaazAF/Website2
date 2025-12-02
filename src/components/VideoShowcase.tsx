import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we transform dreams into architectural masterpieces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-border group">
            {/* Video placeholder with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary" />
            
            {/* Overlay with play button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform duration-300 shadow-2xl"
                >
                  <Play className="h-12 w-12 ml-1" fill="currentColor" />
                </button>
              </div>
            )}

            {/* Video embed */}
            {isPlaying && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/eKm4Fls-yJA"
                title="AJ Groups Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-32 h-32 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl" />
            <div className="absolute bottom-4 right-4 w-32 h-32 border-b-2 border-r-2 border-accent/50 rounded-br-2xl" />
          </div>

          {/* Video stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { label: "Projects Filmed", value: "100+" },
              { label: "Happy Moments", value: "250+" },
              { label: "Years Documented", value: "10+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
