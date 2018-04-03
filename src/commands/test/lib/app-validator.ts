import * as path from "path";
import * as fs from "fs";
import * as JsZip from "jszip";
import * as _ from "lodash";
import * as Pfs from "../../../util/misc/promisfied-fs";

export class AppValidator {
  private appPath: string;

  public static async validate(appPath: string) {
    let validator = new AppValidator(appPath);
    await validator.validate();
  }

  constructor(appPath: string) {
    if (!appPath) {
      throw new Error("Argument appPath is required");
    }
    this.appPath = appPath;
  }

  public async validate() {
    if (this.isAndroidApp()) {
      if (await this.usesSharedRuntime()) {
        throw new Error("Shared runtime apps are not supported yet.\
Your application needs to be compiled for release.");
      }
    }
    else if (!this.isIosApp()) {
      throw new Error("The application file must be either Android or iOS application");
    }
  }

  public isIosApp(): boolean {
    return path.extname(this.appPath) === ".ipa";
  }

  public isAndroidApp(): boolean {
    return path.extname(this.appPath) === ".apk";
  }

  public async usesSharedRuntime(): Promise<boolean> {
    return false;
  }
}