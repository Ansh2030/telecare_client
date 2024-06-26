export async function createRoom() {
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp,
    },
  };

  try {
    const response = await fetch('https://api.daily.co/v1/rooms/', {
      method: 'POST',
      body: JSON.stringify(options),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + 'eeeb3c6cddd70ff9b08741776062e7a0128920b9806399a07dbcd893e2a82cb3',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}