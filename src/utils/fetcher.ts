async function getData(apiRoute: string) {
    const res = await fetch(`http://localhost:5000/${apiRoute}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
export default getData
