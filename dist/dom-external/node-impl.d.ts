import { InstanceNamedFactory } from '../interface';
import type { Ctx, GetDoc } from '../interface';
export declare class TaroNodeImpl {
    getDoc: GetDoc;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    getElement: InstanceNamedFactory);
    bind(ctx: Ctx): void;
}
