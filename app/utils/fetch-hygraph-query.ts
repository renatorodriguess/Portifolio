export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T | null> => {
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return null;
    }

    const jsonResponse = await response.json();

    if (!jsonResponse || !jsonResponse.data) {
      console.error('Error: Response or data is undefined');
      return null;
    }

    return jsonResponse.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
};
