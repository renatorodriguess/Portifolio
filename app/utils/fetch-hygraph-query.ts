export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
) => {
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    };

    const response = await fetch(process.env.HYGRAPH_URL!, requestOptions);

    const { data } = await response.json();

    return data;
}
