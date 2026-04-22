function tri(numbers, order) {
    return numbers.sort((a, b) => {
        return order === "asc" ? a - b : b - a;
    });
}
