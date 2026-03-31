export default function initTradeInTables() {
    const tables = document.querySelectorAll('.trade-in-table');

    const isUnavailableValue = (value) => {
        const text = value.replace(/\u00a0/g, ' ').trim();
        return /^(x|✘|✗|×)$/i.test(text);
    };

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

                if (index > 0 && isUnavailableValue(cell.textContent)) {
                    cell.classList.add('is-unavailable');
                }
            });

            const dataCells = cells.slice(1);
            if (dataCells.length && dataCells.every((cell) => isUnavailableValue(cell.textContent))) {
                row.classList.add('is-all-unavailable');
            }
        });

        const visibleRows = rows.filter((row) => !row.classList.contains('is-all-unavailable'));
        if (!visibleRows.length) {
            table.classList.add('is-all-unavailable');
        }
    });
}
