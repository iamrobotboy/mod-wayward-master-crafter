var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "mod/ModRegistry", "game/entity/player/IMessageManager", "game/IObject", "mod/IHookHost"], function (require, exports, Mod_1, ModRegistry_1, IMessageManager_1, IObject_1, IHookHost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MasterCrafter extends Mod_1.default {
        onGameScreenVisible() {
            localPlayer.messages.type(IMessageManager_1.MessageType.Good).send(this.messageVersion);
        }
        onGameStart(isLoadingSave, playedCount) {
            const playerItems = [...localPlayer.inventory.containedItems];
            playerItems.push(...localPlayer.getEquippedItems());
            for (let i = 0; i < playerItems.length; i++) {
                let item = playerItems[i];
                if (item.hasOwnProperty('quality')) {
                    if (item.quality == IObject_1.Quality.Mastercrafted) {
                        item.minDur = item.maxDur;
                    }
                }
            }
        }
        onItemDamage(item, modifier) {
            if (item.hasOwnProperty('quality')) {
                if (item.quality == IObject_1.Quality.Mastercrafted) {
                    return 0;
                }
            }
        }
    }
    __decorate([
        ModRegistry_1.default.message("Version")
    ], MasterCrafter.prototype, "messageVersion", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], MasterCrafter.prototype, "onGameScreenVisible", null);
    __decorate([
        IHookHost_1.HookMethod
    ], MasterCrafter.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], MasterCrafter.prototype, "onItemDamage", null);
    exports.default = MasterCrafter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ3JhZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21hc3RlckNyYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBUUEsTUFBcUIsYUFBYyxTQUFRLGFBQUc7UUFLbkMsbUJBQW1CO1lBQ3RCLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDZCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBR00sV0FBVyxDQUFDLGFBQXNCLEVBQUUsV0FBbUI7WUFDMUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUQsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDcEQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMvQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFDN0I7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFHTSxZQUFZLENBQUMsSUFBVSxFQUFFLFFBQWdCO1lBQzVDLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDL0IsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLGlCQUFPLENBQUMsYUFBYSxFQUFFO29CQUN0QyxPQUFPLENBQUMsQ0FBQztpQkFDWjthQUNKO1FBQ0wsQ0FBQztLQUNKO0lBN0JHO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3lEQUNZO0lBR3hDO1FBREMsc0JBQVU7NERBR1Y7SUFHRDtRQURDLHNCQUFVO29EQVlWO0lBR0Q7UUFEQyxzQkFBVTtxREFPVjtJQTlCTCxnQ0ErQkMifQ==