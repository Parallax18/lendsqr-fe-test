export const IndexedDbConfig = {
    name: 'LendsqrUsersDatabase',
    version: 1,
    objectStoresMeta: [
        {
            store: 'users',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: "user_organization", keypath: "orgName", options: { unique: false } },
                { name: "user_name", keypath: "userName", options: {unique: true} },
                { name: "user_email", keypath: "email", options: {unique: true} },
                { name: "date_user_joined", keypath: "createdAt", options: {unique: false} },
                { name: "user_phone", keypath: "phoneNumber", options: {unique: true} },
                // { name: "user_status", keypath: "status", options: {unique: false} },
                // { name: "organization_and_status", keypath: ["orgName", "status"], options: {unique: false} },
                { name: "organization_and_date", keypath: ["orgName", "createdAt"], options: {unique: false} },
                { name: "organization_date_and_status", keypath: ["orgName", "createdAt", "status"], options: {unique: false} }
            ]
        }
    ]
}


