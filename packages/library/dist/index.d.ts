import React from "react";
interface EasyFormProps {
    onSubmit: (formData: {
        email: string;
        password: string;
    }) => void;
    children: (props: {
        email: string;
        password: string;
        handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    }) => React.ReactNode;
}
export declare const EasyForm: ({ onSubmit, children }: EasyFormProps) => React.JSX.Element;
export {};
