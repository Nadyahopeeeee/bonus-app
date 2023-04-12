const headersData = {
  'Content-Type': 'application/json',
  AccessKey: '891cf53c-01fc-4d74-a14c-592668b7a03c',
  accept: 'application/json',
};

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: headersData,
    body: JSON.stringify(data),
  });
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: headersData,
  });
}
