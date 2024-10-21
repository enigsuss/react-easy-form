interface AddProps {
  a: number;
  b: number;
}

export default function add({ a, b }: AddProps) {
  return a + b;
}
