import { format } from 'date-fns';

function formatDate(date: Date) {
  return format(date, 'MMM. do yyyy');
}

export default formatDate;
