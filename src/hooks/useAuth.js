import { useState } from 'react';
import { registerClient,loginClient } from '../services/client/auth'; // Import hàm đăng ký từ dịch vụ
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);  // Kiểm tra trạng thái đang gửi API
  const [error, setError] = useState('');  // Để hiển thị lỗi
  const [passwordError, setPasswordError] = useState(''); // Lỗi mật khẩu

  // Hàm xử lý khi người dùng submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
      setPasswordError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    // Kiểm tra điều khoản
    if (!terms) {
      setError("Bạn phải đồng ý với điều khoản");
      return;
    }

    // Reset lỗi cũ
    setPasswordError('');
    setError('');

    // Set trạng thái loading trước khi gọi API
    setLoading(true);

    // Dữ liệu đăng ký
    const clientData = {
      phone_number: phone, // Sử dụng phone_number thay vì phone
      password,
      // terms,
    };

    try {
      // Gọi API đăng ký
      const result = await registerClient(clientData);
      console.log('Đăng ký thành công!', result);
      toast.success("Đăng ký thành công!"); // Hiển thị thông báo thành công
      navigate('/dang-nhap');

      // Xử lý sau khi đăng ký thành công (ví dụ: chuyển hướng hoặc hiển thị thông báo thành công)
    } catch (error) {
      // Xử lý lỗi khi gọi API
      setError("Đăng ký không thành công. Vui lòng thử lại.");
      console.error(error);
      toast.error("Đăng ký không thành công. Vui lòng thử lại."); // Hiển thị thông báo lỗi
    } finally {
      setLoading(false);
    }
  };

  return {
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
    handleSubmit,
  };
};




export const useLogin = () => {
  const navigate = useNavigate();  // Khởi tạo navigate
  const [phone, setPhone] = useState(''); // State để lưu email
  const [password, setPassword] = useState(''); // State để lưu mật khẩu
  const [loading, setLoading] = useState(false);  // Kiểm tra trạng thái khi gọi API
  const [error, setError] = useState('');  // Hiển thị lỗi khi đăng nhập
  const [rememberMe, setRememberMe] = useState(false); // Quản lý checkbox ghi nhớ tài khoản

  // Hàm xử lý đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu email và password trống
    if (!phone_number || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setLoading(true); // Đặt trạng thái loading là true khi đang gửi yêu cầu

    const loginData = {
      phone_number: phone, // Sử dụng phone_number thay vì phone
      password,
      // remember: rememberMe, // Gửi thông tin ghi nhớ tài khoản
    };

    try {
      // Gọi hàm loginClient từ service
      const result = await loginClient(loginData);
      console.log('Đăng nhập thành công!', result);

      // Hiển thị thông báo toast thành công
      toast.success("Đăng nhập thành công!");

      // Điều hướng tới trang chính hoặc trang dashboard sau khi đăng nhập thành công
      navigate('/'); // Đổi thành đường dẫn bạn muốn chuyển hướng

    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setError("Đăng nhập không thành công, vui lòng thử lại."); // Hiển thị thông báo lỗi
      toast.error("Đăng nhập thất bại, vui lòng thử lại.");
    } finally {
      setLoading(false); // Đặt lại trạng thái loading khi hoàn thành
    }
  };

  return {
    phone,
    setPhone,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,
    error,
    handleSubmit,
  };
};
