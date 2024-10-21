interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
}

export default function Input({ type, id, placeholder }: InputProps) {
  return <input type={type} id={id} placeholder={placeholder} />;
}
