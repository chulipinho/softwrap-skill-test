export default function usePagination(records, recordsPerPage) {
    if (!records) return;

    const numberOfRecords = Object.keys(records).length;
    const numberOfPages = Math.ceil(numberOfRecords / recordsPerPage);

    const buildRecords = (currentPage) => {
        const lastRecordIndex = recordsPerPage * currentPage;
        const firstRecordIndex = lastRecordIndex - recordsPerPage;
        const recordsOnPage = Object.entries(records).slice(firstRecordIndex, lastRecordIndex);

        return recordsOnPage;
    };

    return {
        buildRecords: buildRecords,
        numberOfPages: numberOfPages
    };
}