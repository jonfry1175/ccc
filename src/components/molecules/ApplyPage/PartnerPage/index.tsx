"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/atoms/Navbar";
import PhoneNumberInput from "@/components/atoms/PhoneNumber";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

// Define the Country interface
interface Country {
  id: string;
  name: string;
}

// Define country codes for phone selection
const countryCodes = [
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" },
  { value: "+61", label: "+61" },
  { value: "+62", label: "+62" },
  { value: "+63", label: "+63" },
  { value: "+65", label: "+65" },
  { value: "+81", label: "+81" },
  { value: "+82", label: "+82" },
  { value: "+86", label: "+86" },
  { value: "+91", label: "+91" }
];

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  companyWebsite: z.string().min(1, { message: "Company website is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  message: z.string().min(1, { message: "Message is required" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+62",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      country: "",
      message: ""
    }
  });

  // Fetch countries from API
  const fetchCountries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const sortedCountries = data
        .map((country: any) => ({
          id: country.cca2,
          name: country.name.common
        }))
        .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      setCountries(sortedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Form submission handler
  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);
      
      // Format phone number with country code
      const fullPhoneNumber = `${values.countryCode}${values.phoneNumber}`;
      
      // Insert data into Supabase
      const { error } = await supabase.from('partners').insert({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: fullPhoneNumber,
        company_name: values.companyName,
        company_website: values.companyWebsite,
        country: values.country,
        message: values.message
      });
      
      if (error) throw error;
      
      toast({
        title: "Partnership Request Submitted Successfully",
        description: "Thank you for your interest! We will be in touch soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="py-8 pb-4">
        <div>
          <h1 className="text-2xl text-center text-color1">Apply As Partner</h1>
        </div>
      </div>
      <Card className="w-full max-w-6xl mx-auto mb-4">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        First Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Last Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Business Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Business Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-sm font-medium">
                      Phone Number{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <PhoneNumberInput
                      error={form.formState.errors.phoneNumber?.message}
                      onChange={(value) => form.setValue("phoneNumber", value)}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Company Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Company Website */}
                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Company Website <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="www.example.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Country */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2">
                      <FormLabel className="text-base">
                        Country <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue>
                              {field.value || "Select a country"}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isLoading ? (
                            <SelectItem value="loading">Loading...</SelectItem>
                          ) : (
                            countries.map((country) => (
                              <SelectItem key={country.id} value={country.name}>
                                {country.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>

                      {form.formState.errors.country && (
                        <p className="text-red-500 text-sm mt-1">
                          Country is required
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2">
                      <FormLabel className="text-base">
                        Message <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Leave a message for us"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
