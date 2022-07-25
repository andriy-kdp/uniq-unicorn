class FD {
  _values = null;
  /**
   * One-level object
   * @example {objectKey: objectValue}
   * @param dataObject
   */
  constructor(dataObject) {
    this._values = dataObject;
  }
  /**
   * Returns a form data object from object
   * @return {FormData}
   */
  get = () => {
    if (this._values && Object.entries(this._values).length) {
      const fd = new FormData();
      Object.entries(this._values).forEach(([key, value]) => fd.append(key, value));
      return fd;
    }
    throw new Error("Object in not provided by constructor or object is empty");
  };
}

export default FD;
