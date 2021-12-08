
export function getList(arrayList: number[], inputVal: number): number[][] {

    /**Declared 2 variables with global scope
     * @chunk: used to store the output array
     * @i : used as an iterator
     */

    var chunks = [], i = 0;
    //if given array is empty we dont need to process the array , simply return []
    if(arrayList.length === 0){
        return [];
    }

    /**find the value of divider by calculating the reminder, 
     * if the reminder is zero, then we can divide the
     * array with the given value or else we can use the reminder
    */
    const chunkLength = arrayList.length % inputVal === 0 ? inputVal : arrayList.length % inputVal;
    while (i <  arrayList.length) {
        chunks.push(arrayList.slice(i, i += chunkLength));
    }
    return chunks;
}
