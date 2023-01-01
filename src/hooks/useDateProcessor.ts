
const useDateProcessor = () => {
  const convertDateToDBformat = (dateProp: Date): string => {
    return `${dateProp.getFullYear()}/${
      dateProp.getMonth() + 1
    }/${dateProp.getDate()}`;
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
