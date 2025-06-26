import PageBanner from "../../PageBanner";
import dichvu from "../../../../assets/images/dichvu.png";
import imgabout from "../../../../assets/images/doctors/bs_1.jpg";
import Button from "../../ui/button";

export default function AboutUs() {
  return (
    <div className="relative">
      <PageBanner
        title="Giới thiệu"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu", active: true },
        ]}
      />

      {/* Phần giới thiệu chính */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
        {/* Left Section  */}
        <div className="text-[100px] font-bold text-green-800 leading-none">
          20
        </div>
        <div className="uppercase font-semibold text-base tracking-wide mt-4 text-gray-800">
          Năm kinh nghiệm
          <br />
          trên thị trường y tế Việt Nam
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="relative w-full max-w-md">
            <img
              src={imgabout}
              alt="Hình ảnh bác sĩ Văn Phú" 
              className="w-full shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giới thiệu về Văn Phú
            </h2>
          <p className="text-gray-700 mb-4">
            Năm 2003, Bệnh viện Đa khoa Văn Phú   được thành lập, là bệnh viện
            tư nhân tại miền Bắc tiên phong trong mô hình "bệnh viện - khách
            sạn" với cơ sở vật chất đạt tiêu chuẩn quốc tế. Hơn 20 năm hình
            thành và phát triển, Văn Phú  đã trở thành một trong những bệnh
            viện tư nhân hàng đầu khu vực miền Bắc Việt Nam.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>
              Hơn 250 chuyên gia y tế chuyên môn cao, giàu kinh nghiệm, được đào
              tạo chuyên sâu trong và ngoài nước
            </li>
            <li>
              Bệnh viện ở miền Bắc được xây dựng theo mô hình Bệnh viện xanh -
              thông minh
            </li>
            <li>
              Đơn vị được chứng nhận đạt tiêu chuẩn chăm sóc sức khỏe theo
              EQUIP6 từ ACHS International
            </li>
          </ul>
          <div className="mt-3">
            <Button>Xem thêm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
