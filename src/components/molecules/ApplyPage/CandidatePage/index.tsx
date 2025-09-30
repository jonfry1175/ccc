"use client";

import { useState } from "react";
import {
  CalendarIcon,
  CheckCircle2,
  Headset,
  Ship,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  { label: "Departemen Tata Graha", value: "housekeeping" },
];

const positions = [
  // Deck & Engine Department
  { label: "Pelaut AB", value: "ab-sailor", department: "deck-engine" },
  { label: "Tukang Kayu", value: "carpenter", department: "deck-engine" },
  { label: "Fitter Dek", value: "deck-fitter", department: "deck-engine" },
  {
    label: "Penjaga Keamanan Kolam Dek",
    value: "deck-pool-safety-guard",
    department: "deck-engine",
  },
  {
    label: "Petugas Pemadam Kebakaran",
    value: "fireman",
    department: "deck-engine",
  },
  {
    label: "Pelaut Biasa",
    value: "ordinary-seaman",
    department: "deck-engine",
  },
  {
    label: "Teknisi Pengendalian Hama",
    value: "pest-control-technician",
    department: "deck-engine",
  },
  {
    label: "Operator Limbah",
    value: "waste-operator",
    department: "deck-engine",
  },
  {
    label: "Asisten Mekanik Fitter",
    value: "asst-fitter-mechanic",
    department: "deck-engine",
  },
  {
    label: "Mekanik Fitter",
    value: "fitter-mechanic",
    department: "deck-engine",
  },
  { label: "Oiler", value: "oiler", department: "deck-engine" },
  { label: "Tukang Ledeng", value: "plumber", department: "deck-engine" },
  { label: "Tukang Jok", value: "upholsterer", department: "deck-engine" },
  { label: "Wiper", value: "wiper", department: "deck-engine" },

  // Housekeeping Department
  {
    label: "Pramugara Kabin",
    value: "cabin-steward",
    department: "housekeeping",
  },
  {
    label: "Pembersih Hotel",
    value: "hotel-cleaner",
    department: "housekeeping",
  },
  { label: "Pembersih Kru", value: "crew-cleaner", department: "housekeeping" },
  {
    label: "Operator Binatu",
    value: "laundry-operator",
    department: "housekeeping",
  },
  { label: "Penjahit", value: "tailor", department: "housekeeping" },
];

const preparationChecklist = [
  "Paspor dengan masa berlaku minimal 18 bulan",
  "CV terbaru dalam format PDF (maksimal 10MB)",
  "Sertifikat pengalaman kerja atau pelatihan relevan",
  "Nomor WhatsApp aktif untuk proses verifikasi",
];

const supportHighlights = [
  {
    icon: ShieldCheck,
    title: "Pendampingan Dokumen",
    description:
      "Tim compliance kami memastikan dokumen Anda sesuai standar perusahaan internasional.",
  },
  {
    icon: Ship,
    title: "Jaringan Kapal Pesiar",
    description:
      "Kemitraan dengan operator kapal pesiar Asia hingga Timur Tengah memperluas pilihan karier Anda.",
  },
  {
    icon: Headset,
    title: "Tim Support 24/7",
    description:
      "Konsultasi langsung melalui WhatsApp untuk pertanyaan proses rekrutmen Anda.",
  },
];

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Nama depan wajib diisi" }),
  lastName: z.string().min(1, { message: "Nama belakang wajib diisi" }),
  dateOfBirth: z.date({ required_error: "Tanggal lahir wajib diisi" }),
  gender: z.enum(["female", "male"], {
    required_error: "Jenis kelamin wajib diisi",
  }),
  passportId: z.string().min(1, { message: "ID paspor wajib diisi" }),
  email: z.string().email({ message: "Alamat email tidak valid" }),
  whatsappCountryCode: z
    .string()
    .min(1, { message: "Kode negara wajib diisi" }),
  whatsappNumber: z.string().min(1, { message: "Nomor WhatsApp wajib diisi" }),
  department: z.string().min(1, { message: "Departemen wajib diisi" }),
  position: z.string().min(1, { message: "Posisi wajib diisi" }),
  cv: isBrowser ? z.instanceof(File).optional() : z.any().optional(),
  certificate: isBrowser ? z.instanceof(File).optional() : z.any().optional(),
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
    null,
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
      position: "",
    },
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
      let cvUrl = "";
      let certificateUrl = "";

      if (data.cv) {
        try {
          const cvPath = `${userId}/cv_${data.cv.name}`;
          await uploadFile("christianity-crisis-center-files", cvPath, data.cv);
          cvUrl = getFileUrl("christianity-crisis-center-files", cvPath);
        } catch (error) {
          console.error("CV upload error:", error);
          throw new Error("Gagal mengunggah CV. Silakan coba lagi.");
        }
      }

      if (data.certificate) {
        try {
          const certPath = `${userId}/cert_${data.certificate.name}`;
          await uploadFile(
            "christianity-crisis-center-files",
            certPath,
            data.certificate,
          );
          certificateUrl = getFileUrl(
            "christianity-crisis-center-files",
            certPath,
          );
        } catch (error) {
          console.error("Certificate upload error:", error);
          throw new Error("Gagal mengunggah Sertifikat. Silakan coba lagi.");
        }
      }

      // Format WhatsApp number with international prefix
      const whatsappNumber = data.whatsappNumber.startsWith("+")
        ? data.whatsappNumber
        : `+${data.whatsappNumber}`;

      // Save candidate data to Supabase Database
      const { error } = await supabase.from("candidate").insert({
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
        certificate_url: certificateUrl,
      });

      if (error) {
        console.error("Database insertion error:", error);
        throw new Error("Gagal menyimpan aplikasi Anda. Silakan coba lagi.");
      }

      toast({
        title: "Aplikasi Berhasil Dikirim",
        description:
          "Terima kasih atas aplikasi Anda. Kami akan segera menghubungi Anda!",
      });

      // Reset form
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Pengiriman Gagal",
        description:
          error.message ||
          "Terjadi kesalahan saat mengirimkan aplikasi Anda. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-offWhite via-white to-[#FFF7E6]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primaryRed/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-8rem] h-80 w-80 rounded-full bg-primaryGold/10 blur-3xl"
      />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-20 md:px-8 lg:pt-24">
        <section className="mx-auto max-w-3xl text-center space-y-5">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primaryRed shadow">
            Kandidat
          </span>
          <h1 className="text-3xl font-semibold text-darkGray md:text-5xl md:leading-tight">
            Lamar Sebagai Kandidat Kapal Pesiar & Hospitality
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            Lengkapi formulir di bawah ini untuk memulai proses rekrutmen
            internasional. Kami akan meninjau dokumen Anda dan menghubungi dalam
            3-5 hari kerja.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-6">
            <Card className="border-none bg-white/80 shadow-xl shadow-primaryRed/10 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryRed/15 text-primaryRed">
                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-xl text-darkGray">
                  Siapkan dokumen Anda
                </CardTitle>
                <CardDescription>
                  Pastikan berkas berikut siap untuk mempercepat proses seleksi.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 text-sm text-slate-600">
                  {preparationChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 text-primaryRed"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportHighlights.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="border-none bg-gradient-to-br from-white via-white to-primaryGold/10 shadow-lg shadow-primaryRed/5 backdrop-blur"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryRed/12 text-primaryRed">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <CardTitle className="text-lg text-darkGray">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-none bg-primaryRed text-white shadow-xl shadow-primaryRed/20">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <Headset className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-xl">Butuh Bantuan?</CardTitle>
                <CardDescription className="text-sm text-white/80">
                  Tim rekrutmen kami siap membantu setiap hari kerja.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  WhatsApp:{" "}
                  <span className="font-semibold">+62 811-9307-777</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="font-semibold">info@mpsjakarta.com</span>
                </p>
                <p>
                  Alamat Kantor: Lorong 101 Timur No. 73, Koja, Jakarta Utara
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none bg-white/95 shadow-2xl shadow-primaryRed/15 backdrop-blur">
            <CardHeader className="space-y-4 pb-0 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primaryRed">
                Formulir Kandidat
              </span>
              <CardTitle className="text-2xl text-darkGray md:text-3xl">
                Lengkapi data pribadi dan posisi impian Anda
              </CardTitle>
              <CardDescription className="text-sm text-slate-600">
                Data yang Anda kirimkan kami jaga kerahasiaannya dan hanya
                digunakan untuk proses pendampingan karier Christianity Crisis
                Center.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10 text-left"
                >
                  <section className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryRed">
                        Data Pribadi
                      </p>
                      <p className="text-sm text-slate-500">
                        Isi sesuai identitas resmi yang tercantum pada paspor.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Nama Depan{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Nama Depan" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Nama Belakang{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Nama Belakang" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>
                              Tanggal Lahir{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-between pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    {field.value ? (
                                      formatDate(field.value)
                                    ) : (
                                      <span>HH/BB/TTTT</span>
                                    )}
                                    <CalendarIcon className="ml-2 h-4 w-4 opacity-60" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <div className="flex items-center justify-between border-b border-border p-2">
                                  <div className="flex gap-1">
                                    <Select
                                      onValueChange={(month) => {
                                        const newDate = new Date(calendarMonth);
                                        newDate.setMonth(
                                          Number.parseInt(month),
                                        );
                                        setCalendarMonth(newDate);
                                      }}
                                      value={calendarMonth
                                        .getMonth()
                                        .toString()}
                                    >
                                      <SelectTrigger className="h-8 w-[110px]">
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
                                          "Desember",
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
                                        newDate.setFullYear(
                                          Number.parseInt(year),
                                        );
                                        setCalendarMonth(newDate);
                                      }}
                                      value={calendarMonth
                                        .getFullYear()
                                        .toString()}
                                    >
                                      <SelectTrigger className="h-8 w-[90px]">
                                        <SelectValue placeholder="Tahun" />
                                      </SelectTrigger>
                                      <SelectContent className="max-h-[200px]">
                                        {Array.from({ length: 100 }, (_, i) => {
                                          const year =
                                            new Date().getFullYear() - i;
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
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>
                              Jenis Kelamin{" "}
                              <span className="text-primaryRed">*</span>
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
                                  <FormLabel className="cursor-pointer font-normal">
                                    Perempuan
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="male" />
                                  </FormControl>
                                  <FormLabel className="cursor-pointer font-normal">
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

                    <FormField
                      control={form.control}
                      name="passportId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Nomor Paspor{" "}
                            <span className="text-primaryRed">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Nomor Paspor" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryRed/20 to-transparent" />

                  <section className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryRed">
                        Kontak & Posisi
                      </p>
                      <p className="text-sm text-slate-500">
                        Pastikan nomor WhatsApp aktif untuk menerima update
                        status lamaran.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Alamat Email{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="anda@contoh.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <FormLabel>
                          Nomor WhatsApp{" "}
                          <span className="text-primaryRed">*</span>
                        </FormLabel>
                        <PhoneNumberInput
                          onChange={(value) =>
                            form.setValue("whatsappNumber", value)
                          }
                          error={form.formState.errors.whatsappNumber?.message}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Departemen yang Dilamar{" "}
                              <span className="text-primaryRed">*</span>
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

                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Posisi <span className="text-primaryRed">*</span>
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
                  </section>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryRed/20 to-transparent" />

                  <section className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryRed">
                        Dokumen Pendukung
                      </p>
                      <p className="text-sm text-slate-500">
                        Unggah file PDF maksimal 10MB untuk setiap dokumen.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="cv"
                      render={({
                        field: { value, onChange, ...fieldProps },
                      }) => (
                        <FormItem>
                          <FormLabel>
                            Unggah CV Anda{" "}
                            <span className="text-primaryRed">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primaryRed/40 bg-white/60 p-6 text-center transition hover:border-primaryRed">
                              <Upload
                                className="h-10 w-10 text-primaryRed"
                                aria-hidden
                              />
                              <p className="text-sm font-medium text-darkGray">
                                Seret & lepas atau pilih file
                              </p>
                              <p className="text-xs text-slate-500">
                                Format PDF, ukuran maksimal 10MB
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
                                className="border-primaryRed/40 text-primaryRed hover:border-primaryRed hover:bg-primaryRed/10"
                                onClick={() =>
                                  document.getElementById("cv-upload")?.click()
                                }
                              >
                                Pilih File
                              </Button>
                              {value && (
                                <p className="mt-2 text-sm text-slate-600">
                                  Terpilih:{" "}
                                  {value instanceof File ? value.name : ""}
                                </p>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="certificate"
                      render={({
                        field: { value, onChange, ...fieldProps },
                      }) => (
                        <FormItem>
                          <FormLabel>
                            Unggah Sertifikat Pengalaman Kerja{" "}
                            <span className="text-primaryRed">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primaryRed/40 bg-white/60 p-6 text-center transition hover:border-primaryRed">
                              <Upload
                                className="h-10 w-10 text-primaryRed"
                                aria-hidden
                              />
                              <p className="text-sm font-medium text-darkGray">
                                Seret & lepas atau pilih file
                              </p>
                              <p className="text-xs text-slate-500">
                                Format PDF, ukuran maksimal 10MB
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
                                className="border-primaryRed/40 text-primaryRed hover:border-primaryRed hover:bg-primaryRed/10"
                                onClick={() =>
                                  document
                                    .getElementById("certificate-upload")
                                    ?.click()
                                }
                              >
                                Pilih File
                              </Button>
                              {value && (
                                <p className="mt-2 text-sm text-slate-600">
                                  Terpilih:{" "}
                                  {value instanceof File ? value.name : ""}
                                </p>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  <Button
                    type="submit"
                    className="w-full bg-primaryRed hover:bg-primaryRed/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Aplikasi"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
