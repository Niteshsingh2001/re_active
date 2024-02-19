export interface Menu {
    label: string
    children?: Array<Menu>
}

export const menus: Array<Menu> = [
    {
        label: "Home"
    },
    {
        label: "Blog",
        children: [
            { label: "Health" },
            { label: "Workout" },
            { label: "Food" },
            { label: "Mind" },
        ]
    },
    {
        label: "About Us",
        children: [
            {
                label: "Comapny",
                children: [
                    { label: "Director" },
                    { label: "Vision" },
                    { label: "Employee" },
                ]
            },
            {
                label: "Press Meet"
            },
            {
                label: "Investor",
                children: [
                    { label: "Financial Report 2022-23" },
                    { label: "Financial Report 2021-22" }
                ]
            }
        ]
    },

    {
        label: "Career"
    },

    {
        label: "Our Services",
        children: [
            { label: "IT Consultancy" },
            { label: "Life Consultancy" }
        ]
    },
]  