"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "email must be a valid email."
  }),
  message: z.string().min(10, {
    message: "message must be at least 10 characters."
  })
});

export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: "Success submit"
    });
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen px-4 py-16 bg-white md:py-24"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="inline-block mb-12 text-3xl text-center font-bold text-color1 md:text-4xl relative">
            <span className="text-center">Contact Us</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
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
                    <FormLabel className="block text-left text-color1">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="john doe" {...field} />
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
                    <FormLabel className="block text-left text-color1">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
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
                    <FormLabel className="block text-left text-color1">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
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
                className="w-full bg-color1 hover:bg-white text-white hover:text-color1  hover:border-color1"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
