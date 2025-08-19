import icongg from "../../assets/images/icongg.png";
import { useAuth } from "../../hooks/useAuth"; 

export default function SignUp() {  
  const {
    phone,
    setPhone,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    terms,
    setTerms,
    loading,
    setLoading,
    error,
    setError,
    passwordError,
    setPasswordError,
    handleSubmit
  } = useAuth();

  return (     
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">       
      <div className="sm:mx-auto sm:w-full sm:max-w-md">         
        <div className="text-center">           
          <h1 className="text-3xl font-bold text-gray-900 mb-2">             
            ĐĂNG KÝ TÀI KHOẢN           
          </h1>           
          <p className="text-lg text-gray-600">Tạo tài khoản mới</p>         
        </div>          
        <div className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden">           
          <div className="px-8 py-10">             
            <form className="space-y-5" onSubmit={handleSubmit}>               
              {error && <p className="text-red-500 text-sm">{error}</p>} {/* Hiển thị lỗi nếu có */} 
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} {/* Hiển thị lỗi mật khẩu không khớp */} 
              
              <div>                 
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>                 
                <input 
                  id="phone_number"  // Thay đổi id thành phone_number
                  name="phone_number"  // Thay đổi name thành phone_number
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" 
                  placeholder="Vui lòng nhập số điện thoại" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} // Cập nhật state khi nhập
                />               
              </div>                

              <div>                 
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu *</label>                 
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" 
                  placeholder="••••••••" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi nhập
                />                 
                <p className="mt-1 text-xs text-gray-500">Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số</p>               
              </div>                
              <div>                 
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu *</label>                 
                <input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" 
                  placeholder="••••••••" 
                  required 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật state khi nhập
                />               
              </div>                

              <div className="flex items-start">                 
                <div className="flex items-center h-5">                   
                  <input 
                    id="terms" 
                    name="terms" 
                    type="checkbox" 
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" 
                    required 
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)} // Cập nhật checkbox state
                  />                 
                </div>                 
                <div className="ml-3 text-sm">                   
                  <label htmlFor="terms" className="font-medium text-gray-700"> Tôi đồng ý với{" "} 
                    <a href="#" className="text-emerald-600 hover:text-emerald-500"> Điều khoản dịch vụ </a> và{" "} 
                    <a href="#" className="text-emerald-600 hover:text-emerald-500"> Chính sách bảo mật </a>                 
                  </label>                 
                </div>               
              </div>                

              <div>                 
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition" 
                  disabled={loading} // Disable nút khi đang gửi yêu cầu
                >
                  {loading ? "Đang đăng ký..." : "ĐĂNG KÝ"} 
                </button>               
              </div>             
            </form>              
          </div>          
        </div>       
      </div>     
    </div>    
  ); 
}
