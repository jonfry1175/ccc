"use client";

import Footer from "@/components/atoms/Footer";
import Navbar from "@/components/atoms/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const impactStats = [
  {
    label: "Anggota Komunitas",
    value: "8.200+",
    description:
      "Jemaat, keluarga, dan profesional muda yang terhubung dalam pelayanan CCC sejak 2015.",
  },
  {
    label: "Penempatan Karier",
    value: "1.150",
    description:
      "Warga komunitas yang berhasil memasuki industri hospitality dan kapal pesiar.",
  },
  {
    label: "Jam Pelatihan",
    value: "35.000",
    description:
      "Total jam pelatihan tatap muka dan praktik langsung setiap tahunnya di pusat pelatihan kami.",
  },
];

const communityPillars = [
  {
    title: "Pendampingan Karier Holistik",
    description:
      "Kami menghadirkan konseling, coaching spiritual, dan mentoring profesional agar setiap anggota siap melangkah dengan percaya diri.",
  },
  {
    title: "Pelatihan Relevan Industri",
    description:
      "Modul disusun bersama praktisi dan alumni kapal pesiar, mencakup soft skills, bahasa, hingga etika pelayanan kristiani.",
  },
  {
    title: "Jaringan Kemitraan Luas",
    description:
      "Kami membangun relasi dengan perusahaan, gereja, dan lembaga pelatihan untuk membuka pintu kesempatan seluas mungkin.",
  },
];

const impactHighlights = [
  {
    year: "2015",
    title: "Awal Pelayanan",
    description:
      "Christianity Crisis Center berdiri sebagai respon atas kebutuhan pekerjaan jemaat lokal di Jakarta Utara.",
  },
  {
    year: "2008",
    title: "Pusat Pelatihan Diresmikan",
    description:
      "Fasilitas pelatihan hospitality dan pelayanan kapal pesiar mulai beroperasi dengan sertifikasi nasional.",
  },
  {
    year: "2020",
    title: "Transformasi Digital",
    description:
      "Program mentoring hybrid dan platform job matching pertama kali diluncurkan untuk menjangkau komunitas diaspora.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-offWhite text-textBlack">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-darkGray py-24 text-primaryWhite">
          <Image
            src="/images/hero.jpg"
            alt="Relawan Christianity Crisis Center yang melayani komunitas"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/75 to-black/40" />

          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 text-left md:flex-row md:items-center md:px-6">
            <div className="md:w-2/3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primaryRed/80">
                Tentang Komunitas
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Jembatan Karier dan Pelayanan bagi Komunitas Kristen Jakarta
              </h1>
              <p className="mt-6 text-base text-primaryWhite/85 md:text-lg">
                Christianity Crisis Center (CCC) mendampingi generasi muda,
                keluarga, dan jemaat yang ingin berkembang dalam karier tanpa
                meninggalkan nilai-nilai iman. Kami memadukan pelatihan
                profesional, dukungan rohani, dan akses peluang kerja yang etis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="bg-primaryRed text-primaryWhite hover:bg-secondaryRed"
                  asChild
                >
                  <Link href="/apply-now" className="flex items-center gap-2">
                    Gabung Program Karier
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-primaryWhite/40 bg-white/10 text-primaryWhite hover:bg-primaryWhite/20"
                  asChild
                >
                  <Link
                    href="/training-center"
                    className="flex items-center gap-2"
                  >
                    Jelajahi Pelatihan
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-primaryWhite/10 p-6 backdrop-blur-sm md:w-1/3">
              <h2 className="text-lg font-semibold text-primaryWhite">
                Komitmen Kami
              </h2>
              <p className="mt-4 text-sm text-primaryWhite/80">
                Kami percaya setiap anggota komunitas memiliki talenta unik. CCC
                hadir sebagai ruang aman untuk belajar, bertumbuh, dan menemukan
                panggilan kerja yang berdampak.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-primaryRed/10 bg-primaryWhite p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-medium text-primaryRed/80">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-primaryRed">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm text-darkGray/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primaryWhite py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:px-6">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-textBlack">
                Mengakar dalam Pelayanan, Bergerak dengan Profesionalisme
              </h2>
              <p className="mt-4 text-base text-darkGray/80">
                CCC dimulai dari kelompok doa kecil yang ingin memastikan tidak
                ada anggota jemaat yang tertinggal secara ekonomi. Kini kami
                mengelola program pengembangan karier, beasiswa sertifikasi,
                hingga dukungan keluarga pekerja migran.
              </p>
              <p className="mt-4 text-base text-darkGray/80">
                Kami memprioritaskan dampak komunal: setiap peserta didampingi
                sebelum, selama, dan setelah penempatan kerja. Relasi kami
                dengan gereja lokal membantu memastikan dukungan pastoral
                berjalan beriringan dengan pencapaian karier.
              </p>
            </div>
            <div className="md:w-1/2 space-y-6">
              {communityPillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="border-primaryRed/20 bg-primaryWhite/90 shadow-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primaryRed">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-darkGray/80">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-textBlack">
              Tonggak Pertumbuhan Komunitas
            </h2>
            <p className="mt-3 text-base text-darkGray/80">
              Perjalanan kami adalah bukti penyertaan Tuhan dan dukungan
              komunitas dalam memberdayakan generasi pekerja Kristen.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {impactHighlights.map((item) => (
              <Card
                key={item.year}
                className="border-primaryRed/15 bg-offWhite/80 shadow-sm"
              >
                <CardHeader className="space-y-3">
                  <span className="text-sm font-semibold uppercase tracking-widest text-primaryRed/70">
                    {item.year}
                  </span>
                  <CardTitle className="text-xl text-textBlack">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-darkGray/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primaryRed via-secondaryRed to-primaryRed py-16 text-primaryWhite">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center md:px-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Siap Bertumbuh Bersama Komunitas CCC?
            </h2>
            <p className="text-base text-primaryWhite/85 md:text-lg">
              Mari terlibat dalam program mentoring, kelas persiapan karier,
              atau dukungan pelayanan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="bg-primaryWhite text-primaryRed hover:bg-primaryWhite/90"
                asChild
              >
                <Link href="/apply-now">Daftar Sekarang</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primaryWhite text-primaryWhite hover:bg-primaryWhite/10"
                asChild
              >
                <Link href="/hubungi-kami">Hubungi Tim CCC</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
