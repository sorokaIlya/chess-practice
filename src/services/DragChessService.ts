
// class for ui redraw
export class DragChessService {
    private dragItem: Element|null = null;
    dragOver() {
        console.log('drag over');
    }
    dragEnter() {
        console.log('drag entered');
    }
    dragLeave() {
        console.log('drag left');
    }
     dragDrop() {
        console.log('drag dropped');
    }

}