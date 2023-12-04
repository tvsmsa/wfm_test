export default function checkNameValidity(name: string) {
  return name.match(/^[\u0401\u0451\u0410-\u044f\- ']+$/u);
}
