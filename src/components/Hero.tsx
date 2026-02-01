import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-primary text-sm font-mono mb-4 tracking-wider"
          >
            SOFTWARE ENGINEER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Your Name
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
          >
            Building reliable digital products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
          >
            Transforming complex challenges into elegant solutions that drive real business results.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent-primary text-white px-8 py-4 rounded-lg font-semibold 
                     hover:bg-accent-secondary transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
          >
            Let's Work Together
          </motion.a>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-linear-to-br from-accent-primary to-accent-secondary rounded-2xl blur-2xl opacity-50"></div>
            
            {/* Image placeholder */}
            <div className="relative bg-dark-700 rounded-2xl overflow-hidden border border-accent-primary/20 aspect-square">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                {/* Replace with actual image: <img src="/profile.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div className="text-center">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-sm">Replace with your photo</p>
                  <p className="text-xs text-gray-600 mt-2">src/assets/profile.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-primary rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-primary rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
