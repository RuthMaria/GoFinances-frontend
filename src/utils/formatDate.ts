const formatDate = (createdAt: Date): string => {
  const date = new Date(createdAt);

  const dateFormatted = date.toLocaleDateString('pt-br');

  return dateFormatted;
};

export default formatDate;
