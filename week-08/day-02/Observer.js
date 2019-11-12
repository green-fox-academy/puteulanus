
function CreateObservableObject(obj) {
    obj.addObserver = function (watcher, name) {
        this.ObserverObject = watcher;
        this.ObserverSaveName = name;
        return this;
    };

    obj.obUpdate = function () {
        let resObj = {};
        resObj[this.ObserverSaveName] = this;
        this.ObserverObject.setState(resObj);
    };

    return obj;
}

export default CreateObservableObject;