async function getData(apiRoute: string) {
    const res = await fetch(`${process.env.API_URL}/${apiRoute}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
export default getData
