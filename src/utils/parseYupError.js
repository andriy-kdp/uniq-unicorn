export const parseYupError = (err) => {
  const { errors } = err;
  return errors.reduce((prev, cur) => {
    const [error] = Object.entries(cur);
    const [key, value] = error;
    return { ...prev, [key]: value };
  }, {});
};
