import Item from "@/components/Left/Links/Items/Item/page";

export default ({ obj, setObj }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {obj.links.map((i) => (
                <Item val={i} obj={obj} setObj={setObj} />
            ))}
        </div>
    );
};
