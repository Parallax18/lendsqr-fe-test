export const IndexedDbConfig = {
    name: 'LendsqrUsersDatabase',
    version: 1,
    objectStoresMeta: [
        {
            store: 'users',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: "organization", keypath: ["orgName"], options: { unique: false } },
                { name: "name", keypath: ["userName"], options: {unique: true} },
                { name: "email", keypath: ["email"], options: {unique: true} },
                { name: "date", keypath: ["createdAt"], options: {unique: false} },
                { name: "phone", keypath: ["phoneNumber"], options: {unique: true} },
                { name: "status", keypath: "status", options: {unique: false} },
                { name: "organization_status", keypath: ["orgName", "status"], options: {unique: false} },
                { name: "organization_date", keypath: ["orgName", "createdAt"], options: {unique: false} },
                { name: "organization_date_status", keypath: ["orgName", "createdAt", "status"], options: {unique: false} },
                { name: "organization_name_email_date_phone", keypath: ["orgName", "userName", "email", "createdAt", "phoneNumber"], options: {unique: false} },
                // { name: "" }
            ]
        }
    ]
}


