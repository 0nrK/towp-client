async function getData(apiRoute: string) {
    const res = await fetch(`http://localhost:5000/${apiRoute}`);
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
export default getData
