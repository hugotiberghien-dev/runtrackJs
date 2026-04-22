function jourTravaille(date) {
    const joursFeries2024 = [
        "2024-01-01",
        "2024-04-01",
        "2024-05-01",
        "2024-05-08",
        "2024-05-09",
        "2024-05-20",
        "2024-07-14",
        "2024-08-15",
        "2024-11-01",
        "2024-11-11",
        "2024-12-25"
    ];

    const dateStr = date.toISOString().split("T")[0];
    const jour = date.getDay();

    if (joursFeries2024.includes(dateStr)) {
        console.log(`${dateStr} est un jour férié`);
    } else if (jour === 0 || jour === 6) {
        console.log(`${dateStr} est un week-end`);
    } else {
        console.log(`${dateStr} est un jour travaillé`);
    }
}
