import { useState, useEffect } from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { getAllRecruitments } from "../../../services/client/recruitments";

const Recruitment = () => {
  const [recruitmentDetails, setRecruitmentDetails] = useState([]);
  const [filteredRecruitments, setFilteredRecruitments] = useState([]);
  const [filters, setFilters] = useState({
    position: "Tất cả",
    hospital: "Tất cả",
    level: "Tất cả",
    profession: "Tất cả",
  });

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const data = await getAllRecruitments();
        setRecruitmentDetails(data);
        setFilteredRecruitments(data);
      } catch (err) {
        console.error("Error fetching recruitments:", err);
      }
    };
    fetchRecruitments();
  }, []);

  useEffect(() => {
    let filtered = recruitmentDetails;

    if (filters.position !== "Tất cả") {
      filtered = filtered.filter(r => r.position === filters.position);
    }
    if (filters.hospital !== "Tất cả") {
      filtered = filtered.filter(r => r.hospital === filters.hospital);
    }
    if (filters.level !== "Tất cả") {
      filtered = filtered.filter(r => r.level === filters.level);
    }
    if (filters.profession !== "Tất cả") {
      filtered = filtered.filter(r => r.profession === filters.profession);
    }

    setFilteredRecruitments(filtered);
  }, [filters, recruitmentDetails]);

  return (
    <div>
      <PageBanner
        title="Tuyển dụng"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tuyển dụng", active: true },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-5 gap-10">
        {/* Bộ lọc */}
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">🧰 Bộ lọc</h2>
          <button onClick={() => setFilters({ position: "Tất cả", hospital: "Tất cả", level: "Tất cả", profession: "Tất cả" })} className="text-blue-600 hover:underline">Làm mới</button>

          {[
            { label: "Vị trí", key: "position" },
            { label: "Bệnh viện", key: "hospital" },
            { label: "Cấp bậc/Chức danh", key: "level" },
            { label: "Ngành nghề ứng tuyển", key: "profession" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block font-medium mb-1">{label}</label>
              <select
                value={filters[key]}
                onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              >
                <option value="Tất cả">Tất cả</option>
                {[...new Set(recruitmentDetails.map(item => item[key]))]
                  .filter(Boolean)
                  .map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
              </select>
            </div>
          ))}
        </div>

        {/* Danh sách tuyển dụng */}
        <div className="md:col-span-4 space-y-6">
          {filteredRecruitments.length === 0 ? (
            <p>Không có thông báo tuyển dụng phù hợp.</p>
          ) : (
            filteredRecruitments.map((item, idx) => (
              <div key={idx} className="border-b pb-4">
              <a href="/chi-tiet-tuyen-dung">
                              <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1">🕒 Hạn nộp hồ sơ: <span className="text-red-500 font-medium">{item.deadline}</span></p>
</a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
