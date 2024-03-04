export function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  var month = (date.getMonth() + 1).toString();
  switch (month) {
    case "1":
      month = "Января";
      break;
    case "2":
      month = "Февраля";
      break;

    case "3":
      month = "Март";
      break;

    case "4":
      month = "Апреля";
      break;

    case "5":
      month = "Мая";
      break;

    case "6":
      month = "Июня";
      break;

    case "7":
      month = "Июля";
      break;
    case "8":
      month = "Августа";
      break;

    case "9":
      month = "Сентября";
      break;

    case "10":
      month = "Октября";
      break;

    case "11":
      month = "Ноября";
      break;

    case "12":
      month = "Декабря";
      break;

    default:
      month = (date.getMonth() + 1).toString().padStart(2, "0");
  }

  const year = date.getFullYear().toString();
  return `${day} ${month}, ${year}`;
}
