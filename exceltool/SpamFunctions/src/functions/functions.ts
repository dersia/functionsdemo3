/**
 * Adds the text to the queue.
 * @customfunction
 * @param text text to be added
 */

export async function sendToQueue(text: string): Promise<void> {
  const functionUrl = "https://pottnetdemo.azurewebsites.net/api/HttpTrigger1";
  let headers = new Headers();
  headers.set("Content-Type", "text/plain");
  let fetchOptions: RequestInit = {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: headers,
    body: text
  };
  let requestUrl = new URL(functionUrl);
  await fetch(requestUrl.toString(), fetchOptions);
}

/**
 * Calculates with Azure Functions.
 * @customfunction
 * @param first number for calculation
 * @returns calculated number
 */

export async function calc(first: number): Promise<number> {
  const functionUrl = "https://pottnetdemo.azurewebsites.net/api/HttpTrigger2";
  let headers = new Headers();
  headers.set("Content-Type", "application/json");
  let fetchOptions: RequestInit = {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: headers,
    body: JSON.stringify({number: first})
  };
  let requestUrl = new URL(functionUrl);
  var response = await fetch(requestUrl.toString(), fetchOptions);
  return response.text().then(text => Number.parseInt(text));
}