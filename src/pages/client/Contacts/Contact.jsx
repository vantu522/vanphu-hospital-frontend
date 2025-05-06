import React from 'react'
import PageBanner from '../../../components/client/PageBanner'
import dichvu from '../../../assets/images/dichvu.png'
import Button from '../../../components/client/ui/button'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Xử lý gửi form ở đây
        console.log('Form submitted')
    }

    return (
        <div>
            <PageBanner
                backgroundImage={dichvu}
                title="Liên hệ"
                breadcrumbs={[
                    {label: 'Trang chủ', href: '/'},
                    {label: 'Liên hệ', active: true}
                ]}
            />
            
            <div className="container mx-auto py-16 px-4">
                <div className="flex flex-col md:flex-row gap-8"> 
                    {/* Cột trái - Form liên hệ */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi thông tin liên hệ</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Họ và tên</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Nhập họ và tên của bạn"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Số điện thoại</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Nhập số điện thoại của bạn"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Nhập địa chỉ email của bạn"
                                    />
                                </div>
                                
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Lời nhắn</label>
                                    <textarea 
                                        id="message" 
                                        rows="5" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Nhập lời nhắn của bạn"
                                        required
                                    ></textarea>
                                </div>
                                
                                

                                <Button>
                                    Gửi thông tin
                                </Button>


                            </form>
                        </div>
                    </div>
                    
                    {/* Cột phải - Thông tin liên hệ */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông tin liên hệ</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Giờ làm việc</h3>
                                    <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                                    <p className="text-gray-600">Thứ 7: 8:00 - 12:00</p>
                                    <p className="text-gray-600">Chủ nhật: Nghỉ</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Địa chỉ</h3>
                                    <p className="text-gray-600">Số 123 Đường ABC, Phường XYZ, Quận/Huyện, Thành phố, Việt Nam</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Liên hệ</h3>
                                    <div className="flex items-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-600">Điện thoại: 0123 456 789</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-600">Hotline: 1900 1234</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-600">Email: info@example.com</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Giấy phép kinh doanh</h3>
                                    <p className="text-gray-600">Số giấy phép: 0123456789</p>
                                    <p className="text-gray-600">Nơi cấp: Sở Kế hoạch và Đầu tư TP...</p>
                                    <p className="text-gray-600">Ngày cấp: 01/01/2022</p>
                                </div>
                            </div>
                            
                            {/* Bản đồ */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bản đồ</h3>
                                <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                                    {/* Ở đây bạn có thể nhúng Google Maps hoặc bản đồ khác */}
                                    <p className="text-gray-500">Bản đồ Google Maps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact