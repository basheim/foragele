export const post = async (url: string, body: any, username?: string, password?: string) => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  if (username && password) {
    headers['Authorization'] = 'Basic ' + Buffer.from(username + ":" + password).toString('base64');
  }
  
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
  return response;
}