/* eslint-disable import/prefer-default-export */
export const defaultPage = 1;
export const resultsPerPage = 5;

/**
 * Given an array of generic data, returns the number of pages that can be
 * displayed to the user in a pagination component based on the
 * number of resultsPerPage.
 *
 * @param dataArray the arbitrary data array.
 * @returns the number of pages that can be displayed.
 */
export function getNumberOfPages<T>(dataArray: T[]): number {
    const integerDivisionResult = Math.floor(dataArray.length / resultsPerPage);
    if (dataArray.length % resultsPerPage === 0) {
        return integerDivisionResult;
    }
    return integerDivisionResult + 1;
}

/**
 * Given an array of generic data and a page number, returns a subarray of the generic data
 * to display to the user in a pagination component.
 *
 * @param dataArray the arbitrary data array.
 * @param pageNumber the page number of the page to display.
 * @returns the subarray of generic data to display.
 */
export function getCurrentPageResults<T>(
    dataArray: T[],
    pageNumber: number,
): T[] {
    return dataArray.slice(
        resultsPerPage * (pageNumber - 1),
        resultsPerPage * pageNumber,
    );
}
