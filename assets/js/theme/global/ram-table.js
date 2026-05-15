export default function initRamTables() {
    const tables = document.querySelectorAll('.ram-table');

    tables.forEach((table) => {
        let headers = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent.trim());

        // Support CMS tables where header cells are authored in the first tbody row.
        if (!headers.length) {
            const firstBodyRow = table.querySelector('tbody tr');
            if (firstBodyRow) {
                const rowHeaders = Array.from(firstBodyRow.querySelectorAll('th')).map((th) => th.textContent.trim());
                if (rowHeaders.length) {
                    headers = rowHeaders;
                    firstBodyRow.classList.add('has-table-headings');
                }
            }
        }

        if (!headers.length) {
            return;
        }

        const rows = Array.from(table.querySelectorAll('tbody tr')).filter((row) => !row.classList.contains('has-table-headings'));

        rows.forEach((row) => {
            const cells = Array.from(row.children).filter((cell) => cell.tagName === 'TD');

            cells.forEach((cell, index) => {
                if (cell.tagName !== 'TD') {
                    return;
                }

                cell.setAttribute('data-label', headers[index] || 'Value');
            });
        });
    });
}