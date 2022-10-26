
function Item({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
}

function Attribute() {

    const attrs = [
        {
            label: '生命值上限',
            value: '16,196'
        },
        {
            label: '攻击力',
            value: '1,196'
        },
        {
            label: '防御力',
            value: '696'
        },
        {
            label: '元素精通',
            value: '96'
        },
        {
            label: '体力上限',
            value: '196'
        }
    ]

    return (
        <div className="text-white">
            <div>普通莹</div>
            <div>等级90/90</div>
            {attrs.map(attr => <Item {...attr}></Item>)}
            <div>详细信息</div>
            <div>从世界之外漂流而来的旅行者，被神带走血亲，自此踏上寻找七神之路。</div>
        </div>
    )
}

export default Attribute