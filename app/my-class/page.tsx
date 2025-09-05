import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CirclePlay, Clock8, Play, UsersRound } from "lucide-react";
import Link from "next/link";

const MyClass = () => {
  return (
    <div>
      <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10 px-6">
        {/* Header Section */}
        <section className="flex items-stretch text-2xl font-bold mb-8">
          <div className="text-black">Daftar Kelas</div>
        </section>
        {/* Data Class */}
        <section className="grid grid-cols-3">
          <div className="py-2 space-y-6">
            <div>
              <input
                type="text"
                placeholder="Cari kelas..."
                className="flex-1 w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              />
            </div>
            <div className="px-4 py-6 border border-black rounded-lg">
              <h4 className="text-lg font-bold">Kelas Brevet Pajak AB</h4>
              <div className="flex justify-start space-x-16 mt-8">
                <div className="space-y-4">
                  <Badge className="rounded-sm bg-[#333333] text-xs text-white font-light">
                    Start Date
                  </Badge>
                  <p className="font-light text-gray-500 text-xs">
                    12 Okt - 12 Feb 2025
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-xs">20 Peserta</p>
                  <span className="inline-flex items-center -space-x-4">
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                  </span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <p className="font-light text-xs text-gray-500">Progress</p>
                  <p className="font-bold text-xs text-[#333333]">75%</p>
                </div>
                <Progress value={100} className="h-5 bg-zinc-900 rounded-sm" />
              </div>
            </div>
            <div className="px-4 py-6 border border-black rounded-lg">
              <h4 className="text-lg font-bold">Kelas Brevet Pajak AB</h4>
              <div className="flex justify-start space-x-16 mt-8">
                <div className="space-y-4">
                  <Badge className="rounded-sm bg-[#333333] text-xs text-white font-light">
                    Start Date
                  </Badge>
                  <p className="font-light text-gray-500 text-xs">
                    12 Okt - 12 Feb 2025
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-xs">20 Peserta</p>
                  <span className="inline-flex items-center -space-x-4">
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                    <Avatar className="size-10 border">
                      <AvatarImage
                        src={
                          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                        }
                        alt={""}
                      />
                    </Avatar>
                  </span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <p className="font-light text-xs text-gray-500">Progress</p>
                  <p className="font-bold text-xs text-[#333333]">75%</p>
                </div>
                <Progress value={100} className="h-5 bg-zinc-900 rounded-sm" />
              </div>
            </div>
          </div>
          <div className="col-span-2 py-0 ml-10">
            <div className="py-8 px-8 space-y-10 w-full bg-[#333333] rounded-lg">
              <h4 className="text-3xl text-white font-normal">
                Kelas Brevet Pajak AB
              </h4>
              <div className="flex justify-start gap-12">
                <div className="flex justify-start gap-2">
                  <Clock8 size={16} className="text-white" />
                  <p className="font-light text-xs text-white">140 Menit</p>
                </div>
                <div className="flex justify-start gap-2">
                  <CirclePlay size={16} className="text-white" />
                  <p className="font-light text-xs text-white">22 Video</p>
                </div>
                <div className="flex justify-start gap-2">
                  <UsersRound size={16} className="text-white" />
                  <p className="font-light text-xs text-white">30 Member</p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-6 mt-5">
              <Tabs defaultValue="Class-Activity" className="w-full">
                <TabsList className="w-full flex justify-start py-9 gap-6 rounded-lg pl-4">
                  <TabsTrigger
                    value="Class-Activity"
                    className="py-5 px-6 rounded-lg"
                  >
                    Aktifitas Kelas
                  </TabsTrigger>
                  <TabsTrigger
                    value="Class-Schedule"
                    className="py-5 px-6 rounded-lg"
                  >
                    Jadwal Kelas
                  </TabsTrigger>
                  <TabsTrigger
                    value="Class-Discussion"
                    className="py-5 px-6 rounded-lg"
                  >
                    Diskusi Kelas
                  </TabsTrigger>
                  <TabsTrigger
                    value="Class-Materials"
                    className="py-5 px-6 rounded-lg"
                  >
                    Bahan Belajar
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Class-Activity">
                  <div className="flex justify-start gap-4 py-4">
                    <div className="bg-gray-50 w-7/12 py-3 px-4 rounded-lg">
                      <h4 className="text-lg font-bold">
                        PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                      </h4>
                      <Button className="mt-12 bg-transparent text-[#333333] font-semibold hover:text-black  hover:bg-gray-50 px-0">
                        Lanjutkan Belajar <CirclePlay />
                      </Button>
                    </div>
                    <div className="bg-gray-50 w-5/12 py-3 rounded-lg px-4">
                      <div className="flex justify-start gap-6">
                        <div className="text-center">
                          <h4 className="text-xs">November</h4>
                          <p className="font-bold">22</p>
                          <p className="text-xs">2024</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold">
                            Ketentuan Umum Perpajakan : KUP A
                          </h4>
                          <p className="text-xs text-gray-400">09.00 - 12.15</p>
                        </div>
                      </div>
                      <div className="flex justify-start gap-8  mt-10 ">
                        <div className="">
                          <Avatar className="size-12 border">
                            <AvatarImage
                              src={
                                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                              }
                              alt={""}
                            />
                          </Avatar>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400">Pengajar</p>
                          <h4 className="text-xs font-semibold">
                            Prof Soeharto
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="bg-[#333333] w-full py-6 px-6 rounded-lg">
                      <h4 className="text-sm max-w-64 text-white leading-normal font-semibold">
                        PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                      </h4>
                      <div className="flex justify-start gap-10 mt-4">
                        <div className="flex justify-start gap-2">
                          <CirclePlay size={16} className="text-white" />
                          <p className="font-light text-xs text-white">
                            22 Video
                          </p>
                        </div>
                        <div className="flex justify-start gap-2">
                          <Clock8 size={14} className="text-white" />
                          <p className="font-light text-xs text-white">
                            140 Menit
                          </p>
                        </div>
                      </div>
                      <Link
                        href={"/my-class/video-class"}
                        className="bg-white w-44 rounded-sm text-[#333333] mt-12 hover:bg-slate-100 flex justify-between font-semibold px-4 py-2 text-xs"
                      >
                        <div className="mt-1">Lanjutkan Belajar</div>
                        <div>
                          <CirclePlay />
                        </div>
                      </Link>
                    </div>
                    <div className="bg-[#333333] w-full py-6 px-6 rounded-lg">
                      <h4 className="text-sm max-w-64 text-white leading-normal font-semibold">
                        PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                      </h4>
                      <div className="flex justify-start gap-10 mt-4">
                        <div className="flex justify-start gap-2">
                          <CirclePlay size={16} className="text-white" />
                          <p className="font-light text-xs text-white">
                            22 Video
                          </p>
                        </div>
                        <div className="flex justify-start gap-2">
                          <Clock8 size={14} className="text-white" />
                          <p className="font-light text-xs text-white">
                            140 Menit
                          </p>
                        </div>
                      </div>
                      <Link
                        href={"/my-class/video-class"}
                        className="bg-white text-[#333333] w-44 rounded-sm mt-12 hover:bg-slate-100 flex justify-between font-semibold px-4 py-2 text-xs"
                      >
                        <div className="mt-1">Lanjutkan Belajar</div>
                        <div>
                          <CirclePlay />
                        </div>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Class-Schedule">B</TabsContent>
                <TabsContent value="Class-Discussion">C</TabsContent>
                <TabsContent value="Class-Materials">D</TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyClass;
