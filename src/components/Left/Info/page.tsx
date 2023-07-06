export default ({ obj, setObj }) => {
    return (
        <div className="items-start flex flex-col gap-4">
            <input
                type="text"
                placeholder="Name"
                id="name-inp"
                value={obj.name}
                onChange={(e) => {
                    setObj({
                        ...obj,
                        name: e.target.value,
                    });
                }}
            />
            <input
                type="text"
                placeholder="Title/ Position"
                id="title-inp"
                value={obj.title}
                onChange={(e) => {
                    setObj({
                        ...obj,
                        title: e.target.value,
                    });
                }}
            />
            <textarea
                name=""
                id=""
                cols={40}
                placeholder="About"
                value={obj.about}
                onChange={(e) => {
                    setObj({
                        ...obj,
                        about: e.target.value,
                    });
                }}
            />
        </div>
    );
};
