export default function decode(values) {
  const data = values.map((el) => {
    const [key, value] = Object.entries(el);
    return { [key[0]]: atob([key[1]]) };
  });
  return data;
}
