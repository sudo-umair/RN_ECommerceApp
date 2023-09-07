export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const categoryFormatter = (text: string) => {
  const category = text.replace('-', ' ');
  return capitalize(category);
};

export const ratingFormatter = (rating: number) => {
  return '⭐'.repeat(rating);
};
