import Chat from '@jsprismarine/prismarine/dist/src/chat/Chat';
import Player from '@jsprismarine/prismarine/dist/src/player/Player';
import type PluginApi from '@jsprismarine/prismarine/dist/src/plugin/api/versions/1.0/PluginApi';

export default class PluginBase {
    api: PluginApi;

    constructor(api: PluginApi) {
        this.api = api;
    }

    public async onEnable() { 
        const Console = this.api.getServer().getConsole();
        setInterval(() => {
             setTimeout(() => {
                this.api.getServer().getCommandManager().dispatchCommand(Console, 'say [COVID] Wash your hands!')
                setTimeout(() => {
                    this.api.getServer().getCommandManager().dispatchCommand(Console, 'say [COVID] Keep distance!')
                }, 30000);
             }, 30000);
             
        }, 60000);
    }
    public async onDisable() { }
}