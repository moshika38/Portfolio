"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import InfoCard from "@/components/infoCard";
import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
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

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(null);

    try {
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
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      setError("Failed to transmit message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="contact min-h-screen flex flex-col bg-background grid-pattern relative selection:bg-primary/10">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative"
        >
          <div className="glow-top-right" />
          <div className="glow-bottom-left" />

          <div className="flex flex-col lg:flex-row min-h-[700px] relative z-10">
            {/* Left Column: Contact Info */}
            <div className="hidden lg:flex lg:w-[40%] p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/[0.03] flex-col justify-between">
              <div className="space-y-10 lg:space-y-14">
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 mb-6 lg:mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-primary text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em]">
                      Available for projects
                    </span>
                  </div>
                  <Headline title="Let&apos;s build something truly unique together." />
                  <p className="text-text-muted mt-6 lg:mt-8 text-sm lg:text-base font-light leading-relaxed max-w-sm">
                    Have a concept you want to bring to life? I specialize in
                    creating premium digital experiences that stand out.
                  </p>
                </motion.div>

                <div className="space-y-2">
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
                      whileHover={{ x: 8 }}
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
                className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-white/[0.03]"
              >
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-6 lg:mb-8">
                  Connect
                </p>
                <div className="flex gap-3 lg:gap-4">
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
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-center transition-all group/icon hover:border-primary/15 hover:bg-primary/[0.06]"
                    >
                      <img
                        src={`/assets/social/${social.icon}.svg`}
                        alt={social.name}
                        className="w-4 h-4 opacity-30 group-hover/icon:opacity-100 group-hover/icon:invert transition-all duration-300"
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

            {/* Right Column: Form */}
            <div className="lg:w-[60%] p-8 sm:p-12 lg:p-16 xl:p-20 bg-gradient-to-br from-white/[0.005] to-transparent">
              <motion.div variants={itemVariants} className="mb-10 lg:mb-14">
                <h2 className="text-2xl lg:text-4xl font-black text-white mb-4 tracking-tight">
                  Get started.
                </h2>
                <p className="text-text-muted text-sm lg:text-base font-light">
                  I usually respond within a few business hours.
                </p>
              </motion.div>

              <form
                ref={formRef}
                className="space-y-6 lg:space-y-8"
                onSubmit={handleSendEmail}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2.5"
                  >
                    <label className="text-[10px] lg:text-[11px] font-black text-white/30 uppercase tracking-widest ml-1">
                      Identity
                    </label>
                    <div className="relative group/input">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                        size={18}
                      />
                      <input
                        required
                        name="from_name"
                        type="text"
                        placeholder="What&apos;s your name?"
                        className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl pl-12 pr-5 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-primary/20 focus:bg-primary/[0.02] transition-all duration-300"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2.5"
                  >
                    <label className="text-[10px] lg:text-[11px] font-black text-white/30 uppercase tracking-widest ml-1">
                      Digital Address
                    </label>
                    <div className="relative group/input">
                      <AtSign
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                        size={18}
                      />
                      <input
                        required
                        name="reply_to"
                        type="email"
                        placeholder="email@domain.com"
                        className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl pl-12 pr-5 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-primary/20 focus:bg-primary/[0.02] transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2.5"
                >
                  <label className="text-[10px] lg:text-[11px] font-black text-white/30 uppercase tracking-widest ml-1">
                    Subject of conversation
                  </label>
                  <div className="relative group/input">
                    <Globe
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                      size={18}
                    />
                    <input
                      name="subject"
                      type="text"
                      placeholder="e.g. Website Overhaul"
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl pl-12 pr-5 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-primary/20 focus:bg-primary/[0.02] transition-all duration-300"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2.5"
                >
                  <label className="text-[10px] lg:text-[11px] font-black text-white/30 uppercase tracking-widest ml-1">
                    The Detail
                  </label>
                  <div className="relative group/input">
                    <MessageSquare
                      className="absolute left-4 top-5 text-white/10 group-focus-within/input:text-primary transition-colors duration-300"
                      size={18}
                    />
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell me everything about your vision..."
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl pl-12 pr-5 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-primary/20 focus:bg-primary/[0.02] transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </motion.div>

                {error && (
                  <p className="text-red-400/80 text-xs font-bold uppercase tracking-widest ml-1">
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
                  className={`w-full ${isSent ? "bg-emerald-500 text-white" : "bg-primary text-black"} font-black text-base lg:text-lg py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(255,219,112,0.2)] relative overflow-hidden group/btn disabled:cursor-not-allowed`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSending ? (
                      <>
                        TRANSMITTING...{" "}
                        <Loader2 size={20} className="animate-spin" />
                      </>
                    ) : isSent ? (
                      <>
                        MESSAGE SENT! <CheckCircle2 size={20} />
                      </>
                    ) : (
                      <>
                        TRANSMIT MESSAGE{" "}
                        <Send
                          size={18}
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
