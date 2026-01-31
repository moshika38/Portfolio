"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import InfoCard from "@/components/infoCard";
import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  AtSign,
  Globe,
  Loader2,
  CheckCircle2,
} from "lucide-react";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(null);

    try {
      // Collect form data manually to ensure fields are captured correctly
      const formData = new FormData(formRef.current);

      const templateParams = {
        title: formData.get("subject") || "New project",
        name: formData.get("from_name"),
        time: new Date().toLocaleString(),
        message: formData.get("message"),
        email: formData.get("reply_to"),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError("Failed to transmit message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="contact min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="group bg-card-dark withBorder rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-white/5"
        >
          {/* Static Ambient Glows */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="flex flex-col lg:flex-row min-h-[700px] relative z-10">
            {/* Left Column: Intelligence & Contact - Hidden on Mobile */}
            <div className="hidden lg:flex lg:w-[40%] p-8 sm:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-border-dark flex-col justify-between bg-white/1">
              <div className="space-y-10 lg:space-y-14">
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 lg:mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-primary text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em]">
                      Available for projects
                    </span>
                  </div>
                  <Headline title="Let's build something truly unique together." />
                  <p className="text-text-muted mt-6 lg:mt-8 text-base lg:text-lg font-light leading-relaxed max-w-sm">
                    Have a concept you want to bring to life? I specialize in
                    creating premium digital experiences that stand out.
                  </p>
                </motion.div>

                <div className="space-y-4 lg:space-y-6">
                  {[
                    {
                      icon: "/assets/svg/email.svg",
                      title: "Write to me",
                      info: "moshika38@gmail.com",
                    },
                    {
                      icon: "/assets/svg/call2.svg",
                      title: "Give a ring",
                      info: "+94 71 214 3954",
                    },
                    {
                      icon: "/assets/svg/location.svg",
                      title: "Find me at",
                      info: "Badulla, Sri Lanka",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ x: 12 }}
                      className="cursor-pointer"
                    >
                      <InfoCard
                        icon={item.icon}
                        title={item.title}
                        description={item.info}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-border-dark"
              >
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-6 lg:mb-8">
                  Global presence
                </p>
                <div className="flex gap-4 lg:gap-5">
                  {[
                    {
                      name: "github",
                      href: "https://github.com/moshika38",
                      icon: "git",
                    },
                    {
                      name: "fb",
                      href: "https://www.facebook.com/profile.php?id=61550915073941",
                      icon: "fb",
                    },
                    {
                      name: "whatsapp",
                      href: "https://wa.me/+94712143954",
                      icon: "wp",
                    },
                    {
                      name: "email",
                      href: "mailto:moshika38@gmail.com",
                      icon: "email",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.15,
                        y: -8,
                        backgroundColor: "var(--primary)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-border-dark/50 flex items-center justify-center border border-white/5 transition-all group/icon shadow-lg"
                    >
                      <img
                        src={`/assets/social/${social.icon}.svg`}
                        alt={social.name}
                        className="w-5 h-5 lg:w-6 lg:h-6 opacity-40 group-hover/icon:opacity-100 group-hover/icon:invert transition-all"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://www.svgrepo.com/show/353844/github-icon.svg";
                        }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interaction Form */}
            <div className="lg:w-[60%] p-8 sm:p-14 lg:p-20 bg-linear-to-br from-black/40 to-transparent backdrop-blur-md">
              <motion.div variants={itemVariants} className="mb-10 lg:mb-14">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tighter">
                  Get started.
                </h2>
                <p className="text-text-muted text-lg lg:text-xl font-light">
                  I usually respond within a few business hours.
                </p>
              </motion.div>

              <form
                ref={formRef}
                className="space-y-8 lg:space-y-10"
                onSubmit={handleSendEmail}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-3 lg:space-y-4"
                  >
                    <label className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-widest ml-1">
                      Identity
                    </label>
                    <div className="relative group/input">
                      <User
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                        size={20}
                      />
                      <input
                        required
                        name="from_name"
                        type="text"
                        placeholder="What's your name?"
                        className="w-full bg-border-dark/10 border border-white/5 rounded-2xl pl-14 pr-7 py-4 lg:py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/30 focus:bg-white/4 transition-all duration-300"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-3 lg:space-y-4"
                  >
                    <label className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-widest ml-1">
                      Digital Address
                    </label>
                    <div className="relative group/input">
                      <AtSign
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                        size={20}
                      />
                      <input
                        required
                        name="reply_to"
                        type="email"
                        placeholder="email@domain.com"
                        className="w-full bg-border-dark/10 border border-white/5 rounded-2xl pl-14 pr-7 py-4 lg:py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/30 focus:bg-white/4 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-3 lg:space-y-4"
                >
                  <label className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-widest ml-1">
                    Subject of conversation
                  </label>
                  <div className="relative group/input">
                    <Globe
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                      size={20}
                    />
                    <input
                      name="subject"
                      type="text"
                      placeholder="e.g. Website Overhaul"
                      className="w-full bg-border-dark/10 border border-white/5 rounded-2xl pl-14 pr-7 py-4 lg:py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/30 focus:bg-white/4 transition-all duration-300"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-3 lg:space-y-4"
                >
                  <label className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-widest ml-1">
                    The Detail
                  </label>
                  <div className="relative group/input">
                    <MessageSquare
                      className="absolute left-5 top-7 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                      size={20}
                    />
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell me everything about your vision..."
                      className="w-full bg-border-dark/10 border border-white/5 rounded-2xl pl-14 pr-7 py-5 lg:py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/30 focus:bg-white/4 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </motion.div>

                {error && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest ml-1">
                    {error}
                  </p>
                )}

                <motion.button
                  variants={itemVariants}
                  disabled={isSending || isSent}
                  whileHover={{
                    scale: isSending || isSent ? 1 : 1.01,
                    y: isSending || isSent ? 0 : -2,
                  }}
                  whileTap={{ scale: isSending || isSent ? 1 : 0.99 }}
                  className={`w-full ${isSent ? "bg-green-500 text-white" : "bg-primary text-black"} font-black text-lg lg:text-xl py-5 lg:py-6 rounded-2xl flex items-center justify-center gap-4 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(255,219,112,0.3)] relative overflow-hidden group/btn disabled:cursor-not-allowed`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSending ? (
                      <>
                        TRANSMITTING...{" "}
                        <Loader2 size={24} className="animate-spin" />
                      </>
                    ) : isSent ? (
                      <>
                        MESSAGE SENT! <CheckCircle2 size={24} />
                      </>
                    ) : (
                      <>
                        TRANSMIT MESSAGE{" "}
                        <Send
                          size={24}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </span>
                  {!isSending && !isSent && (
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
