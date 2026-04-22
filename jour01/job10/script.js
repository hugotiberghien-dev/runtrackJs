function compterVoyelles(phrase) {
    const voyelles = "aeiouyAEIOUY";
    let count = 0;

    for (let char of phrase) {
        if (voyelles.includes(char)) {
            count++;
        }
    }

    console.log(`La phrase contient ${count} voyelles`);
}
