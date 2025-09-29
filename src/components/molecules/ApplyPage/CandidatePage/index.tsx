"use client";

import { useState } from "react";
import { CalendarIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/atoms/Navbar";
import PhoneNumberInput from "@/components/atoms/PhoneNumber";
import { useToast } from "@/components/ui/use-toast";
import { supabase, uploadFile, getFileUrl } from "@/lib/supabase";

const departments = [
  { label: "Deck & Engine Department", value: "deck-engine" },
  { label: "Housekeeping Department", value: "housekeeping" }
];

const positions = [
  // Deck & Engine Department
  { label: "AB Sailor", value: "ab-sailor", department: "deck-engine" },
  { label: "Carpenter", value: "carpenter", department: "deck-engine" },
  { label: "Deck Fitter", value: "deck-fitter", department: "deck-engine" },
  { label: "Deck Pool Safety Guard", value: "deck-pool-safety-guard", department: "deck-engine" },
  { label: "Fireman", value: "fireman", department: "deck-engine" },
  { label: "Ordinary Seaman", value: "ordinary-seaman", department: "deck-engine" },
  { label: "Pest Control Technician", value: "pest-control-technician", department: "deck-engine" },
  { label: "Waste Operator", value: "waste-operator", department: "deck-engine" },
  { label: "Asst. Fitter Mechanic", value: "asst-fitter-mechanic", department: "deck-engine" },
  { label: "Fitter Mechanic", value: "fitter-mechanic", department: "deck-engine" },
  { label: "Oiler", value: "oiler", department: "deck-engine" },
  { label: "Plumber", value: "plumber", department: "deck-engine" },
  { label: "Upholsterer", value: "upholsterer", department: "deck-engine" },
  { label: "Wiper", value: "wiper", department: "deck-engine" },

  // Housekeeping Department
  { label: "Cabin Steward", value: "cabin-steward", department: "housekeeping" },
  { label: "Hotel Cleaner", value: "hotel-cleaner", department: "housekeeping" },
  { label: "Crew Cleaner", value: "crew-cleaner", department: "housekeeping" },
  { label: "Laundry Operator", value: "laundry-operator", department: "housekeeping" },
  { label: "Tailor", value: "tailor", department: "housekeeping" }
];

const countryCodes = [
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
  { label: "+61", value: "+61" },
  { label: "+62", value: "+62" },
  { label: "+65", value: "+65" },
  { label: "+81", value: "+81" },
  { label: "+82", value: "+82" },
  { label: "+91", value: "+91" }
];

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  gender: z.enum(["female", "male"], { required_error: "Gender is required" }),
  passportId: z.string().min(1, { message: "Passport ID is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  whatsappCountryCode: z
    .string()
    .min(1, { message: "Country code is required" }),
  whatsappNumber: z.string().min(1, { message: "WhatsApp number is required" }),
  department: z.string().min(1, { message: "Department is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  cv: isBrowser ? z.instanceof(File).optional() : z.any().optional(),
  certificate: isBrowser ? z.instanceof(File).optional() : z.any().optional()
});

type FormValues = z.infer<typeof formSchema>;

// Helper function to format date as DD/MM/YYYY
function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function CandidatePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      passportId: "",
      email: "",
      whatsappCountryCode: "+62",
      whatsappNumber: "",
      department: "",
      position: ""
    }
  });

  const filteredPositions = selectedDepartment
    ? positions.filter((position) => position.department === selectedDepartment)
    : [];

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Generate unique IDs for file uploads
      const timestamp = new Date().getTime();
      const userId = `${data.firstName.toLowerCase()}_${data.lastName.toLowerCase()}_${timestamp}`;
      
      // Upload files to Supabase Storage via API route
      let cvUrl = '';
      let certificateUrl = '';
      
      if (data.cv) {
        try {
          const cvPath = `${userId}/cv_${data.cv.name}`;
          await uploadFile('marina-prima-sukses-web', cvPath, data.cv);
          cvUrl = getFileUrl('marina-prima-sukses-web', cvPath);
        } catch (error) {
          console.error('CV upload error:', error);
          throw new Error('Failed to upload CV. Please try again.');
        }
      }
      
      if (data.certificate) {
        try {
          const certPath = `${userId}/cert_${data.certificate.name}`;
          await uploadFile('marina-prima-sukses-web', certPath, data.certificate);
          certificateUrl = getFileUrl('marina-prima-sukses-web', certPath);
        } catch (error) {
          console.error('Certificate upload error:', error);
          throw new Error('Failed to upload Certificate. Please try again.');
        }
      }
      
      // Format WhatsApp number with country code
      const whatsappNumber = `${data.whatsappCountryCode}${data.whatsappNumber}`;
      
      // Save candidate data to Supabase Database
      const { error } = await supabase.from('candidate').insert({
        first_name: data.firstName,
        last_name: data.lastName,
        date_of_birth: data.dateOfBirth.toISOString(),
        gender: data.gender,
        passport_id: data.passportId,
        email: data.email,
        whatsapp_number: whatsappNumber,
        department: data.department,
        position: data.position,
        cv_url: cvUrl,
        certificate_url: certificateUrl
      });
      
      if (error) {
        console.error('Database insertion error:', error);
        throw new Error('Failed to save your application. Please try again.');
      }
      
      toast({
        title: "Application Submitted Successfully",
        description: "Thank you for your application. We will be in touch soon!",
      });
      
      // Reset form
      form.reset();
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-8 pb-4">
        <div>
          <h1 className="text-2xl text-center text-primaryRed">
            Apply As Candidate
          </h1>
        </div>
      </div>
      <Card className="w-full max-w-5xl mx-auto mb-4">
        <CardContent className="p-6 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        First Name{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        Last Name <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date of Birth */}
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="flex">
                        Date of Birth{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                formatDate(field.value)
                              ) : (
                                <span>DD/MM/YYYY</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="p-2 border-b border-border flex justify-between items-center">
                            <div className="flex gap-1">
                              <Select
                                onValueChange={(month) => {
                                  const newDate = new Date(calendarMonth);
                                  newDate.setMonth(Number.parseInt(month));
                                  setCalendarMonth(newDate);
                                }}
                                value={calendarMonth.getMonth().toString()}
                              >
                                <SelectTrigger className="w-[110px] h-8">
                                  <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                  ].map((month, index) => (
                                    <SelectItem
                                      key={month}
                                      value={index.toString()}
                                    >
                                      {month}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>

                              <Select
                                onValueChange={(year) => {
                                  const newDate = new Date(calendarMonth);
                                  newDate.setFullYear(Number.parseInt(year));
                                  setCalendarMonth(newDate);
                                }}
                                value={calendarMonth.getFullYear().toString()}
                              >
                                <SelectTrigger className="w-[90px] h-8">
                                  <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[200px]">
                                  {Array.from({ length: 100 }, (_, i) => {
                                    const year = new Date().getFullYear() - i;
                                    return (
                                      <SelectItem
                                        key={year}
                                        value={year.toString()}
                                      >
                                        {year}
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            month={calendarMonth}
                            onMonthChange={setCalendarMonth}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="flex">
                        Gender <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Female
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Male
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Passport ID */}
              <FormField
                control={form.control}
                name="passportId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">
                      Passport ID <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Passport ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        Email Address{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-sm font-medium">
                      WhatsApp Number{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <PhoneNumberInput
                      onChange={(value) =>
                        form.setValue("whatsappNumber", value)
                      }
                      error={form.formState.errors.whatsappNumber?.message}
                    />
                  </div>
                </div>

                {/* Department Applied */}
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        Department Applied{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue("position", "");
                          setSelectedDepartment(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Deck & Engine Department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((department) => (
                            <SelectItem
                              key={department.value}
                              value={department.value}
                            >
                              {department.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Position */}
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        Position <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!selectedDepartment}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Deck & Engine Position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filteredPositions.map((position) => (
                            <SelectItem
                              key={position.value}
                              value={position.value}
                            >
                              {position.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Upload CV */}
              <FormField
                control={form.control}
                name="cv"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel className="flex">
                      Upload Your CV{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                        <Upload className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-medium">
                          Select a file or drag and drop here
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Only PDF files are allowed. Max size 10MB.
                        </p>
                        <Input
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          id="cv-upload"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...fieldProps}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            document.getElementById("cv-upload")?.click()
                          }
                        >
                          Select File
                        </Button>
                        {value && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Selected: {value instanceof File ? value.name : ""}
                          </p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Upload Work Experience Certificate */}
              <FormField
                control={form.control}
                name="certificate"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel className="flex">
                      Upload Your Work Experience Certificate{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                        <Upload className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-medium">
                          Select a file or drag and drop here
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF size no more than 10MB.
                        </p>
                        <Input
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          id="certificate-upload"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...fieldProps}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            document
                              .getElementById("certificate-upload")
                              ?.click()
                          }
                        >
                          Select File
                        </Button>
                        {value && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Selected: {value instanceof File ? value.name : ""}
                          </p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
