import { format } from 'date-fns';

function formatDate(date: Date | string) {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (Number.isNaN(dateObj.getTime())) {
      throw new Error('Invalid date');
    }

    return format(dateObj, 'MMM. do yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);

    return 'Invalid Date';
  }
}

export default formatDate;
