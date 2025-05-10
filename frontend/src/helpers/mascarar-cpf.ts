export const aplicarMascaraCpf = (value: string): string => {
  const digits = value.replace(/\D/g, "").padEnd(11, "_");

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
    6,
    9
  )}-${digits.slice(9, 11)}`;
};
