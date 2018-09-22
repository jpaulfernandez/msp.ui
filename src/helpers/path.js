export const path = [
    {
        name: 'home',
        path: '/',
        title: 'Dashboard',
        subTitle: '',
        sub: [],
    },
    {
        name: 'branch',
        path: '/branch/view',
        title: 'Branch',
        subTitle: 'Management',
        sub: [
            {
                name: 'View all',
                path: '/branch/view',
            },
            {
                name: 'Add New User',
                path: '/branch/user'
            }
        ]
    },
    {
        name: 'customer',
        path: '/customer/view',
        title: 'Customer',
        subTitle: 'Management',
        sub: [
            {
                name: 'View all',
                path: '/customer/view',
            },
            {
                name: 'Add New Customer',
                path: '/customer/client'
            }
        ]
    },
    {
        name: 'product',
        path: '/product/view',
        title: 'Product',
        subTitle: 'Management',
        sub: [
            {
                name: 'View all',
                path: '/product/view',
            },
            {
                name: 'Add New Product',
                path: '/product/product'
            }
        ]
    },
    {
        name: 'transaction',
        path: '/transaction/',
        title: 'Transaction',
        subTitle: 'Management',
        sub: [
            {
                name: 'Make Payment',
                path: '/transaction/',
            }
        ]
    }
]