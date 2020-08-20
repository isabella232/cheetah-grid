import { BaseAction } from "./BaseAction";
import type { EditorOption } from "../../ts-types";
export abstract class Editor<T> extends BaseAction<T> {
  protected _readOnly: boolean;
  constructor(option: EditorOption = {}) {
    super(option);
    this._readOnly = option.readOnly || false;
  }
  get editable(): boolean {
    return true;
  }
  get readOnly(): boolean {
    return this._readOnly;
  }
  set readOnly(readOnly: boolean) {
    this._readOnly = !!readOnly;
    this.onChangeReadOnlyInternal();
  }
  onChangeReadOnlyInternal(): void {
    // abstruct
  }
}
