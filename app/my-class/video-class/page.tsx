import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckLine, CirclePlay, Clock8, SquarePlay } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/shadcn-io/video-player";

import React from "react";
import Link from "next/link";

function VideoClass() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="py-8 px-8 w-[65%] space-y-6">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
              <h3 className="font-bold text-2xl">Master Figma Design :</h3>
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
          <div className="py-4">
            <VideoPlayer className="overflow-hidden rounded-lg border">
              <VideoPlayerContent
                crossOrigin=""
                muted
                preload="auto"
                slot="media"
                src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
              />
              <VideoPlayerControlBar>
                <VideoPlayerPlayButton />
                <VideoPlayerSeekBackwardButton />
                <VideoPlayerSeekForwardButton />
                <VideoPlayerTimeRange />
                <VideoPlayerTimeDisplay showDuration />
                <VideoPlayerMuteButton />
                <VideoPlayerVolumeRange />
              </VideoPlayerControlBar>
            </VideoPlayer>
          </div>
        </div>
        <div className="py-8 w-[32%]">
          <h3 className="font-bold text-lg">Video Materi :</h3>
          <div className="space-y-2 mt-6">
            <Link
              href={""}
              className="py-4 w-full px-4 border border-zinc-300 hover:border-zinc-400 rounded-lg flex gap-3 "
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm">
                    PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                  </h3>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Clock8 size={15} color="gray" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-400">45 Menit</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={""}
              className="py-4 w-full px-4 border border-zinc-300 hover:border-zinc-400 rounded-lg flex gap-3 "
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm">
                    PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                  </h3>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Clock8 size={15} color="gray" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-400">45 Menit</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={""}
              className="py-4 w-full px-4 border border-zinc-300 hover:border-zinc-400 rounded-lg flex gap-3 "
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm">
                    PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                  </h3>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Clock8 size={15} color="gray" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-400">45 Menit</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={""}
              className="py-4 w-full px-4 border border-zinc-300 hover:border-zinc-400 rounded-lg flex gap-3 "
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm">
                    PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                  </h3>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Clock8 size={15} color="gray" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-400">45 Menit</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-5 px-5">
        <div className="grid grid-cols-3">
          <div className="col-span-2 px-8">
            <Tabs defaultValue="Class-Activity" className="w-full">
              <TabsList className="w-full flex justify-start py-9 gap-2 rounded-lg">
                <TabsTrigger
                  value="Class-Activity"
                  className="py-5 px-6 rounded-lg"
                >
                  Informasi Kelas
                </TabsTrigger>
                <TabsTrigger
                  value="Class-Schedule"
                  className="py-5 px-6 rounded-lg"
                >
                  Diskusi
                </TabsTrigger>
                <TabsTrigger
                  value="Class-Discussion"
                  className="py-5 px-6 rounded-lg"
                >
                  Review Kelas
                </TabsTrigger>
                <TabsTrigger
                  value="Class-Materials"
                  className="py-5 px-6 rounded-lg"
                >
                  Bahan Belajar
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Class-Activity">a</TabsContent>
              <TabsContent value="Class-Schedule">B</TabsContent>
              <TabsContent value="Class-Discussion">C</TabsContent>
              <TabsContent value="Class-Materials">D</TabsContent>
            </Tabs>
          </div>
          <div>
            <Link
              href={"/my-class"}
              className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] px-6 py-4 rounded-[10px]  hover:bg-gray-300 transition-colors w-full"
            >
              <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto">
                <div className="self-stretch">November</div>
                <div className="text-lg mt-1 font-bold">22</div>
                <div className="mt-1">2025</div>
              </div>
              <div className="flex flex-col items-stretch text-sm text-left">
                <div className="text-black">
                  Ketentuan Umum Perpajakan KUP A
                </div>
                <div className="text-[rgba(131,131,131,1)] mt-[11px]">
                  09.00 - 12.15
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoClass;
