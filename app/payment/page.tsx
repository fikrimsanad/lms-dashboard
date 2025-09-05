import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Payment() {
  return (
    <div className="flex flex-col px-6 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pembayaran</h1>
        <p className="text-gray-600 mt-2">
          Kelola profil dan preferensi akun Anda
        </p>
      </div>
      <Card className="mb-6 border-zinc-300">
        <CardHeader>
          <CardTitle className="text-lg">Filter & Sorting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Cari Transaksi
              </label>
              <Input
                className="w-full border-zinc-300"
                placeholder="Cari berdasarkan ID / deskripsi..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Status
              </label>
              <Select>
                <SelectTrigger className="border-zinc-300 w-full">
                  <SelectValue placeholder="Pilih Status" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="Berhasil">Berhasil</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Gagal">Gagal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Urutkan Berdasarkan
              </label>
              <Select value={""}>
                <SelectTrigger className="border-zinc-300 w-full">
                  <SelectValue placeholder="Pilih Sorting" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="date">Tanggal</SelectItem>
                  <SelectItem value="amount">Jumlah</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="description">Deskripsi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Urutan
              </label>
              <Select>
                <SelectTrigger className="border-zinc-300 w-full">
                  <SelectValue placeholder="Pilih Urutan" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="desc">Terbaru ke Terlama</SelectItem>
                  <SelectItem value="asc">Terlama ke Terbaru</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-zinc-300">
        <CardHeader>
          <CardTitle className="text-lg">Riwayat Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-zinc-300">
            <Table className="border-zinc-300">
              <TableHeader>
                <TableRow className="bg-gray-100 border-zinc-300 text-gray-500">
                  <TableHead>ID Transaksi</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Deskripsi</TableHead>
                  <TableHead>Metode Pembayaran</TableHead>
                  <TableHead className="text-left">Jumlah</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                <TableRow className="border-zinc-300 h-12">
                  <TableCell className="font-medium">1122</TableCell>
                  <TableCell className="">12/03/2025</TableCell>
                  <TableCell className="">
                    Pembayaran Workshop Tax Planning
                  </TableCell>
                  <TableCell className=""> Transfer Bank</TableCell>
                  <TableCell className="text-left font-medium ">
                    Rp 1.200.000,00
                  </TableCell>
                  <TableCell className="">Berhasil</TableCell>
                </TableRow>
                <TableRow className="border-zinc-300 h-12">
                  <TableCell className="font-medium">1122</TableCell>
                  <TableCell className="">12/03/2025</TableCell>
                  <TableCell className="">
                    Pembayaran Workshop Tax Planning
                  </TableCell>
                  <TableCell className=""> Transfer Bank</TableCell>
                  <TableCell className="text-left font-medium ">
                    Rp 1.200.000,00
                  </TableCell>
                  <TableCell className="">Berhasil</TableCell>
                </TableRow>
                <TableRow className="border-zinc-300 h-12">
                  <TableCell className="font-medium">1122</TableCell>
                  <TableCell className="">12/03/2025</TableCell>
                  <TableCell className="">
                    Pembayaran Workshop Tax Planning
                  </TableCell>
                  <TableCell className=""> Transfer Bank</TableCell>
                  <TableCell className="text-left font-medium ">
                    Rp 1.200.000,00
                  </TableCell>
                  <TableCell className="">Berhasil</TableCell>
                </TableRow>
                <TableRow className="border-zinc-300 h-12">
                  <TableCell className="font-medium">1122</TableCell>
                  <TableCell className="">12/03/2025</TableCell>
                  <TableCell className="">
                    Pembayaran Workshop Tax Planning
                  </TableCell>
                  <TableCell className=""> Transfer Bank</TableCell>
                  <TableCell className="text-left font-medium ">
                    Rp 1.200.000,00
                  </TableCell>
                  <TableCell className="">Berhasil</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Payment;
