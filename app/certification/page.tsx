import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, Calendar, CheckCircle, Clock } from "lucide-react";

function Certification() {
  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sertifikasi</h1>
        <p className="text-muted-foreground">
          Tingkatkan karir Anda dengan sertifikasi profesional
        </p>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <Award className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-foreground">
          Sertifikat Saya
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card className="border-zinc-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-lg">
                  React Developer Professional
                </CardTitle>
                <CardDescription>Tech Academy</CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">100%</span>
              </div>
              <Progress value={100} className="h-2 bg-zinc-900" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Tanggal Lulus</p>
                <p className="font-medium">12-Feb-2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Berlaku Hingga</p>
                <p className="font-medium">12-Feb-2028</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Certificate ID</p>
              <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                JS2024001
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Download Sertifikat
            </Button>
          </CardContent>
        </Card>
        <Card className="border-zinc-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-lg">
                  React Developer Professional
                </CardTitle>
                <CardDescription>Tech Academy</CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">100%</span>
              </div>
              <Progress value={100} className="h-2 bg-zinc-900" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Tanggal Lulus</p>
                <p className="font-medium">12-Feb-2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Berlaku Hingga</p>
                <p className="font-medium">12-Feb-2028</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Certificate ID</p>
              <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                JS2024001
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Download Sertifikat
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-foreground">
          Sertifikasi Tersedia
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow border-zinc-300">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-lg">Full Stack JavaScript</CardTitle>
              <CardDescription className="text-zinc-500">
                Tech Academy
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">Intermediate</Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Clock className="h-3 w-3 mr-1" />4 Minggu
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-zinc-500">
              Sertifikasi pengembangan aplikasi React untuk level profesional
            </p>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Skills yang dipelajari:
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs border-zinc-300">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Intermediate
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Redux
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-primary">
                  Rp 2.500.000
                </span>
              </div>
              <Button className="w-full bg-zinc-900 text-white">
                Daftar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow border-zinc-300">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-lg">Full Stack JavaScript</CardTitle>
              <CardDescription className="text-zinc-500">
                Tech Academy
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">Intermediate</Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Clock className="h-3 w-3 mr-1" />4 Minggu
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-zinc-500">
              Sertifikasi pengembangan aplikasi React untuk level profesional
            </p>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Skills yang dipelajari:
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs border-zinc-300">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Intermediate
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Redux
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-primary">
                  Rp 2.500.000
                </span>
              </div>
              <Button className="w-full bg-zinc-900 text-white">
                Daftar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow border-zinc-300">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-lg">Full Stack JavaScript</CardTitle>
              <CardDescription className="text-zinc-500">
                Tech Academy
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">Intermediate</Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Clock className="h-3 w-3 mr-1" />4 Minggu
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-zinc-500">
              Sertifikasi pengembangan aplikasi React untuk level profesional
            </p>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Skills yang dipelajari:
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs border-zinc-300">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Intermediate
                </Badge>
                <Badge variant="outline" className="text-xs border-zinc-300">
                  Redux
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-primary">
                  Rp 2.500.000
                </span>
              </div>
              <Button className="w-full bg-zinc-900 text-white">
                Daftar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Certification;
