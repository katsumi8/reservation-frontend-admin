const useDateProcessor = () => {
  // manage to YYYY/MM/DD format
  const convertDateToDBformat = (dateProp: Date): string => {
    const year = dateProp.getFullYear();
    const month = dateProp.getMonth() + 1;
    const day = dateProp.getDate();

    return `${year}/${month < 10 ? "0" + month.toString() : month}/${
      day < 10 ? "0" + day.toString() : day
    }`;
  };

  const convertDateToString = (dateProp: Date): string => {
    return `${dateProp.getDate()}.${dateProp.getMonth() + 1}.${dateProp
      .getFullYear()
      .toString()
      .substring(2, 4)}`;
  };

  const isToday = (dateProp: Date): boolean => {
    return convertDateToString(dateProp) === convertDateToString(new Date());
  };

  return {
    convertDateToDBformat,
    convertDateToString,
    isToday,
  };
};

export default useDateProcessor;
