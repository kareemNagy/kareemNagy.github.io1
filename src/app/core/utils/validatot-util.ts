export class ValidatorUtil {
  constructor() {}

  static isValidFileExtension(file: any, allowedExtensions: string[]) {
    const extension = this.getFileExtension(file.name);
    if (extension) {
      if (allowedExtensions.indexOf(extension) > -1) {
        return true;
      }
    }
    return false;
  }

  static getFileExtension(filename: string) {
    if (filename.indexOf(".") === -1) {
      return null;
    }
    return filename.split(".").pop()?.toLowerCase();
  }
}
