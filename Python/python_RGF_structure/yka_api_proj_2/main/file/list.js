import { Module } from "../_libs/module.js";
export class Main extends Module {
    constructor(cfg) {
        super();
        this.cfg = cfg;
    }
    async init_before_ui() {
        // const res = await ajax_get('/file/list')
    }
    async init_after_ui() {
        set_active_menu('files');
    }
    // ----------------------------------------------------------------------------------------------
    async ui() {
        return this.render(`
            qq1
        `);
    }
}
