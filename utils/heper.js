export function formatDate(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "minggu",
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
  ];

  const months = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const dayName = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${monthName} ${year}`;
}

export function getTableContent(html) {
  const regex = /<h(\d)>(.*?)<\/h\d>/g;
  const result = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    const tagName = `h${match[1]}`;
    const text = match[2].trim();
    result.push({ tag: tagName, text: text });
  }

  return result;
}

export function addIdToHeadings(html) {
  return html.replace(
    /<h(\d)>(.*?)<\/h\d>/g,
    (match, headingLevel, headingText) => {
      const id = headingText.trim().replace(/\s+/g, "-").toLowerCase();
      return `<h${headingLevel} id="${id}">${headingText}</h${headingLevel}>`;
    }
  );
}

export function capitalize(string) {
  return string.replace(/^./, string[0].toUpperCase());
}
