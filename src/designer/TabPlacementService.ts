import { DefaultPlacementService, IDesignItem, IPlacementView, IPoint } from "@node-projects/web-component-designer";
import { TabWebcomponent } from "../tab/TabWebcomponent.js";

export default class TabPlacementService extends DefaultPlacementService {
    override serviceForContainer(container: IDesignItem, containerStyle: CSSStyleDeclaration) {
        if (container.element instanceof TabWebcomponent)
            return true;
        return false;
    }

    override enterContainer(container: IDesignItem, items: IDesignItem[]) {
        for (let i of items) {
            if (i.hasStyle('position'))
                i.removeStyle('position');
            if (i.hasStyle('width'))
                i.removeStyle('width');
            if (i.hasStyle('height'))
                i.removeStyle('height');
            if (i.hasStyle('left'))
                i.removeStyle('left');
            if (i.hasStyle('top'))
                i.removeStyle('top');
        }
    }

    override place(event: MouseEvent, placementView: IPlacementView, container: IDesignItem, startPoint: IPoint, offsetInControl: IPoint, newPoint: IPoint, items: IDesignItem[]): void {
    }

    override finishPlace(event: MouseEvent, placementView: IPlacementView, container: IDesignItem, startPoint: IPoint, offsetInControl: IPoint, newPoint: IPoint, items: IDesignItem[]): void {
    }
}