import React, { useState } from "react";

interface EasyFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
  children: (props: {
    email: string;
    password: string;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }) => React.ReactNode;
}

export const EasyForm = ({ onSubmit, children }: EasyFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {children({
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
      })}
    </form>
  );
};
