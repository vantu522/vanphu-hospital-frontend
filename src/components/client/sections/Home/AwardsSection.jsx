import ImgAward1 from '../../../../assets/images/cretificate/cretificateone.jpg';
import ImgAward2 from '../../../../assets/images/cretificate/cretificatetwo.png';
import ImgAward3 from '../../../../assets/images/cretificate/cretificatethree.png';
const awards = [
    {
      img: ImgAward1,
      description:
        "Bệnh viện Văn Phú đạt tiêu chuẩn ACHSI - Úc (Tiêu chuẩn chăm sóc sức khỏe tại Úc)",
    },
    {
      img: ImgAward2,
      description:
        "Hiệp hội Phẫu thuật Hoàng gia Anh (RCS) công nhận là trung tâm đào tạo chuẩn toàn cầu về ngoại khoa",
    },
    {
      img: ImgAward3,
      description:
        'Danh hiệu "Bệnh viện thực hành nuôi con bằng sữa mẹ xuất sắc" Theo tiêu chuẩn của Bộ Y tế và Tổ chức Y tế Thế giới (WHO)',
    },
  ];
  
  const AwardsSection = () => {
    return (
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Chứng chỉ - giải thưởng</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Là minh chứng cho năng lực và sự nỗ lực không ngừng nghỉ của đội ngũ cán bộ nhân viên Hệ thống y tế Hồng Ngọc
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <img
                  src={item.img}
                  alt={`Award ${i + 1}`}
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-gray-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AwardsSection;
  