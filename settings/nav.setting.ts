export default [
    {
        icon: "la-home",
        url: "/",
        title: "Dashboard",
    },
    {
        icon: "la-mail-bulk",
        title: "Email",
        url: "/email",
        key: "email",
        childrens: [
            {
                url: "/inbox",
                icon: "las la-inbox",
                title: "Inbox"
            },
            {
                url: "/send",
                icon: "ri-mail-send-line",
                title: "Send"
            }
        ]
    }
]