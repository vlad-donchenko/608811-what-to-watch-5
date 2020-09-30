const formatReleaseDate = (dateRaw) => {
  const date = new Date(dateRaw);

  return `${date.getFullYear()}`;
};

export {formatReleaseDate};
