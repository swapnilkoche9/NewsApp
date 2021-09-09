import moment from 'moment';

export const formatDate = (date: number | Date, format: string) => {
  return moment(date).format(format);
};
