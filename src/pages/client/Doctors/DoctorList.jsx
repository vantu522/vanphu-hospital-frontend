import React from "react";
import dichvu from '../../../assets/images/dichvu.png'
import PageBanner from "../../../components/client/PageBanner";

const DoctorList = () =>{

    return (
        <div className="relative">
              <PageBanner
              backgroundImage={dichvu}
              title="Danh sách bác sĩ"
              breadcrumbs={[
                { label: "Trang chủ", href: "/" },
        { label: "Danh sách bác sĩ", active: true }
              ]}
              />
        </div>

      
        
    )
}

export default DoctorList;