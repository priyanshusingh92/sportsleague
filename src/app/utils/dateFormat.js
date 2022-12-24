export const dateFormat = (timestamp) => {
  if(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${day}.${month}.${year} ${hour}:${minute}`;
  } else 
    return ''
};
