import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function Setting() {
  return (
    <div className="flex flex-col px-6 py-10">
      <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
        {/* Header Section */}

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Pengaturan</h1>
          <p className="text-gray-600 mt-2">
            Kelola profil dan preferensi akun Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture Section */}
          <Card className="lg:col-span-1 border-zinc-300">
            <CardHeader>
              <CardTitle>Foto Profil</CardTitle>
              <CardDescription>
                Unggah foto profil untuk personalisasi akun Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                className="w-full text-white bg-zinc-900"
              >
                Ubah Foto
              </Button>
              <p className="text-sm text-gray-500 text-center">
                JPG, PNG maksimal 2MB
              </p>
            </CardContent>
          </Card>

          {/* Profile Form Section */}
          <Card className="lg:col-span-2 border-zinc-300">
            <CardHeader>
              <CardTitle>Informasi Profil</CardTitle>
              <CardDescription>
                Perbarui informasi profil dan detail kontak Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      className="border-zinc-300"
                      id="name"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-zinc-300"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      className="border-zinc-300"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      className="border-zinc-300"
                      placeholder="Masukkan lokasi"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Pendidikan</Label>
                  <Input
                    id="education"
                    className="border-zinc-300"
                    placeholder="Masukkan riwayat pendidikan"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Ceritakan tentang diri Anda..."
                    className="min-h-[100px] border-zinc-300"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 text-white bg-zinc-900"
                  >
                    Simpan Perubahan
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Batal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Settings */}
        <div className="mt-6 space-y-6">
          <Card className="border-zinc-300">
            <CardHeader>
              <CardTitle>Keamanan</CardTitle>
              <CardDescription>
                Kelola kata sandi dan pengaturan keamanan akun
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full md:w-auto">
                  Ubah Kata Sandi
                </Button>
                <Button
                  variant="outline"
                  className="w-full md:w-auto ml-0 md:ml-4"
                >
                  Aktifkan Two-Factor Authentication
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-300">
            <CardHeader>
              <CardTitle>Preferensi</CardTitle>
              <CardDescription>
                Atur preferensi notifikasi dan tampilan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Notifikasi Email</span>
                  <Button variant="outline" size="sm">
                    Aktif
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Notifikasi Push</span>
                  <Button variant="outline" size="sm">
                    Nonaktif
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mode Gelap</span>
                  <Button variant="outline" size="sm">
                    Nonaktif
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Setting;
