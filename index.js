"use strict";

/**
 * Simple calculation of average values for an array of objects.
 *
 * @param {Array} arr - source array
 * @param {Array} skip - array with names of properties that must be skipped
 *
 * @returns {Object} - new object with averages values
 */
function getAverages(arr, skip = []) {
    if (!Array.isArray(arr)) {
        console.error(`First argument is not an array.`);
        return {};
    }
    
    if (!Array.isArray(skip)) {
        console.warn(`Second argument is not an array.`);
    }
    
    const length = arr.length;
    const average = {};

    for (let i = 0; i < length; i++) {
        const item = arr[i];
        const keys = Object.keys(item);
        
        for (const key in item) {            
            if (Array.isArray(skip) && skip.includes(key)) continue;
            if (average[key] === undefined) average[key] = 0;
            
            const value = item[key];
            
            if (Number.isFinite(value)) {
                average[key] += value;
            }
        }
    }

    for (const key in average) {
        average[key] = average[key] / length;
    }

    return average;
}

export default getAverages;
