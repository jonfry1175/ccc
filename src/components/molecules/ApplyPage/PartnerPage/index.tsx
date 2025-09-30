"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/atoms/Navbar";
import PhoneNumberInput from "@/components/atoms/PhoneNumber";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import {
  Building2,
  Clock,
  Globe2,
  Handshake,
  MessageCircle,
} from "lucide-react";

// Define the Country interface
interface Country {
  id: string;
  name: string;
}

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "Nama depan wajib diisi" }),
  lastName: z.string().min(1, { message: "Nama belakang wajib diisi" }),
  email: z.string().email({ message: "Alamat email tidak valid" }),
  countryCode: z.string().min(1, { message: "Kode negara wajib diisi" }),
  phoneNumber: z.string().min(1, { message: "Nomor telepon wajib diisi" }),
  companyName: z.string().min(1, { message: "Nama perusahaan wajib diisi" }),
  companyWebsite: z
    .string()
    .min(1, { message: "Situs web perusahaan wajib diisi" }),
  country: z.string().min(1, { message: "Negara wajib diisi" }),
  message: z.string().min(1, { message: "Pesan wajib diisi" }),
});

type FormValues = z.infer<typeof formSchema>;

const partnerHighlights = [
  {
    icon: Handshake,
    title: "Talent Siap Onboard",
    description:
      "Seluruh kandidat menjalani pra-seleksi kompetensi, bahasa, dan etika kerja sehingga siap bergabung dalam waktu singkat.",
  },
  {
    icon: Globe2,
    title: "Jaringan Global",
    description:
      "Koneksikan kebutuhan kru Anda dengan jaringan kami di Asia, Timur Tengah, dan Eropa.",
  },
  {
    icon: Clock,
    title: "Proses Cepat & Transparan",
    description:
      "Laporan status kandidat mingguan dan tim onboarding yang responsif memastikan proses tetap terpantau.",
  },
];

const onboardingChecklist = [
  "Profil perusahaan dan kebutuhan posisi detail",
  "Ketentuan kontrak dan fasilitas kerja",
  "Timeline penempatan yang diharapkan",
  "Kontak PIC HRD untuk koordinasi harian",
];

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
      message: "",
    },
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
          name: country.name.common,
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

      // Format phone number with international prefix
      const fullPhoneNumber = values.phoneNumber.startsWith("+")
        ? values.phoneNumber
        : `+${values.phoneNumber}`;

      // Insert data into Supabase
      const { error } = await supabase.from("partner").insert({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: fullPhoneNumber,
        company_name: values.companyName,
        company_website: values.companyWebsite,
        country: values.country,
        message: values.message,
      });

      if (error) {
        console.error("Database insertion error:", error);
        throw new Error(
          "Gagal mengirimkan permintaan kemitraan Anda. Silakan coba lagi.",
        );
      }

      toast({
        title: "Permintaan Kemitraan Berhasil Dikirim",
        description:
          "Terima kasih atas minat Anda! Kami akan segera menghubungi Anda.",
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
          "Terjadi kesalahan saat mengirimkan permintaan Anda. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-offWhite via-white to-[#FFF5DA]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-primaryGold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-80 w-80 rounded-full bg-primaryRed/10 blur-3xl"
      />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-20 md:px-8 lg:pt-24">
        <section className="mx-auto max-w-3xl text-center space-y-5">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primaryRed shadow">
            Kemitraan
          </span>
          <h1 className="text-3xl font-semibold text-darkGray md:text-5xl md:leading-tight">
            Dapatkan Kru Profesional untuk Kapal Pesiar dan Hospitality Anda
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            Kami membantu perusahaan global menyiapkan tenaga kerja yang
            terampil, tersertifikasi, dan siap berangkat sesuai standar
            internasional.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <Card className="border-none bg-white/85 shadow-xl shadow-primaryRed/10 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryRed/15 text-primaryRed">
                  <Building2 className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-xl text-darkGray">
                  Informasi Kemitraan yang Kami Perlukan
                </CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Lengkapi data berikut agar kami dapat menyesuaikan shortlist
                  kandidat terbaik untuk kebutuhan Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 text-sm text-slate-600">
                  {onboardingChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 h-2.5 w-2.5 rounded-full bg-primaryRed"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {partnerHighlights.map(({ icon: Icon, title, description }) => (
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

            <Card className="border-none bg-primaryRed text-white shadow-xl shadow-primaryRed/25">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-xl">Hubungi Business Team</CardTitle>
                <CardDescription className="text-sm text-white/80">
                  Kami siap menjadwalkan konsultasi kebutuhan kru Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  WhatsApp Bisnis:{" "}
                  <span className="font-semibold">+62 811-9307-777</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="font-semibold">
                    partnership@mpsjakarta.com
                  </span>
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
                Formulir Kemitraan
              </span>
              <CardTitle className="text-2xl text-darkGray md:text-3xl">
                Beritahu kami kebutuhan kru perusahaan Anda
              </CardTitle>
              <CardDescription className="text-sm text-slate-600">
                Lengkapi detail berikut dan tim kami akan menghubungi Anda dalam
                satu hari kerja.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-9 text-left"
                >
                  <section className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryRed">
                        Data Kontak
                      </p>
                      <p className="text-sm text-slate-500">
                        Isi informasi penanggung jawab kemitraan.
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

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Email Bisnis{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="anda@perusahaan.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <FormLabel>
                          Nomor Telepon{" "}
                          <span className="text-primaryRed">*</span>
                        </FormLabel>
                        <PhoneNumberInput
                          error={form.formState.errors.phoneNumber?.message}
                          onChange={(value) =>
                            form.setValue("phoneNumber", value)
                          }
                        />
                      </div>
                    </div>
                  </section>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryRed/20 to-transparent" />

                  <section className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryRed">
                        Informasi Perusahaan
                      </p>
                      <p className="text-sm text-slate-500">
                        Beri tahu kami profil singkat dan kebutuhan kru Anda.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Nama Perusahaan{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Nama Perusahaan" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="companyWebsite"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Situs Web Perusahaan{" "}
                              <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="www.perusahaan.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>
                              Negara <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih negara" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {isLoading ? (
                                  <SelectItem value="loading">
                                    Memuat...
                                  </SelectItem>
                                ) : (
                                  countries.map((country) => (
                                    <SelectItem
                                      key={country.id}
                                      value={country.name}
                                    >
                                      {country.name}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>
                              Pesan <span className="text-primaryRed">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ceritakan kebutuhan kru, jumlah posisi, atau catatan khusus"
                                className="min-h-[140px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
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
