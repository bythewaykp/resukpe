<div className="grid grid-cols-2 gap-2">
    <input
        type="text"
        value={tempInp.provider}
        placeholder="provider"
        onChange={(e) => {
            setTempInp({
                ...tempInp,
                provider: e.target.value,
            });
        }}
    />
    <input
        type="file"
        onChange={(e) => {
            console.log(e.target.files);

            setTempInp({
                ...tempInp,
                image: URL.createObjectURL(e.target.files[0]),
            });
        }}
        accept="image/png, image/jpeg"
    />
    <input
        id="temp-link-display"
        type="text"
        value={tempInp.display}
        placeholder="link display"
        onChange={(e) => {
            setTempInp({
                ...tempInp,
                display: e.target.value,
            });
        }}
    />
    <input
        id="temp-link-url"
        type="text"
        value={tempInp.url}
        placeholder="url"
        onChange={(e) => {
            setTempInp({
                ...tempInp,
                url: e.target.value,
            });
        }}
    />
</div>;
