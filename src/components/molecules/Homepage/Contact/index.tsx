"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "nama harus memiliki setidaknya 2 karakter.",
  }),
  email: z.string().email({
    message: "email harus berupa email yang valid.",
  }),
  message: z.string().min(10, {
    message: "pesan harus memiliki setidaknya 10 karakter.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Anda mengirimkan nilai-nilai berikut:",
      description: "Berhasil mengirim",
    });
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen px-4 py-16 bg-white md:py-24"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="inline-block mb-12 text-3xl text-center font-bold text-primaryRed md:text-4xl relative">
            <span className="text-center">Hubungi Kami</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primaryRed opacity-30 z-0"></span>
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="block text-left text-primaryRed">
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="nama lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="block text-left text-primaryRed">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="anda@contoh.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="block text-left text-primaryRed">
                      Pesan
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tulis pesan Anda di sini..."
                        {...field}
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"outline"}
                className="w-full bg-primaryRed hover:bg-white text-white hover:text-primaryRed  hover:border-primaryRed"
              >
                Kirim
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
