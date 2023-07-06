import Items from "@/components/Left/Links/Items/page";
import Add from "@/components/Left/Links/Add/page";

export default ({ obj, setObj }) => {
    return (
        <div>
            <div className="text-2xl text-[#FF5E53] py-4">LINKS</div>
            <Items obj={obj} setObj={setObj} />
            <Add obj={obj} setObj={setObj} />
        </div>
    );
};
