export const GET_RESULTS = 'GET_RESULTS';
export const SET_RESULTS = 'SET_RESULTS';

export function getResults() {
    return { type: GET_RESULTS };
}

export function setResults(results) {
    return { type: SET_RESULTS, results};
}