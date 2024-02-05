export const fetchHygraphQuery = async (query: string) => {
    try {
        const response = await fetch(process.env.HYGRAPH_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.HYGRAPH_TOKEN}`
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            throw new Error(`Erro ao realizar a solicitação: ${response.statusText}`);
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao executar a consulta GraphQL:', error);
        throw error; // Propague o erro para o código que chama fetchHygraphQuery
    }
}

