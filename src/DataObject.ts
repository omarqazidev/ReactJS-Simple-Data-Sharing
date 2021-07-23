class DataObject {
  public static data: string = "initial data";

  static setData(value: string) {
    DataObject.data = value;
  }

  static getData() {
    return DataObject.data;
  }
}

export default DataObject;
