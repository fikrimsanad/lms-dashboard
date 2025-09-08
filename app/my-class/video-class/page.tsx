import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlay, Clock8 } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import Link from "next/link";

function VideoClass() {
  return (
    <div className="flex gap-2">
      <div className="py-8 px-8 w-[68%] space-y-6">
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <h3 className="font-bold text-lg">Master Figma Design :</h3>
            <h3 className="font-light text-lg">
              Part 15 : Foundation User Flow
            </h3>
          </div>
          <div>
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800 hover:cursor-pointer rounded-full">
              Tandai Sudah Selesai
            </Button>
          </div>
        </div>
        <div className="py-52 px-10 bg-amber-300"></div>
        <div className="py-5 px-5">
          <div className="flex w-full gap-6">
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
                        <h4 className="text-xs font-semibold">Prof Soeharto</h4>
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
      </div>
      <div className="py-8 w-[30%]">
        <h3 className="font-bold text-lg">Video Materi :</h3>
      </div>
    </div>
  );
}

export default VideoClass;
