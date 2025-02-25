"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name cannot exceed 50 characters" }),
    email: z
      .string()
      .email({ message: "Please enter a valid email address" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters long" })
      .max(500, { message: "Message cannot exceed 500 characters" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Mock form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="bg-navy-DEFAULT relative px-4 py-20 md:py-28"
    >
      {/* Visual divider at the top of the section */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-gold uppercase tracking-wider font-medium mb-1">Get In Touch</h2>
          <h1 className="text-3xl font-bold text-white md:text-5xl mb-6 relative inline-block">
            Contact <span className="text-gold">Us</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/80 text-[16px] leading-relaxed mt-8">
            We're here to assist you with any inquiries you might have about our services.
            Please fill out the form below, and one of our representatives will contact you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start space-x-4">
              <div className="bg-gold p-3 rounded-full shadow-md">
                <FaPhone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gold font-medium text-xl mb-2">Phone</h3>
                <p className="text-white/90 text-[16px]">+62 21 5366 7356</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold p-3 rounded-full shadow-md">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gold font-medium text-xl mb-2">Email</h3>
                <p className="text-white/90 text-[16px]">mps.marinaprima@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold p-3 rounded-full shadow-md">
                <FaLocationDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gold font-medium text-xl mb-2">Address</h3>
                <p className="text-white/90 text-[16px]">
                  Indofood Tower 15<sup>th</sup> Floor, JL. Jend. Sudirman Kav.76-78
                  Jakarta 12910 - Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-navy-DEFAULT font-medium text-[15px]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gold ${errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-navy-DEFAULT font-medium text-[15px]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gold ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-navy-DEFAULT font-medium text-[15px]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gold ${errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-white py-3"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <IoSend className="ml-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
