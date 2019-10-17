class Images {

    obUpdate = () => {};

    _image_arr = new Map();

    add(title, describe, url, thumbUrl) {
        let id = Math.random().toString(36).substr(2);
        thumbUrl = thumbUrl === undefined ? url : thumbUrl;
        this._image_arr.set(id, {id: id, url: url, thumb: thumbUrl, title: title, desc: describe});
        this.obUpdate();
        return id;
    }

    remove(id) {
        this._image_arr.delete(id);
        this.obUpdate();
    }

    getImg(id) {
        return this._image_arr.get(id);
    }

    getIdList() {
        return Array.from(this._image_arr.keys());
    }

    getAll() {
        return Array.from(this._image_arr.values());
    }

}

export default Images;