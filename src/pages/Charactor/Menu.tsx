function Item({ name }: { name: string }) {
    return (
        <div className="text-[#EAE9E7]">{name}</div>
    )
}

function Menu() {
    const menuItems = ['属性', '命之座', '天赋', '资料']

    return (
        <menu>
            {menuItems.map(name => <Item name={name} key={name} />)}
        </menu>
    )
}

export default Menu