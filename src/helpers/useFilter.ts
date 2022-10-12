
interface FilterProps {
    filterObject: object,
    getByIndex:  (indexName: string, key: any) => Promise<any>
}

export const filterUsers = ({filterObject, getByIndex}:FilterProps) => {
    const indexNames: string[] = []
    // const group = Object.values(filterObject).filter(i => i !== '')

    for (const obj in filterObject){
        // @ts-ignore
        (filterObject[obj] === '') ? delete filterObject[obj] : indexNames.push(obj)
    }

    // indexNames.join('_')
    return new Promise(resolve => {
        indexNames.forEach((idx) => {
            // @ts-ignore
            console.log(idx, filterObject[idx])
            // @ts-ignore
            getByIndex(idx, [filterObject[idx]]).then(personFromDB => {
                console.log("promise land",personFromDB)
                resolve(personFromDB)
            });
        })
    })
}