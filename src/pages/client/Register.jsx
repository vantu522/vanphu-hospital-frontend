import icongg from "../../assets/images/icongg.png"; 

export default function SignUp() {   
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
            <form className="space-y-5">               
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                 
                <div>                   
                  <label                     
                    htmlFor="firstName"                     
                    className="block text-sm font-medium text-gray-700 mb-1"                   
                  >                     
                    Họ *                   
                  </label>                   
                  <input                     
                    id="firstName"                     
                    name="firstName"                     
                    type="text"                     
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                     
                    placeholder="Nhập họ của bạn"                     
                    required                   
                  />                 
                </div>                 
                <div>                   
                  <label                     
                    htmlFor="lastName"                     
                    className="block text-sm font-medium text-gray-700 mb-1"                   
                  >                     
                    Tên *                   
                  </label>                   
                  <input                     
                    id="lastName"                     
                    name="lastName"                     
                    type="text"                     
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                     
                    placeholder="Nhập tên của bạn"                     
                    required                   
                  />                 
                </div>               
              </div>                
              <div>                 
                <label                   
                  htmlFor="email"                   
                  className="block text-sm font-medium text-gray-700 mb-1"                 
                >                   
                  Email *                 
                </label>                 
                <input                   
                  id="email"                   
                  name="email"                   
                  type="email"                   
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                   
                  placeholder="email@example.com"                   
                  required                 
                />               
              </div>                
              <div>                 
                <label                   
                  htmlFor="phone"                   
                  className="block text-sm font-medium text-gray-700 mb-1"                 
                >                   
                  Số điện thoại                 
                </label>                 
                <input                   
                  id="phone"                   
                  name="phone"                   
                  type="tel"                   
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                   
                  placeholder="0987 654 321"                 
                />               
              </div>                
              <div>                 
                <label                   
                  htmlFor="password"                   
                  className="block text-sm font-medium text-gray-700 mb-1"                 
                >                   
                  Mật khẩu *                 
                </label>                 
                <input                   
                  id="password"                   
                  name="password"                   
                  type="password"                   
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                   
                  placeholder="••••••••"                   
                  required                 
                />                 
                <p className="mt-1 text-xs text-gray-500">                   
                  Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số                 
                </p>               
              </div>                
              <div>                 
                <label                   
                  htmlFor="confirmPassword"                   
                  className="block text-sm font-medium text-gray-700 mb-1"                 
                >                   
                  Xác nhận mật khẩu *                 
                </label>                 
                <input                   
                  id="confirmPassword"                   
                  name="confirmPassword"                   
                  type="password"                   
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"                   
                  placeholder="••••••••"                   
                  required                 
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
                  />                 
                </div>                 
                <div className="ml-3 text-sm">                   
                  <label htmlFor="terms" className="font-medium text-gray-700">                     
                    Tôi đồng ý với{" "}                     
                    <a href="#" className="text-emerald-600 hover:text-emerald-500">                       
                      Điều khoản dịch vụ                     
                    </a>{" "}                     
                    và{" "}                     
                    <a href="#" className="text-emerald-600 hover:text-emerald-500">                       
                      Chính sách bảo mật                     
                    </a>                   
                  </label>                 
                </div>               
              </div>                
              <div>                 
                <button                   
                  type="submit"                   
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"                 
                >                   
                  ĐĂNG KÝ                 
                </button>               
              </div>             
            </form>              
            <div className="mt-6">               
              <div className="relative">                 
                <div className="absolute inset-0 flex items-center">                   
                  <div className="w-full border-t border-gray-300" />                 
                </div>                 
                <div className="relative flex justify-center">                   
                  <span className="px-2 bg-white text-sm text-gray-500">                     
                    Hoặc đăng ký bằng                   
                  </span>                 
                </div>               
              </div>                
              <div className="mt-12">                 
                <button                   
                  type="button"                   
                  className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"                 
                >                   
                  <img                     
                    src={icongg}                     
                    alt="Google icon"                     
                    className="w-5 h-5 mr-2"                   
                  />                   
                  Google                 
                </button>               
              </div>             
            </div>           
          </div>            
          <div className="px-8 py-4 bg-gray-50 text-center">             
            <p className="text-sm text-gray-600">               
              Đã có tài khoản?{" "}               
              <a                 
                href="/dang-nhap"                 
                className="font-medium text-emerald-600 hover:text-emerald-500"               
              >                 
                Đăng nhập ngay               
              </a>             
            </p>           
          </div>         
        </div>       
      </div>     
    </div>   
  ); 
}
