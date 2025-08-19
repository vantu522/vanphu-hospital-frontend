import { useState } from "react";

export const useSignUpState = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Reset form
  const resetForm = () => {
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setTerms(false);
    setError('');
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
    resetForm
  };
};
