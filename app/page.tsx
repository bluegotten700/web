import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, BookOpen, Users, Newspaper, Mail, MapPin } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-primary text-primary-foreground shadow-md">
        <Link className="flex items-center gap-2" href="#">
          <Image
            src="/school-logo-tea-child.png"
            alt="Trà Chân School Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-tight">Trà Chan</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-1" href="#home">
            <Home className="h-5 w-5" /> Trang Chủ
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-1"
            href="#about"
          >
            <Users className="h-5 w-5" /> Giới Thiệu
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-1"
            href="#programs"
          >
            <BookOpen className="h-5 w-5" /> Chương Trình
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-1" href="#news">
            <Newspaper className="h-5 w-5" /> Sinh Hoạt
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-1"
            href="#contact"
          >
            <Mail className="h-5 w-5" /> Liên Hệ
          </Link>
        </nav>
        <Button className="md:hidden" variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Trường Tiểu Học Trà Chan
                </h1>
                <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                  Nơi ươm mầm tri thức, chắp cánh ước mơ cho những trái tim hiếu học.
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Trà Chan là ngôi trường phi lợi nhuận, hoạt động vì cộng đồng, cam kết mang đến môi trường học tập thân
                thiện, chất lượng cho mọi học sinh, đặc biệt là những em có hoàn cảnh khó khăn nhưng luôn nỗ lực vươn
                lên.
              </p>
            </div>
            <Image
              alt="Vietnamese elementary school students playing happily"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="400"
              src="/vietnamese-students-playing.png"
              width="600"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
            <Image
              alt="Vietnamese teacher helping a student one-on-one"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full"
              height="400"
              src="/vietnamese-teacher-student.png"
              width="600"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Giới Thiệu
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trường Tiểu Học Trà Chan được thành lập với sứ mệnh cao cả: cung cấp một nền giáo dục chất lượng, nhân
                  văn và hoàn toàn miễn phí cho trẻ em trong cộng đồng, đặc biệt là những em có hoàn cảnh khó khăn.
                  Chúng tôi tin rằng mọi đứa trẻ đều xứng đáng có cơ hội được học tập, phát triển toàn diện và xây dựng
                  một tương lai tươi sáng.
                </p>
              </div>
              <p className="max-w-[900px] text-muted-foreground md:text-lg">
                Tại nơi đây, chúng tôi không chỉ truyền đạt kiến thức mà còn nuôi dưỡng tâm hồn, rèn luyện kỹ năng sống
                và khơi dậy niềm đam mê học hỏi. Đội ngũ giáo viên tận tâm, giàu kinh nghiệm luôn đồng hành cùng các em,
                tạo nên một môi trường học tập tràn đầy yêu thương và sự thấu hiểu. Chúng tôi tự hào là mái nhà thứ hai,
                nơi các em được là chính mình, được khám phá tiềm năng và tự tin vươn lên.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Chương Trình Giáo Dục
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trường cung cấp một chương trình học thực tiễn, kết hợp giữa kiến thức học thuật và phát triển kỹ
                năng mềm, giúp học sinh phát triển toàn diện.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="Children learning in a bright classroom in Vietnam"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnamese-classroom.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Chương Trình Học</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chương trình giảng dạy theo chuẩn Bộ Giáo dục và Đào tạo, được thiết kế sáng tạo để khơi gợi niềm yêu
                  thích học tập ở các em.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="Vietnamese students participating in an outdoor activity"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnamese-students-outdoor-activity.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Hoạt Động Ngoại Khóa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Các hoạt động thể thao, nghệ thuật, dã ngoại giúp học sinh phát triển thể chất, tinh thần và kỹ năng
                  xã hội.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="Vietnamese students in a computer lab"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnamese-students-computer-lab.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Phát Triển Kỹ Năng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tập trung vào kỹ năng tư duy phản biện, giải quyết vấn đề, làm việc nhóm và giao tiếp để chuẩn bị
                  cho tương lai.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Sinh Hoạt Học Sinh
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cập nhật những hoạt động mới nhất và các sự kiện đáng chú ý tại trường.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="Community event at a Vietnamese school"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnamese-school-event.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Lễ Khai Giảng Năm Học Mới</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ngày 05/09/2024 - Trường Tiểu Học Trà Chan hân hoan chào đón năm học mới với nhiều niềm vui và hy vọng.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="Students participating in a science fair in Vietnam"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnam-science-fair.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Hội Thi Khoa Học Sáng Tạo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ngày 20/10/2024 - Các em học sinh đã thể hiện tài năng và sự sáng tạo qua các dự án STEM độc đáo.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  alt="School children planting trees in Vietnam"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/vietnamese-children-planting.png"
                  width="300"
                />
                <CardTitle className="mt-4 text-primary">Ngày Hội Xanh Của Trường</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ngày 15/03/2025 - Học sinh cùng nhau trồng cây, góp phần bảo vệ môi trường và xây dựng không gian
                  xanh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Liên Hệ Với Trường Học
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trường luôn sẵn lòng lắng nghe và giải đáp mọi thắc mắc của mọi người.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl flex flex-col items-center gap-8 mt-8">
            {" "}
            {/* Đã thay đổi ở đây */}
            <div className="flex flex-col space-y-4 text-center">
              {" "}
              {/* Thêm text-center để căn giữa */}
              <div className="flex items-center justify-center gap-2 text-lg">
                {" "}
                {/* Thêm justify-center */}
                <MapPin className="h-6 w-6 text-primary" />
                <span>Địa chỉ: 145 Ngô Quyền, Tân An, La Gi, Bình Thuận, Việt Nam</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg">
                {" "}
                {/* Thêm justify-center */}
                <PhoneIcon className="h-6 w-6 text-primary" />
                <span>Điện thoại: </span> {/* Thông tin giả định */}
              </div>
              <div className="flex items-center justify-center gap-2 text-lg">
                {" "}
                {/* Thêm justify-center */}
                <Mail className="h-6 w-6 text-primary" />
                <span>Email: lienhe@nonprofitedu.qzz.io</span> {/* Thông tin giả định */}
              </div>
              <Image
                alt="Google Map of 145 Ngo Quyen, Tan An, La Gi, Binh Thuan, Vietnam"
                className="w-full h-64 rounded-xl object-cover shadow-lg mt-4" // Thêm mt-4 để tạo khoảng cách
                height="300"
                src="/google-map-ngo-quyen-la-gi.png"
                width="500"
              />
            </div>
            {/* Đã xóa toàn bộ Card component chứa form ở đây */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-sm">&copy; 2025 Trường Tiểu Học Trà Chan.</p>
      </footer>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
