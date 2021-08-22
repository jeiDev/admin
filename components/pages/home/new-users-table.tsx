import TableList from "~/components/others/tables/table-list"

const NewUsersTable = () => {

    return (
        <TableList 
            title="New Users"
            datas={[{}, {}, {}, {}]}
            columns={[
                {
                    field: "Profile",
                    render: () => (
                        <img src="images/user/02.jpg" alt="profile" className="img-fluid rounded avatar-40 text-center" />
                    )
                },
                {
                    field: "Full Name",
                    render: () => (<>Jei Devp</>)
                },
                {
                    field: "Telefono",
                    render: () => (<>(809) 452-3658</>)
                },
                {
                    field: "Email",
                    render: () => (<>jei@dev.com</>)
                },
                {
                    field: "Estatus",
                    render: () => (<>False</>)
                }
            ]}
        />
    )
}

export default NewUsersTable