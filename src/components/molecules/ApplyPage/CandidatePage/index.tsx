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
  { label: "Departemen Deck & Mesin", value: "deck-engine" },
  { label: "Departemen Tata Graha", value: "housekeeping" }
];

const positions = [
  // Deck & Engine Department
  { label: "Pelaut AB", value: "ab-sailor", department: "deck-engine" },
  { label: "Tukang Kayu", value: "carpenter", department: "deck-engine" },
  { label: "Fitter Dek", value: "deck-fitter", department: "deck-engine" },
  { label: "Penjaga Keamanan Kolam Dek", value: "deck-pool-safety-guard", department: "deck-engine" },
  { label: "Petugas Pemadam Kebakaran", value: "fireman", department: "deck-engine" },
  { label: "Pelaut Biasa", value: "ordinary-seaman", department: "deck-engine" },
  { label: "Teknisi Pengendalian Hama", value: "pest-control-technician", department: "deck-engine" },
  { label: "Operator Limbah", value: "waste-operator", department: "deck-engine" },
  { label: "Asisten Mekanik Fitter", value: "asst-fitter-mechanic", department: "deck-engine" },
  { label: "Mekanik Fitter", value: "fitter-mechanic", department: "deck-engine" },
  { label: "Oiler", value: "oiler", department: "deck-engine" },
  { label: "Tukang Ledeng", value: "plumber", department: "deck-engine" },
  { label: "Tukang Jok", value: "upholsterer", department: "deck-engine" },
  { label: "Wiper", value: "wiper", department: "deck-engine" },

  // Housekeeping Department
  { label: "Pramugara Kabin", value: "cabin-steward", department: "housekeeping" },
  { label: "Pembersih Hotel", value: "hotel-cleaner", department: "housekeeping" },
  { label: "Pembersih Kru", value: "crew-cleaner", department: "housekeeping" },
  { label: "Operator Binatu", value: "laundry-operator", department: "housekeeping" },
  { label: "Penjahit", value: "tailor", department: "housekeeping" }
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
  firstName: z.string().min(1, { message: "Nama depan wajib diisi" }),
  lastName: z.string().min(1, { message: "Nama belakang wajib diisi" }),
  dateOfBirth: z.date({ required_error: "Tanggal lahir wajib diisi" }),
  gender: z.enum(["female", "male"], { required_error: "Jenis kelamin wajib diisi" }),
  passportId: z.string().min(1, { message: "ID paspor wajib diisi" }),
  email: z.string().email({ message: "Alamat email tidak valid" }),
  whatsappCountryCode: z
    .string()
    .min(1, { message: "Kode negara wajib diisi" }),
  whatsappNumber: z.string().min(1, { message: "Nomor WhatsApp wajib diisi" }),
  department: z.string().min(1, { message: "Departemen wajib diisi" }),
  position: z.string().min(1, { message: "Posisi wajib diisi" }),
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
          throw new Error('Gagal mengunggah CV. Silakan coba lagi.');
        }
      }
      
      if (data.certificate) {
        try {
          const certPath = `${userId}/cert_${data.certificate.name}`;
          await uploadFile('marina-prima-sukses-web', certPath, data.certificate);
          certificateUrl = getFileUrl('marina-prima-sukses-web', certPath);
        } catch (error) {
          console.error('Certificate upload error:', error);
          throw new Error('Gagal mengunggah Sertifikat. Silakan coba lagi.');
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
        throw new Error('Gagal menyimpan aplikasi Anda. Silakan coba lagi.');
      }
      
      toast({
        title: "Aplikasi Berhasil Dikirim",
        description: "Terima kasih atas aplikasi Anda. Kami akan segera menghubungi Anda!",
      });
      
      // Reset form
      form.reset();
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Pengiriman Gagal",
        description: error.message || "Terjadi kesalahan saat mengirimkan aplikasi Anda. Silakan coba lagi.",
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
            Lamar Sebagai Kandidat
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
                        Nama Depan{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nama Depan" {...field} />
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
                        Nama Belakang <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nama Belakang" {...field} />
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
                        Tanggal Lahir{" "}
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
                                <span>HH/BB/TTTT</span>
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
                                  <SelectValue placeholder="Bulan" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[
                                    "Januari",
                                    "Februari",
                                    "Maret",
                                    "April",
                                    "Mei",
                                    "Juni",
                                    "Juli",
                                    "Agustus",
                                    "September",
                                    "Oktober",
                                    "November",
                                    "Desember"
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
                                  <SelectValue placeholder="Tahun" />
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
                        Jenis Kelamin <span className="text-red-500 ml-0.5">*</span>
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
                              Perempuan
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Laki-laki
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
                      Nomor Paspor <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nomor Paspor" {...field} />
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
                        Alamat Email{" "}
                        <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="anda@contoh.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-sm font-medium">
                      Nomor WhatsApp{" "}
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
                        Departemen yang Dilamar{" "}
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
                            <SelectValue placeholder="Pilih Departemen" />
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
                        Posisi <span className="text-red-500 ml-0.5">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!selectedDepartment}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Posisi" />
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
                      Unggah CV Anda{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                        <Upload className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-medium">
                          Pilih file atau seret dan lepas di sini
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Hanya file PDF yang diizinkan. Ukuran maksimal 10MB.
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
                          Pilih File
                        </Button>
                        {value && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Terpilih: {value instanceof File ? value.name : ""}
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
                      Unggah Sertifikat Pengalaman Kerja Anda{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                        <Upload className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-medium">
                          Pilih file atau seret dan lepas di sini
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Ukuran PDF tidak lebih dari 10MB.
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
                          Pilih File
                        </Button>
                        {value && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Terpilih: {value instanceof File ? value.name : ""}
                          </p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Kirim Aplikasi"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
