export const categoryFormatter = (text: string) => {
  const category = text.replace('-', ' ');
  return category.charAt(0).toUpperCase() + category.slice(1);
};
