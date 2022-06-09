const mockData = [
    {
        BATCH: {
            BATCHNO: 2252733,
            CONTACT: "PETER M. FEENEY",
            ITEMCOUNT: 2,
            PREMIUM: "17985",
            REFERENCE: "KATWD_2",
            STATUS: "OPEN"
        },
        HISTORY: {
            CREATEDATE: "10/17/2022",
            RETURNDATE: null,
            SUBMITDATE: null,
        },
        TRANSACTIONS: [
            {
                AFFIDAVITNO: "SCAFF001",
                INSUREDNAME: "CLARKSTOWN CARTING ASSOCIATES",
                ITEMNO: 1,
                POLICYNO: "POLKATWD001",
                PREMIUM: "11985",
                TRANSACTIONID: 400,
                TYPE: "DECLARATION",
            },
            {
                AFFIDAVITNO: "SCAFF002",
                INSUREDNAME: "CLARKSTOWN CARTING ASSOCIATES",
                ITEMNO: 2,
                POLICYNO: "POLKATWD002",
                PREMIUM: "600",
                TRANSACTIONID: 401,
                TYPE: "ENDORSEMENT",
            },
        ]
    },
    {
        BATCH: {
            BATCHNO: 2252675,
            CONTACT: "PETER M. FEENEY",
            ITEMCOUNT: 1,
            PREMIUM: "2000",
            REFERENCE: "STAINLESSMETAL",
            STATUS: "SUBMITTED"
        },
        HISTORY: {
            CREATEDATE: "10/17/2022",
            RETURNDATE: null,
            SUBMITDATE: "10/17/2022",
        },
        TRANSACTIONS: [
            {
                AFFIDAVITNO: "SMAFF001",
                INSUREDNAME: "STAINLESS METAL COMPANY",
                ITEMNO: 1,
                POLICYNO: "SMPOL001",
                PREMIUM: "2000",
                TRANSACTIONID: 500,
                TYPE: "DECLARATION",
            },
        ]
    },
    {
        BATCH: {
            BATCHNO: 2252364,
            CONTACT: "PETER M. FEENEY",
            ITEMCOUNT: 1,
            PREMIUM: "45000",
            REFERENCE: "CA0000024235",
            STATUS: "RETURNED"
        },
        HISTORY: {
            CREATEDATE: "10/10/2022",
            RETURNDATE: "10/15/2022",
            SUBMITDATE: "10/10/2022",
        },
        TRANSACTIONS: [
            {
                AFFIDAVITNO: "VHAFF001",
                INSUREDNAME: "VIBRANT HEALTH IMAGING",
                ITEMNO: 1,
                POLICYNO: "BINDER",
                PREMIUM: "45000",
                TRANSACTIONID: 600,
                TYPE: "BINDER",
            },
        ]
    },
]

export default mockData;
