import { DragDropContext } from "react-beautiful-dnd";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { updateListAfterDrag } from "./redux/midarea/listSlice";

function App({ complist }) {
  const dispatch = useDispatch(); // Hook to dispatch actions

  const onDragEnd = (result) => {
    if (!result.destination) return; // Prevent errors when dropped outside a droppable area

    let element = result.draggableId.split("-")[0];

    // Create a deep copy of old_list to avoid mutating the state directly
    const old_list = [
      ...complist.midAreaLists.map((list) => ({
        ...list,
        comps: [...list.comps],
      })),
    ];

    let source_index = old_list.findIndex(
      (x) => x.id === result.source.droppableId
    );

    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1); // Remove the item from the source
      old_list[source_index].comps = comp_list; // Update the copied list
    }

    let dest_index = old_list.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (dest_index > -1) {
      let dest_comp_list = old_list[dest_index].comps;
      dest_comp_list.splice(result.destination.index, 0, element); // Insert the element in the destination
      old_list[dest_index].comps = dest_comp_list; // Update the copied list
    }

    // Dispatch the updated list to Redux
    dispatch(updateListAfterDrag(old_list));
  };

  return (
    <div className="bg-blue-100 font-sans">
      <div>
        <h1 className="text-l font-bold underline">MIT Scratch Clone</h1>
      </div>
      <div className="h-screen overflow-hidden flex flex-row pt-2 ">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />

            <MidArea />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 no-scrollbar">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    complist: state.list,
  };
};

export default connect(mapStateToProps)(App);
