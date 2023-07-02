async function main() {
    const response = await fetch('/api/hello');
    console.log(response);
    const responseBody = await response.json()
    console.log(responseBody);
}

main();